import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  obj:any;
  constructor(public router: Router,private route: ActivatedRoute,private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    let param1 = this.route.snapshot.queryParams["id"];
    this.listOfUser(param1);
  }

  listOfUser(event){
    //alert(event);
    this.integrationLogService.getEmployeeById(event).subscribe((res: any) => {
      this.obj = res.data;

    });
  }

  redirectToEdit(event){
    //alert(event);
    this.router.navigateByUrl(`/addEmployee?id=${event}`)
  }

}
