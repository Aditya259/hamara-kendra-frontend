import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(_router, gVar) {
        this._router = _router;
        this.gVar = gVar;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('id') != undefined) {
                this.gVar.isLoggeddIn = true;
                this.gVar.id = sessionStorage.getItem('id');
                this.gVar.role = sessionStorage.getItem('role');
                this.gVar.name = sessionStorage.getItem('name');
                resolve(true);
            }
            else {
                this._router.navigate(['/login']);
                reject(false);
            }
        });
        // return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map