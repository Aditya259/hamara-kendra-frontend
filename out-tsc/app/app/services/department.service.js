import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let DepartmentService = class DepartmentService {
    constructor(_http) {
        this._http = _http;
    }
    getDepartment() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Departments`);
        });
    }
    getOneDepartment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Departments/${id}`);
        });
    }
    addDepartment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.post(`${environment.apiUrl}/AddDepartment`, body);
        });
    }
    editDepartment(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/updateDepartment/${id}`, body);
        });
    }
    deleteDepartment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.delete(`${environment.apiUrl}/Department_delete?id=${id}`);
        });
    }
};
DepartmentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DepartmentService);
export { DepartmentService };
// ComplaintsByDepartments?department=approvalStageDepartment
//# sourceMappingURL=department.service.js.map