import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
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
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { ComplainFormComponent } from './components/complain-form/complain-form.component';
import { LoginComponent } from './components/login/login.component';
import { GlobalConstants } from './common/global.constant';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminsComponent } from './components/admins/admins.component';
import { AddAdminComponent } from './components/admins/add-admin/add-admin.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { DepartmentComponent } from './components/department/department.component';
import { AddEditDepartmentComponent } from './components/department/add-edit-department/add-edit-department.component';
import { AssignDepartmentComponent } from './components/complaint/assign-department/assign-department.component';
import { DepartmentWiseComponent } from './components/complaint/department-wise/department-wise.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackQuartelyTargetComponent } from './components/feedback-quartely-target/feedback-quartely-target.component';
import { AddEditQuartelyFormComponent } from './components/feedback-quartely-target/add-edit-quartely-form/add-edit-quartely-form.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ComplaintComponent,
            ComplainFormComponent,
            LoginComponent,
            FeedbackFormComponent,
            AdminComponent,
            AdminsComponent,
            AddAdminComponent,
            FeedbacksComponent,
            DepartmentComponent,
            AddEditDepartmentComponent,
            AssignDepartmentComponent,
            DepartmentWiseComponent,
            DashboardComponent,
            FeedbackQuartelyTargetComponent,
            AddEditQuartelyFormComponent,
        ],
        imports: [
            BrowserModule,
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
            ChartsModule
        ],
        providers: [GlobalConstants],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map