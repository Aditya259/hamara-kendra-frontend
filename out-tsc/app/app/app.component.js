import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import Swal from 'sweetalert2';
let AppComponent = class AppComponent {
    constructor(breakpointObserver, gVar, _router) {
        this.breakpointObserver = breakpointObserver;
        this.gVar = gVar;
        this._router = _router;
        this.title = 'solar-cms';
        this.depart = sessionStorage.getItem('department') || null;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
    }
    toggle() {
        this.drawer.toggle();
    }
    ngAfterViewInit() {
        this.depart = sessionStorage.getItem('department') || null;
    }
    logout() {
        Swal.fire({
            title: 'Are you sure want to logout?',
            text: 'You will be logged out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => __awaiter(this, void 0, void 0, function* () {
            if (result.value) {
                localStorage.clear();
                this._router.navigateByUrl('');
                this.gVar.isLoggeddIn = false;
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Logout cancelled', 'error');
            }
        }));
    }
};
__decorate([
    ViewChild('drawer')
], AppComponent.prototype, "drawer", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map