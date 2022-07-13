import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntegrationLogService } from 'src/app/services/integration-log.service';
import { GlobalConstants } from '../../common/global.constant';


@Component({
  selector: 'app-upcomming-booking',
  templateUrl: './upcomming-booking.component.html',
  styleUrls: ['./upcomming-booking.component.scss']
})
export class UpcommingBookingComponent implements OnInit {

  getUpCommingEvent:any;
  loggedInName:any;
  loggedInRole:any;
  liveCurrentLocation:any;
  constructor( public globalVar: GlobalConstants,private integrationLogService: IntegrationLogService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUpCommingEvents();
    let location = this.globalVar.subArea1;
    if(location!='' && location!=null){
      this.liveCurrentLocation = location;
    }
  }

  getUpCommingEvents(){
    this.loggedInName = this.globalVar.name;
    this.loggedInRole = this.globalVar.role;
    this.integrationLogService.getUpCommingEvents(this.loggedInName,this.loggedInRole).subscribe((res: any) => {
      this.getUpCommingEvent = res.data;
    });
  }


}
