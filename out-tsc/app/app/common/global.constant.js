import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let GlobalConstants = class GlobalConstants {
    constructor() {
        var _a, _b, _c, _d, _e;
        this.isLoggeddIn = false;
        this.name = (_a = sessionStorage.getItem('name')) !== null && _a !== void 0 ? _a : "Solar Admin";
        this.role = (_b = (sessionStorage.getItem('role'))) !== null && _b !== void 0 ? _b : 'admin';
        this.user = (_c = (sessionStorage.getItem('user'))) !== null && _c !== void 0 ? _c : '';
        this.id = (_d = (sessionStorage.getItem('id'))) !== null && _d !== void 0 ? _d : undefined;
        this.createAt = (_e = (sessionStorage.getItem('createAt'))) !== null && _e !== void 0 ? _e : '';
    }
};
GlobalConstants = __decorate([
    Injectable()
], GlobalConstants);
export { GlobalConstants };
//# sourceMappingURL=global.constant.js.map