import { Component, OnInit } from '@angular/core';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

  allCompanyList:string[] = ['Pending','Completed'];

  //employeeName:string[] = ['Raj','Rahul','Aditya','Dhirj'];
  
  obj:any;
  selectedBookingId:any;
  selectedUserName:any;
  selectedEmployeeName:any;
  selecteduserAddress:any;
  selectedbookingStatus:any;
  selectedbookingDate:any;
  selectedcity:any;
  selectedstate:any;
  selectedId:any;
  selectedUserMobileNo:any;
  selectedUserEmailId:any;

  employeeName:any;
  constructor( private integrationLogService: IntegrationLogService,public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeName();
    let param1 = this.route.snapshot.queryParams["id"];
    if(param1=== null || param1 ==='' || param1 === undefined){
      //this.router.navigateByUrl('/newLog');

    }else{
      //alert("i am not null");
      this.listOfUser(param1);

    }

  }

  listOfUser(event){
    //alert(event);
    this.integrationLogService.getBookingById(event).subscribe((res: any) => {
      this.obj = res.data;
      this.selectedBookingId= this.obj.bookingId
      this.selectedUserName = this.obj.userName
      this.selectedEmployeeName= this.obj.employeeName
      this.selecteduserAddress= this.obj.userAddress
      this.selectedbookingStatus= this.obj.bookingStatus
      this.selectedbookingDate= this.obj.bookingDate
      this.selectedcity= this.obj.city
      this.selectedstate= this.obj.state
      this.selectedId = this.obj.id;
      this.selectedUserMobileNo = this.obj.userMobileNo;
      this.selectedUserEmailId = this.obj.userEmailId;

    
    });
  }

  getEmployeeName(){
    this.integrationLogService.getEmployeeName().subscribe((res: any) => {
      this.employeeName = res.data;
    });
  }

  onClickSubmit(userForm) {
    let data = userForm;
    data.bookingDate =userForm.date;
    data.userEmailId = userForm.userEmailId;
    data.userMobileNo = userForm.userMobileNo;
    this.integrationLogService.submitBookingDetails(data).subscribe((res: any) => {
      if(res.message === 'Success'){
        Swal.fire({
          title: 'Booking Successful',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
        this.router.navigateByUrl('/bookingService');
      }else{
        Swal.fire({
          title: 'Unable to book',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
      }
    });

  }

}
