import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerServiceService implements ErrorHandler{

  constructor(private router:Router) { }

  handleError(error:any): void {
    console.error('An error occurred:', error.message);
    console.error(error);
    alert(error);
    this.router.navigate(['/error']);

 }
}
