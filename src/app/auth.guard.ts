import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/global.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private gVar: GlobalConstants) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (sessionStorage.getItem('id') != undefined) {
        this.gVar.isLoggeddIn = true
        this.gVar.id = sessionStorage.getItem('id')
        this.gVar.role = sessionStorage.getItem('role')
        this.gVar.name = sessionStorage.getItem('name')
        resolve(true)
      }

      else {
        this._router.navigate(['/login'])
        reject(false)
      }
    })
    // return true;
  }

}
