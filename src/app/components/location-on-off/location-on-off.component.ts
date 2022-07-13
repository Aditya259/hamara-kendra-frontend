import { Component, OnInit } from '@angular/core';
import { IntegrationLogService } from 'src/app/services/integration-log.service';
import { GlobalConstants } from '../../common/global.constant';

@Component({
  selector: 'app-location-on-off',
  templateUrl: './location-on-off.component.html',
  styleUrls: ['./location-on-off.component.scss']
})
export class LocationOnOffComponent implements OnInit {
  lat: any;
  lng: any;
  country: any;
  city: any;
  postcode: any;
  state: any;
  country_code: any;
  subArea1: any;

  constructor(private integrationLogService: IntegrationLogService, public globalVar: GlobalConstants
  ) { }

  ngOnInit() {
    //this.getUserLocation();
  }

  location(event) {
    //alert(event.value)
    if (event.value === 'On') {
      this.getUserLocation();
      sessionStorage.setItem('location', "On");
      this.globalVar.locationService = sessionStorage.getItem('location');
    } else {
      sessionStorage.setItem('location', "off");
      this.globalVar.locationService = sessionStorage.getItem('location');
      this.globalVar.country = null;
      this.globalVar.city = null;
      this.globalVar.postcode = null;
      this.globalVar.state = null;
      this.globalVar.country_code = null;
      this.globalVar.subArea1 = null;
    }

  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.integrationLogService.getLocation(this.lat, this.lng).subscribe((res: any) => {
          sessionStorage.setItem('subArea1', res.data.subArea1);
          sessionStorage.setItem('city', res.data.city);
          sessionStorage.setItem('state',res.data.state);
          sessionStorage.setItem('postcode', res.data.postcode);
          sessionStorage.setItem('country', res.data.country);
          sessionStorage.setItem('country_code', res.data.country_code);
          
          this.globalVar.subArea1 = sessionStorage.getItem('subArea1');
          this.globalVar.city = sessionStorage.getItem('city');
          this.globalVar.state = sessionStorage.getItem('state');
          this.globalVar.postcode = sessionStorage.getItem('postcode');
          this.globalVar.country = sessionStorage.getItem('country');
          this.globalVar.country_code = sessionStorage.getItem('country_code');
         
     
        });
      });
    } else {
      console.log("User not allow")

    }
  }
}