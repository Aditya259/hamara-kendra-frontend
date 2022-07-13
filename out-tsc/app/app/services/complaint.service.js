import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let ComplaintService = class ComplaintService {
    constructor(_http) {
        this._http = _http;
    }
    getAllComplaints() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Complaints`);
        });
    }
    addNewComplaints(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.post(`${environment.apiUrl}/AddComplaint`, body);
        });
    }
    addReportField(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/Complaints/level2/update/${id}`, body);
        });
    }
    addClosure(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/Complaints/level3/update/${id}`, body);
        });
    }
    addPlantreport(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/Complaints/level2/update/PCIR/${id}`, body);
        });
    }
    actionForm(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/Complaints/level1/update/${id}`, body);
        });
    }
    getComplaintById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Complaints/${id}`);
        });
    }
    getDepartmentWise() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/ComplaintsByDepartments?department=${sessionStorage.getItem('department')}`);
        });
    }
    getCompanyList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrlExixts}/CompanyList`);
        });
    }
    getPlants(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrlExixts}/PlantList/${id}`);
        });
    }
    getCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrlExixts}/CustomersList`);
        });
    }
    getMaterialsList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrlExixts}/MaterialsList`);
        });
    }
    getSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Sectors`);
        });
    }
    getComplaintYearlyDetailsChartData(cid, cname, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this._http.get(`${environment.apiUrl}/report/Complaint/Yearly/Details/ChartData?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`)
            return yield this._http.get(`${environment.apiUrl}/report/Complaint/Yearly/Details/ChartData?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`);
        });
    }
    getComplaintYearlyDetailsReportData(cid, cname, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this._http.get(`${environment.apiUrl}/report/Complaint/Yearly/Details/ChartData?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`)
            return yield this._http.get(`${environment.apiUrl}/report/Complaint/Yearly/Details?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`);
        });
    }
    getComplaintYearlyReportData(cid, cname, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this._http.get(`${environment.apiUrl}/report/Complaint/Yearly/Details/ChartData?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`)
            return yield this._http.get(`${environment.apiUrl}/report/Complaint/Yearly?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`);
        });
    }
    getFilterComplaints(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { from, to, cid, cname, cat, pname, dep, type, cid2, } = data;
            return yield this._http.get(`${environment.apiUrl}/ComplaintsFilter?customerID=${cid}&nameOfOrganization=${cname}&categoryOfComplaint=${cat}&nameOfProduct=${pname}&type&approvalStageDepartment=${dep}&companyId=${cid2}&fromDate=${from}&toDate=${to}`);
        });
    }
    getAllSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Sectors`);
        });
    }
};
ComplaintService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ComplaintService);
export { ComplaintService };
//# sourceMappingURL=complaint.service.js.map