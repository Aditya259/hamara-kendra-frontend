import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(gVar, formBuilder, router, authService) {
        this.gVar = gVar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.errorMsg = '';
        this.successMsg = '';
        this.submit = false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.loginForm = this.formBuilder.group({
            user: ['', [Validators.required]],
            pass: ['', [Validators.required]]
        });
        if (this.gVar.isLoggeddIn) {
            this.router.navigateByUrl('/complaints');
        }
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loginForm.invalid) {
                return;
            }
            this.submit = true;
            // this.gVar.isLoggeddIn = true;
            (yield this.authService.login(this.loginForm.value)).subscribe((res) => {
                console.error(res);
                this.submit = false;
                if (res.status) {
                    this.successMsg = res.message;
                    sessionStorage.setItem('name', res.data.name);
                    sessionStorage.setItem('role', res.data.role);
                    sessionStorage.setItem('user', res.data.user);
                    sessionStorage.setItem('id', res.data.id);
                    sessionStorage.setItem('createAt', res.data.createAt);
                    sessionStorage.setItem('department', res.data.department);
                    this.gVar.isLoggeddIn = true;
                    this.gVar.id = sessionStorage.getItem('id');
                    this.gVar.role = sessionStorage.getItem('role');
                    this.gVar.user = sessionStorage.getItem('user');
                    this.gVar.name = sessionStorage.getItem('name');
                    this.gVar.createAt = sessionStorage.getItem('createAt');
                    // department
                    this.router.navigateByUrl('/dashboard');
                    /*
                    id: 5
                    name: "saurabh"
                    pass: "123"
                    role: "admin"
                    status: "success"
                    user: "saurabh"
                    */
                }
                else {
                    this.submit = false;
                    this.errorMsg = res.message;
                }
            });
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map