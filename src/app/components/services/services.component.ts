import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import { GlobalConstants } from '../../common/global.constant';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  role : any;
  flagRole:any;
  
  constructor(public router: Router, private route: ActivatedRoute,
    public globalVar: GlobalConstants
    ,private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    this.role = this.globalVar.role;
    if(this.role === '0'){
      this.flagRole = true;
    }
  }


  //(click)="getLocation()"
  //getLocation(){
    //this.integrationLogService.getLocation().subscribe((res: any) => {
      
    //});

  //}

}
