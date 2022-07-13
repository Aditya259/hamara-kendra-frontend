import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
let FeedbacksComponent = class FeedbacksComponent {
    constructor(_complaint, _feedback, _activeRoute, _router, gVar) {
        this._complaint = _complaint;
        this._feedback = _feedback;
        this._activeRoute = _activeRoute;
        this._router = _router;
        this.gVar = gVar;
        this.displayedColumns = ['id', 'companyID', 'companyName', 'department', 'feedBackStatus', 'view', 'action'];
        this.environment = environment;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._complaint.getCustomers()).subscribe((res) => {
                // console.log(res);
                if (res.status)
                    this.customersList = res.data;
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
            (yield this._complaint.getAllSectors()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.sectors = res.data;
                }
            });
            (yield this._feedback.getAllFeedbacks()).subscribe((res) => {
                console.log(res);
                this.dataSource = new MatTableDataSource(res.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    setCustID(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectEl = e.target;
            const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
            // console.log(
            //   val
            // );
            this.custID.nativeElement.value = val;
            // this.customerComplaintForm.patchValue({ customerID: val })
        });
    }
    GetReport() {
        let cname = this.cname.nativeElement.value;
        let cid = this.custID.nativeElement.value;
        let year = this.year.nativeElement.value;
        if (cname == '' || cid == '' || year == '') {
            alert('Please select all the fields');
            return 0;
        }
        window.location.href = (`${environment.apiUrl}/report/FeedBack/Yearly/Summery?year=${year}&companyID=${cid}&companyName=${cname}`);
    }
    getFilterData() {
        return __awaiter(this, void 0, void 0, function* () {
            // if(this.from.nativeElement.value == '' && this.to.nativeElement.value == '' && this.nameOfMine.nativeElement.value == '' || this.sectorID.nativeElement.value == '' && this.companyId.nativeElement.value == '' && this.companyId.nativeElement.value == '' && this.sectorID.nativeElement.value == ''){
            //   return 0;
            // }
            let from = this.from.nativeElement.value;
            let to = this.to.nativeElement.value;
            let nameOfMine = this.nameOfMine.nativeElement.value;
            let sectorID = this.sectorID.nativeElement.value;
            let companyId = this.companyId.nativeElement.value;
            (yield this._feedback.getFilterData(from, to, nameOfMine, sectorID, companyId)).subscribe((res) => {
                console.log(res);
                alert('Data has been fetched successfully');
                this.dataSource = new MatTableDataSource(res.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }
    showAll() {
        window.location.reload();
    }
    feedNew() {
        this._router.navigate(['/feedback-form']).then(() => {
            window.location.reload();
        });
    }
    viewDetail(id) {
        this._router.navigate(['/feedback-form', id]).then(() => {
            window.location.reload();
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], FeedbacksComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], FeedbacksComponent.prototype, "sort", void 0);
__decorate([
    ViewChild('custId')
], FeedbacksComponent.prototype, "custID", void 0);
__decorate([
    ViewChild('year')
], FeedbacksComponent.prototype, "year", void 0);
__decorate([
    ViewChild('cName')
], FeedbacksComponent.prototype, "cname", void 0);
__decorate([
    ViewChild('from')
], FeedbacksComponent.prototype, "from", void 0);
__decorate([
    ViewChild('to')
], FeedbacksComponent.prototype, "to", void 0);
__decorate([
    ViewChild('nameOfMine')
], FeedbacksComponent.prototype, "nameOfMine", void 0);
__decorate([
    ViewChild('sectorID')
], FeedbacksComponent.prototype, "sectorID", void 0);
__decorate([
    ViewChild('companyId')
], FeedbacksComponent.prototype, "companyId", void 0);
FeedbacksComponent = __decorate([
    Component({
        selector: 'app-feedbacks',
        templateUrl: './feedbacks.component.html',
        styleUrls: ['./feedbacks.component.scss']
    })
], FeedbacksComponent);
export { FeedbacksComponent };
//# sourceMappingURL=feedbacks.component.js.map