import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {HttpHeaderService} from '../http-header.service'; 

@Injectable({
  providedIn: 'root'
})
export class IntegrationLogService {

  constructor(private _http: HttpClient,private httpHeader:HttpHeaderService) { }

  existingCustomerCheck(body: any,flag:any) {
    return this._http.get(`${environment.apiUrl}/existingCustomer?body=${body}&existFlag=${flag}`,)
  }

  getAllBooking(){
    return this._http.get(`${environment.apiUrl}/getAllBooking`)
  }

  getAllServices(){
    return this._http.get(`${environment.apiUrl}/getAllServices`)
  }

  getliveOrLastLocation(role,userLoggedInName){
    return this._http.get(`${environment.apiUrl}/getliveOrLastLocation?role=${role}&userLoggedInName=${userLoggedInName}`,)
  }

  getAllEmployee(){
    return this._http.get(`${environment.apiUrl}/getAllEmployee`,)
  }

  getLocation(lat:any, lng:any){
    return this._http.get(`${environment.apiUrl}/getLocation?lat=${lat}&lng=${lng}`)
  }

  getBookingById(id: any){
    return this._http.get(`${environment.apiUrl}/getBookingById?id=${id}`)
  }

  getAllMenu(){
    return this._http.get(`${environment.apiUrl}/getAllMenu`)
  }

  getAllSubMenu(){
    return this._http.get(`${environment.apiUrl}/getAllSubMenu`)
  }

  getAllSubMenuThirdLevel(){
    return this._http.get(`${environment.apiUrl}/getAllSubMenuThirdLevel`)
  }

  getEmployeeById(id: any){
    return this._http.get(`${environment.apiUrl}/getEmployeeById?id=${id}`)
  }
  
  getAllServiceList(){
    return this._http.get(`${environment.apiUrl}/getAllServiceList`)
  }

  submitFormData(body: any) {
    return this._http.post(`${environment.apiUrl}/submitData`, body);
  }


  submitBookingDetails(body: any) {
    return this._http.post(`${environment.apiUrl}/submitBookingDetails`, body);
  }

  submitDescDetails(body: any) {
    return this._http.post(`${environment.apiUrl}/submitDescDetails`, body);
  }

  submitEmployeeDetails(body: any) {
    return this._http.post(`${environment.apiUrl}/submitEmployeeDetails`, body);
  }

  getFilterdData(body: any) {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
    return this._http.post(`${environment.apiUrl}/getFilterdData`,body, { 'headers': headers })
  }

  getByCustomerName(custName: any) {
    return this._http.get(`${environment.apiUrl}/getByCustName?custName=${custName}`)
  }

  getEmployeeName(){
    return this._http.get(`${environment.apiUrl}/getEmployeeName`)
  }

  getUpCommingEvents(loggedInName,loggedInRole){
    return this._http.get(`${environment.apiUrl}/getUpCommingEvents?loggedInName=${loggedInName}&loggedInRole=${loggedInRole}`)
  }

  getByEnquiryId(enquiryId: any){
    return this._http.get(`${environment.apiUrl}/getByEnquiryId?enquiryId=${enquiryId}`)
  }

  getByid(id:any){
    return this._http.get(`${environment.apiUrl}/getAllCustId?id=${id}`)
  }

  getByidCustId(id:any){
    return this._http.get(`${environment.apiUrl}/getAllByCustId?id=${id}`)
  }

  //addClosure(id: any, body: any) {
    //return await this._http.put(`${environment.apiUrl}/complaints/level3/update/${id}`, body,  { headers:this.httpHeader.httpHeader()})
  //}

  getAllCompanyList(){
    return this._http.get(`${environment.apiUrl}/getAllCompanyList`);
  }
  
  getAllSectorList(){
    return this._http.get(`${environment.apiUrlExixts}/sectorList`);
  }

  getAllStateList(){
    return this._http.get(`${environment.apiUrl}/getAllStateList`);
  }

  getAllParentComanyList(){
    return this._http.get(`${environment.apiUrl}/getAllParentComanyList`);
  }

  getAllSegmentList(){
    return this._http.get(`${environment.apiUrl}/getAllSegmentList`);
  }

  getAllSubsidoryList(){
    return this._http.get(`${environment.apiUrl}/getAllSubsidoryList`);
  }

  getAllEmployeeList(){
    return this._http.get(`${environment.apiUrl}/getAllEmployeeList`);
  }

  getAllTypeList(){
    return this._http.get(`${environment.apiUrlExixts}/typeList`);
  }

  getAllPurposeList(){
    return this._http.get(`${environment.apiUrlExixts}/purposeList`);
  }

  getAllCustomer(){
    return this._http.get(`${environment.apiUrl}/getAllCustData`);
  }

  getAllListInTable(pageIndex,pageSize){
    return this._http.get(`${environment.apiUrl}/getAllData?page=${pageIndex}&size=${pageSize}`);
  }
  getOnlyCustName(){
    return this._http.get(`${environment.apiUrl}/getOnlyCustName`);
  }

  getOnlyCustCode(){
    return this._http.get(`${environment.apiUrl}/getOnlyCustCode`);
  }
  getOnlyEnquiryId(){
    return this._http.get(`${environment.apiUrl}/getOnlyEnquiryId`);
  }

  getOnlyCustCodeWithName(){
    return this._http.get(`${environment.apiUrl}/getOnlyCustCodeWithName`);
  }

  getAllIndustryList(){
    return this._http.get(`${environment.apiUrl}/getAllIndustryList`);
  }

  getAllSubChannelList(){
    return this._http.get(`${environment.apiUrl}/getAllSubChannelList`);
  }

  getAllSubCompanyList(){
    return this._http.get(`${environment.apiUrl}/getAllSubCompanyList`);
  }

  getAllCountryList(){
    return this._http.get(`${environment.apiUrl}/getAllCountryList`);
  }

}
