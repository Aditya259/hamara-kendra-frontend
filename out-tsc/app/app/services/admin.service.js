import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let AdminService = class AdminService {
    constructor(_http) {
        this._http = _http;
    }
    getAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/admins`);
        });
    }
    getAnAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/admins/${id}`);
        });
    }
    addAdmin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(body);
            return yield this._http.post(`${environment.apiUrl}/AddAdmin`, body);
        });
    }
    editAdmin(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(body);
            return yield this._http.put(`${environment.apiUrl}/updateAdmin/${id}`, body);
        });
    }
    deleteAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.delete(`${environment.apiUrl}/admins_delete?id=${id}`);
        });
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map