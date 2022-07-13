import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalConstants } from '../../common/global.constant';

@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  styleUrls: ['./otpvalidation.component.scss']
})
export class OtpvalidationComponent implements OnInit {

  loginForm: any;
  errorMsg: String = '';
  successMsg: String = '';
  submit = false;
  useOtp: boolean = false;

  constructor(public globalVar: GlobalConstants,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService) { }

  ngOnInit() : void{
    window.scrollTo(0, 0);
    this.loginForm = this.formBuilder.group({
      otp: ['']
    });
  }

  onSubmit() {
    this.submit = true;
    this.authService.otp(this.loginForm.value).subscribe((res: any) => {
      if (res.status ) {
        this.globalVar.isLoggeddIn = false;
        this.router.navigateByUrl('/dashboard');
      }else{
        this.submit = false;
        this.errorMsg = res.message
      }
    })
  }

}
