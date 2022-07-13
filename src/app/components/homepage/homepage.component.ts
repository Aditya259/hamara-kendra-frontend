import { Component, OnInit } from '@angular/core';
import {IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slides = [
    {
      url: 'assets/header1.jpg'
    },
    {
      url: 'assets/header2.png'
    },
    {
      url: 'assets/header3.jpeg'
    },
    {
      url: 'assets/header4.jpeg'
    }
  ]

  allServices:any;
  popup = false;
  constructor(private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    this.getAllServices();
  }

  getAllServices(){
    this.integrationLogService.getAllServices().subscribe((res: any) => {
        this.allServices = res.data;
    });
  }
 
}

