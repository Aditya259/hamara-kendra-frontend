import { __decorate } from "tslib";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentWiseComponent } from './components/complaint/department-wise/department-wise.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminsComponent } from './components/admins/admins.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { DepartmentComponent } from './components/department/department.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { LoginComponent } from './components/login/login.component';
import { FeedbackQuartelyTargetComponent } from './components/feedback-quartely-target/feedback-quartely-target.component';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'complaints', component: ComplaintComponent, canActivate: [AuthGuard] },
    { path: 'complaint-form', component: ComplaintComponent, canActivate: [AuthGuard] },
    { path: 'complaint-form/:id', component: ComplaintComponent, canActivate: [AuthGuard] },
    { path: 'feedbacks', component: FeedbacksComponent, canActivate: [AuthGuard] },
    { path: 'feedback-form', component: FeedbackFormComponent, canActivate: [AuthGuard] },
    { path: 'feedback-form/:id', component: FeedbackFormComponent, canActivate: [AuthGuard] },
    { path: 'admins', component: AdminsComponent, canActivate: [AuthGuard] },
    { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
    { path: 'department-wise-complaint', component: DepartmentWiseComponent, canActivate: [AuthGuard] },
    { path: 'feedbacks-quarterly-target', component: FeedbackQuartelyTargetComponent, canActivate: [AuthGuard] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map