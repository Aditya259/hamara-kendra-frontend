import { Component, OnInit } from '@angular/core';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../../../common/global.constant';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

selectedemployeeName : any;
selectedEmployeeDate : any;
selectedemployeeArea : any;
selectedemployeeLocation : any;
selectedemployeeStatus : any;
selectedbookingStatus : any;
selectedBookingDate : any;
selectedemployeeMobileNo:any;
obj:any;
selectedId:any;
selectedemployeeId:any;
employeeStatus:string[] = ['Active','Inactive','Blocked'];
selectedemployeeEmailAddress:any;
selectedemployeeAddress:any
selectedemployeeCity:any;
selectedemployeeState:any;
selectedemployeeCountry:any;
selectedemployeeUserName;any
selectedemployeePassword:any

  constructor(private integrationLogService: IntegrationLogService,public router: Router,
    public globalVar: GlobalConstants,private route: ActivatedRoute) { }

  ngOnInit() {
    let param1 = this.route.snapshot.queryParams["id"];
    if(param1=== null || param1 ==='' || param1 === undefined){
      //this.router.navigateByUrl('/newLog');

    }else{
      //alert("i am not null");
      this.listOfUser(param1);

    }
    let location = this.globalVar.subArea1;
    if(location!='' && location!=null){
      this.selectedemployeeLocation = location;
    }
  }

  listOfUser(event){
    this.integrationLogService.getEmployeeById(event).subscribe((res: any) => {
      this.obj = res.data;
      this.selectedemployeeId = this.obj.employeeId;
      this.selectedemployeeName= this.obj.employeeName;
      this.selectedEmployeeDate = this.obj.employeeDob;
      this.selectedemployeeArea= this.obj.employeeArea;
      this.selectedemployeeLocation= this.obj.employeeLocation;
      this.selectedemployeeStatus= this.obj.employeeStatus;
      this.selectedbookingStatus= this.obj.bookingStatus;
      this.selectedBookingDate= this.obj.bookingDate;
      this.selectedemployeeMobileNo = this.obj.employeeMobileNo;
      this.selectedemployeeEmailAddress = this.obj.employeeEmailAddress
      this.selectedemployeeAddress = this.obj.employeeAddress
      this.selectedemployeeCity = this.obj.employeeCity;
      this.selectedemployeeState = this.obj.employeeState;
      this.selectedemployeeCountry = this.obj.employeeCountry;
      this.selectedemployeeUserName = this.obj.employeeUserName
      this.selectedemployeePassword = this.obj.employeePassword
      this.selectedId = this.obj.id;
    });
  }

  onClickSubmit(userForm) {
    let data = userForm;
    //data.bookingDate =userForm.date;
    this.integrationLogService.submitEmployeeDetails(data).subscribe((res: any) => {
      if(res.message === 'Success'){
        Swal.fire({
          title: 'Employee Saved Successful',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
        this.router.navigateByUrl('/employeeDetails');
      }else{
        Swal.fire({
          title: 'Unable to Save',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
      }
    });

  }

}
