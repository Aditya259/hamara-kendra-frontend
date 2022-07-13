import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalConstants } from '../../common/global.constant';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Router } from '@angular/router';
import { IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  getUpCommingEvent:any;
  tableErrorMsg:any;
  loggedInUserRole:any;

  constructor(private integrationLogService: IntegrationLogService,public globalVar: GlobalConstants) { }

  ngOnInit() {
    this.getAllBooking(this.globalVar.role,this.globalVar.name);
  }

  getAllBooking(role,userLoggedInName){
    this.integrationLogService.getliveOrLastLocation(role,userLoggedInName).subscribe((res: any) => {
      if(res.message != 'Not_Found'){
        this.getUpCommingEvent = res.data;
      }else{
        this.tableErrorMsg = "No Data";
      }
    });
  }



  

}
