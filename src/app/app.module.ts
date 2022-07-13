import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './components/login/login.component';
import { GlobalConstants } from './common/global.constant';
import { interactionLogComponent } from './components/interactionLog/interactionLog.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserListComponent } from './components/userList/userList.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GlobalErrorHandlerServiceService } from '../app/global-error-handler-service.service';
import { ErrorComponent } from './error/error.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ListOfUserComponent } from './components/list-of-user/list-of-user.component';
import { CommonModule } from '@angular/common'; 
import { MatSelectModule,MatFormFieldModule } from '@angular/material'; 
import { MatIconModule } from '@angular/material/icon';
import { NewLogComponent } from './components/new-log/new-log.component';
import {MatChipsModule} from '@angular/material/chips';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ServicesComponent } from './components/services/services.component';
import { BookingServiceComponent } from './components/booking-service/booking-service.component';
import { AddBookingComponent } from './components/booking-service/add-booking/add-booking.component';
import { ViewBookingComponent } from './components/booking-service/view-booking/view-booking.component';
import { AddEmployeeComponent } from './components/employee-details/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee-details/view-employee/view-employee.component';
import { LocationOnOffComponent } from './components/location-on-off/location-on-off.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UpcommingBookingComponent } from './components/upcomming-booking/upcomming-booking.component';
import { OtpvalidationComponent } from './components/otpvalidation/otpvalidation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServiceselectionComponent } from './components/serviceselection/serviceselection.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { InsertUpdateDescriptionsComponent } from './components/insert-update-descriptions/insert-update-descriptions.component';


const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    interactionLogComponent,
    UserListComponent,
    ErrorComponent,
    DashboardComponent,
    ListOfUserComponent,
    NewLogComponent,
    SignupComponent,
    EmployeeDetailsComponent,
    ServicesComponent,
    BookingServiceComponent,
    AddBookingComponent,
    ViewBookingComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    LocationOnOffComponent,
    UpcommingBookingComponent,
    OtpvalidationComponent,
    HomepageComponent,
    ServiceselectionComponent,
    InsertUpdateDescriptionsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatCarouselModule,
    ...materialModules
  ],
  providers: [GlobalConstants,
    {provide: GlobalErrorHandlerServiceService, useClass: ErrorComponent,
    },
    {provide: MatFormFieldModule},
    {provide: MatDatepickerModule},
    {provide: MatNativeDateModule  }
    
  ],
  exports: [     ...materialModules, MatFormFieldModule, MatInputModule, MatSelectModule  ],
  bootstrap: [AppComponent],
  entryComponents:[]
  
})
export class AppModule {}
