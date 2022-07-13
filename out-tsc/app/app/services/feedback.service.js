import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let FeedbackService = class FeedbackService {
    constructor(_http) {
        this._http = _http;
    }
    getAllFeedbacks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/FeedBacks`);
        });
    }
    getFeedbackById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/FeedBacks/${id}`);
        });
    }
    addNewFeed(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.post(`${environment.apiUrl}/AddFeedBack`, body);
        });
    }
    updateStatus(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/FeedBacks/update/${id}`, body);
        });
    }
    getFeedbackQuarterlyTargerList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Feedbacks_Quarterly_Target/list`);
        });
    }
    getAnFeedbackQuarterlyTarger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/Feedbacks_Quarterly_Target/${id}`);
        });
    }
    updateAnFeedbackQuarterlyTarger(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.put(`${environment.apiUrl}/Feedbacks_Quarterly_Target/${id}`, body);
        });
    }
    addAnFeedbackQuarterlyTarger(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.post(`${environment.apiUrl}/Feedbacks_Quarterly_Target/add`, body);
        });
    }
    getChartDataQuarterlyChart(from, to, cid, cname, year) {
        return __awaiter(this, void 0, void 0, function* () {
            // http://103.14.99.198:8082/SolarProject/report/FeedBack/Quarterly/Chart?months=OCTOBER%20TO%20DECEMBER&year=2021&companyID=1&companyName=chhagan
            // return await this._http.get(`${environment.apiUrl}/report/FeedBack/Quarterly/Chart?months=${from.toUpperCase()} TO ${to.toUpperCase()}&year=${year}&companyID=1&companyName=chhagan`)
            return yield this._http.get(`${environment.apiUrl}/report/FeedBack/Quarterly/Chart?months=${from.toUpperCase()} TO ${to.toUpperCase()}&year=${year}&companyID=${cid}&companyName=${cname}`);
        });
    }
    getRFeedBackQuaterlyeports(from, to, cid, cname, year) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/report/FeedBack/Quarterly/Details?months=${from.toUpperCase()} TO ${to}&year=${year.toUpperCase()}&companyID=${cid}&companyName=${cname}`);
        });
    }
    getChartDataQuarterlyPeforomaceChart(from, to, cid, cname, year) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/report/FeedBack/Quarterly/Chart/PerformanceWise?months=${from.toUpperCase()} TO ${to.toUpperCase()}&year=${year}&companyID=${cid}&companyName=${cname}`);
            // return await this._http.get(`${environment.apiUrl}/report/FeedBack/Quarterly/Chart/PerformanceWise?months=${from} TO ${to}&year=${year}&companyID=1&companyName=chhagan`)
        });
    }
    getFilterData(from, to, nameOfMine, sectorID, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._http.get(`${environment.apiUrl}/FeedbacksFilter?companyID=${companyId}&nameOfMine=${nameOfMine}&sectorID=${sectorID}&fromDate=${from}&toDate=${to}`);
        });
    }
};
FeedbackService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FeedbackService);
export { FeedbackService };
//# sourceMappingURL=feedback.service.js.map