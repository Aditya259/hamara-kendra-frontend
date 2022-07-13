import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalConstants } from './common/global.constant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solar-cms';
  @ViewChild('drawer',{static:false}) drawer: MatSidenav;


  events: string[] = [];
  opened: boolean;
  userName: any;
  role:any;
  flagRole:any;

  depart = sessionStorage.getItem('department') || null;

  constructor(private breakpointObserver: BreakpointObserver, public gVar: GlobalConstants,public _router: Router,
    public globalVar: GlobalConstants) {

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit() {
      console.log(this.isHandset$);
      //alert(this.globalVar.role);
      this.role = this.globalVar.role;
     // alert(this.role);

      if(this.role === '0'){
        this.flagRole = true;
      }

      if(this.globalVar.name!=null && this.globalVar.name!=""){
        this.userName = this.globalVar.name;
      }
    }

  toggle() {
    this.drawer.toggle();
  }

  ngAfterViewInit(){
    this.depart = sessionStorage.getItem('department') || null;
  }

  logout(){

    Swal.fire({
      title: 'Are you sure want to logout?',
      text: 'You will be logged out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(async (result:any) => {
      if (result.value) {
        localStorage.clear();
        this._router.navigateByUrl('')
        this.gVar.isLoggeddIn = false;

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Logout cancelled',
          'error'
        )
      }
    })


  }
}
