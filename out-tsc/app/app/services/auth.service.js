import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.post(`${environment.apiUrl}/Login`, body);
        });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map