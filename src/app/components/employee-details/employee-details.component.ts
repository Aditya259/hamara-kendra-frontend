import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  tableErrorMsg:any;

  tableData: employeeDetails[];

  constructor(public router: Router, private route: ActivatedRoute,private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  addBooking(){
    this.router.navigateByUrl(`/addEmployee`)
  }

  getAllEmployee(){
    this.integrationLogService.getAllEmployee().subscribe((res: any) => {
      if(res.message != 'Not_Found'){
        this.tableData = res.data;
      }else{
        this.tableErrorMsg = "No Data";
      }
    });
  }

  redirectToView(event){
    this.router.navigateByUrl(`/viewEmployee?id=${event}`)
  }

  redirectToEdit(event){
    //alert(event);
    this.router.navigateByUrl(`/addEmployee?id=${event}`)
  }

}

export interface employeeDetails {
  employeeId: string;
  employeeName: string;
  employeeDob: string;
  employeeArea: string;
  employeeLocation:string;
  employeeStatus:string;
  bookingStatus:string;
  bookingDate:string;
}
