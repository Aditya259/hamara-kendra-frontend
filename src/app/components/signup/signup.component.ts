import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalConstants } from '../../common/global.constant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  loginForm: any;
  errorMsg: String = '';
  successMsg: String = '';
  submit = false;
  useOtp: boolean = false;
  
  constructor(
    public globalVar: GlobalConstants,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loginForm = this.formBuilder.group({
      user: [''],
      pass: [''],
      mobileNo: ['']
    });

    if (this.globalVar.isLoggeddIn) {
      this.router.navigateByUrl('/complaints')
    }

  }

  get f() { return this.loginForm.controls; }

  clickRedirect(){
      this.router.navigateByUrl(`/signup`)    
  }


  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    this.submit = true;
    this.authService.signup(this.loginForm.value).subscribe((res: any) => {
      this.submit = false;

      if (res.status) {
        this.successMsg = res.message;
        Swal.fire({
          title: 'Registeration Successfull',
          text: 'Please login with new credentials',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
        this.router.navigateByUrl('/dashboard');
      } else {
        this.submit = false;
        this.errorMsg = res.message
        Swal.fire({
          title: 'Error! Something Went Wrong .',
          text: 'Please try after some time our contact admin for support',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
      }
    })
  }
}
