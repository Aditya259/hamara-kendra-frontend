import { Component, OnInit } from '@angular/core';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-insert-update-descriptions',
  templateUrl: './insert-update-descriptions.component.html',
  styleUrls: ['./insert-update-descriptions.component.scss']
})
export class InsertUpdateDescriptionsComponent implements OnInit {

  listOfAllMenu:any;
  listOfAllSubMenu:any;
  listOfAllSubMenuThrd:any;


  constructor(private integrationLogService: IntegrationLogService) { }

  ngOnInit() {
    this.getAllMenu();
    this.getAllSubMenu();
    this.getAllSubMenuThirdLevel();
  }

  getAllMenu(){
    this.integrationLogService.getAllMenu().subscribe((res: any) => {
      this.listOfAllMenu = res.data;
  });
}


onClickSubmit(userForm) {
  let data = userForm;
  this.integrationLogService.submitDescDetails(data).subscribe((res: any) => {
    if(res.message === 'Success'){
      Swal.fire({
        title: 'Submitted Successful',
        text: 'Please click on the Ok',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Ok',
      })
    }
  });
}

getAllSubMenu(){
  this.integrationLogService.getAllSubMenu().subscribe((res: any) => {
    this.listOfAllSubMenu = res.data;
});
}

getAllSubMenuThirdLevel(){
  this.integrationLogService.getAllSubMenuThirdLevel().subscribe((res: any) => {
    this.listOfAllSubMenuThrd = res.data;
});
}

}
