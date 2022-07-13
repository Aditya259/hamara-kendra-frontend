import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { IntegrationLogService } from 'src/app/services/integration-log.service';
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute,private integrationLogService: IntegrationLogService) { }
  obj:any;
  ngOnInit() {
    let param1 = this.route.snapshot.queryParams["id"];
    this.listOfUser(param1);
  }

  listOfUser(event){
    //alert(event);
    this.integrationLogService.getBookingById(event).subscribe((res: any) => {
      this.obj = res.data;

    });
  }

  redirectToEdit(event){
    //alert(event);
    this.router.navigateByUrl(`/addBooking?id=${event}`)
  }

}
