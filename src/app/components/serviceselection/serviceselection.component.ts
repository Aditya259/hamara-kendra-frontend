import { Component, OnInit } from '@angular/core';
import { IntegrationLogService } from 'src/app/services/integration-log.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-serviceselection',
  templateUrl: './serviceselection.component.html',
  styleUrls: ['./serviceselection.component.scss']
})
export class ServiceselectionComponent implements OnInit {

  lat: any;
  lng: any;
  area:any;
  city:any;
  state:any;
  country:any;
  selectedArea:any;
  selectedServiceName:any;
  listOfAllServices:any;
  constructor( private integrationLogService: IntegrationLogService) { }

  service:String[] = ['Passport',' Aadhar Smart Card','Smart Voting Card'];


  ngOnInit() {
    this. getUserLocation();
    this.getAllServiceList();
  }

  onClickSubmit(userForm){
    let data = userForm;
    data.selectedArea =userForm.selectedArea;
    data.date = userForm.date;
    data.serviceName = userForm.serviceName;
    Swal.fire({
      title: 'Slot Booking Successful',
      text: 'Address - '+ data.selectedArea + 'Date - ' + data.date + 'For - '+ data.serviceName,
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })

  }

  getAllServiceList(){
    this.integrationLogService.getAllServiceList().subscribe((res: any) => {
      this.listOfAllServices = res.data;
  });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.integrationLogService.getLocation(this.lat, this.lng).subscribe((res: any) => {
         this.area = res.data.subArea1;
         this.city = res.data.city;
         this.state = res.data.state;
         this.country =  res.data.country;
         this.selectedArea = this.area + this.city + this.state + this.country;
        });
      });
    } else {
      console.log("User not allow")

    }
  }

}
