import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalConstants } from '../../common/global.constant';
import { IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  errorMsg: String = '';
  successMsg: String = '';
  submit = false;
  useOtp: boolean = false;
  liveOrLastLocation:any;
  lat: any;
  lng: any;

  constructor(
    public globalVar: GlobalConstants,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private integrationLogService: IntegrationLogService,) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this. getUserLocation();
    this.loginForm = this.formBuilder.group({
      user: [''],
      pass: [''],
      mobileNo: [''],
    });

    if (this.globalVar.isLoggeddIn) {
      this.router.navigateByUrl('/complaints')
    }

  }

  changed(evt) {

    if (evt.checked) {
      this.useOtp = true;
    } else {
      this.useOtp = false;
    }
  }

  get f() { return this.loginForm.controls; }

  clickRedirect() {
    this.router.navigateByUrl(`/signup`)
  }


  onSubmit() {
    this.submit = true;
    this.liveOrLastLocation = this.globalVar.subArea1;
    //alert(this.liveOrLastLocation);
    this.authService.login(this.loginForm.value, this.liveOrLastLocation).subscribe((res: any) => {
      this.submit = false;

      if (res.status && !res.otp) {
        this.successMsg = res.message;
        sessionStorage.setItem('name', res.data.name);
        sessionStorage.setItem('role', res.data.role);
        sessionStorage.setItem('user', res.data.user);
        sessionStorage.setItem('id', res.data.id);
        sessionStorage.setItem('createAt', res.data.createAt);
        sessionStorage.setItem('department', res.data.department);

        this.globalVar.isLoggeddIn = true;
        this.globalVar.id = sessionStorage.getItem('id');
        this.globalVar.role = sessionStorage.getItem('role');
        this.globalVar.user = sessionStorage.getItem('user');
        this.globalVar.name = sessionStorage.getItem('name');
        this.globalVar.createAt = sessionStorage.getItem('createAt');
        this.router.navigateByUrl('/dashboard');
      } else if(res.otp && res.status){
        this.successMsg = res.message;
        sessionStorage.setItem('name', res.data.name);
        sessionStorage.setItem('role', res.data.role);
        sessionStorage.setItem('user', res.data.user);
        sessionStorage.setItem('id', res.data.id);
        sessionStorage.setItem('createAt', res.data.createAt);
        sessionStorage.setItem('department', res.data.department);

        this.globalVar.isLoggeddIn = false;
        this.globalVar.id = sessionStorage.getItem('id');
        this.globalVar.role = sessionStorage.getItem('role');
        this.globalVar.user = sessionStorage.getItem('user');
        this.globalVar.name = sessionStorage.getItem('name');
        this.globalVar.createAt = sessionStorage.getItem('createAt');
        this.router.navigateByUrl('/otpValidate');
      } 
      else {
        this.submit = false;
        this.errorMsg = res.message
      }
    })
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.integrationLogService.getLocation(this.lat, this.lng).subscribe((res: any) => {
          sessionStorage.setItem('subArea1', res.data.subArea1);
          sessionStorage.setItem('city', res.data.city);
          sessionStorage.setItem('state',res.data.state);
          sessionStorage.setItem('postcode', res.data.postcode);
          sessionStorage.setItem('country', res.data.country);
          sessionStorage.setItem('country_code', res.data.country_code);
          
          this.globalVar.subArea1 = sessionStorage.getItem('subArea1');
          this.globalVar.city = sessionStorage.getItem('city');
          this.globalVar.state = sessionStorage.getItem('state');
          this.globalVar.postcode = sessionStorage.getItem('postcode');
          this.globalVar.country = sessionStorage.getItem('country');
          this.globalVar.country_code = sessionStorage.getItem('country_code');
         
     
        });
      });
    } else {
      console.log("User not allow")

    }
  }
}
