import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { interactionLogComponent } from './components/interactionLog/interactionLog.component';
import { UserListComponent } from './components/userList/userList.component';
import { LoginComponent } from './components/login/login.component';
import {ErrorComponent } from '../app/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListOfUserComponent } from './components/list-of-user/list-of-user.component';
import { NewLogComponent } from './components/new-log/new-log.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ServicesComponent } from './components/services/services.component';
import { BookingServiceComponent } from './components/booking-service/booking-service.component';
import { AddBookingComponent } from './components/booking-service/add-booking/add-booking.component';
import { ViewBookingComponent } from './components/booking-service/view-booking/view-booking.component';
import { AddEmployeeComponent } from './components/employee-details/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee-details/view-employee/view-employee.component';
import { LocationOnOffComponent } from './components/location-on-off/location-on-off.component';
import { UpcommingBookingComponent } from './components/upcomming-booking/upcomming-booking.component';
import { SignupComponent } from './components/signup/signup.component';
import { OtpvalidationComponent } from './components/otpvalidation/otpvalidation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServiceselectionComponent } from './components/serviceselection/serviceselection.component';
import { InsertUpdateDescriptionsComponent } from './components/insert-update-descriptions/insert-update-descriptions.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'interationLog', component: interactionLogComponent ,canActivate: [AuthGuard]},
  { path: 'userList', component: UserListComponent ,canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent },
  { path: 'listOfUser', component: ListOfUserComponent,canActivate: [AuthGuard] },
  { path: 'newLog', component: NewLogComponent,canActivate: [AuthGuard] },
  { path: 'employeeDetails', component: EmployeeDetailsComponent,canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent,canActivate: [AuthGuard] },
  { path: 'bookingService', component: BookingServiceComponent,canActivate: [AuthGuard] },
  { path: 'addBooking', component: AddBookingComponent,canActivate: [AuthGuard] },
  { path: 'viewBooking', component: ViewBookingComponent,canActivate: [AuthGuard] },
  { path: 'addEmployee', component: AddEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'viewEmployee', component: ViewEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'locationOnOff', component: LocationOnOffComponent,canActivate: [AuthGuard] },
  { path: 'upcommingBooking', component: UpcommingBookingComponent,canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'otpValidate', component: OtpvalidationComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'serviceSelection', component: ServiceselectionComponent},
  { path: 'insertDesc', component: InsertUpdateDescriptionsComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
