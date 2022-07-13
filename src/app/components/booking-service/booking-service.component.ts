import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import { GlobalConstants } from '../../common/global.constant';
@Component({
  selector: 'app-booking-service',
  templateUrl: './booking-service.component.html',
  styleUrls: ['./booking-service.component.scss']
})
export class BookingServiceComponent implements OnInit {

  tableErrorMsg: any;

  tableData: employeeDetails[];
  liveCurrentLocation:any;

  constructor(public router: Router, 
    public globalVar: GlobalConstants,private route: ActivatedRoute,private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    this.getAllBooking();
    let location = this.globalVar.subArea1;
    if(location!='' && location!=null){
      this.liveCurrentLocation = location;
    }
  }

   getAllBooking(){
    this.integrationLogService.getAllBooking().subscribe((res: any) => {
      if(res.message != 'Not_Found'){
        this.tableData = res.data;
      }else{
        this.tableErrorMsg = "No Data";
      }
    });
  }

  redirectToView(event){
    this.router.navigateByUrl(`/viewBooking?id=${event}`)
  }

  redirectToEdit(event){
    //alert(event);
    this.router.navigateByUrl(`/addBooking?id=${event}`)
  }

  addBooking() {
    this.router.navigateByUrl(`/addBooking`)

  }

}

export interface employeeDetails {
  bookingId: string;
  userName: string;
  employeeName: string;
  userAddress: string;
  bookingStatus: string;
  bookingDate: string;

}