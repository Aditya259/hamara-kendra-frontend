import { Injectable } from "@angular/core";

@Injectable()
export class GlobalConstants {
    public isLoggeddIn = false;
    public name = sessionStorage.getItem('name');
    public role: string = (sessionStorage.getItem('role')) ;
    public user: string = (sessionStorage.getItem('user')) ;
    public id: string = (sessionStorage.getItem('id'));
    public createAt: string = (sessionStorage.getItem('createAt')) ;
    public locationService = (sessionStorage.getItem('location')) ;

    public country = sessionStorage.getItem('country');;
    public city=sessionStorage.getItem('city');;
    public postcode=sessionStorage.getItem('postcode');;
    public state=sessionStorage.getItem('state');;
    public country_code=sessionStorage.getItem('country_code');;
    public subArea1=sessionStorage.getItem('subArea1');; 

    


}
