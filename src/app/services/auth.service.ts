import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {HttpHeaderService} from '../http-header.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,private httpHeader:HttpHeaderService) { }

   login(body: any,liveOrLastLocation) {
    return this._http.post(`${environment.apiUrl}/login?liveOrLastLocation=${liveOrLastLocation}`, body,  { headers:this.httpHeader.httpHeader()})
  }

  otp(body: any) {
    return this._http.post(`${environment.apiUrl}/otp`, body,  { headers:this.httpHeader.httpHeader()})
  }

  signup(body: any) {
    return this._http.post(`${environment.apiUrl}/signup`, body,  { headers:this.httpHeader.httpHeader()})
  }
}
