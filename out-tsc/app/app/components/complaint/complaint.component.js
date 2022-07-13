import { __awaiter, __decorate } from "tslib";
import { AssignDepartmentComponent } from './assign-department/assign-department.component';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
import { Chart } from 'chart.js';
let ComplaintComponent = class ComplaintComponent {
    constructor(gVar, _router, _complaint, dialog, _activeRouter) {
        this.gVar = gVar;
        this._router = _router;
        this._complaint = _complaint;
        this.dialog = dialog;
        this._activeRouter = _activeRouter;
        this.formFlag = false;
        this.environment = environment;
        this.displayedColumns = ['id', 'customerID', 'customerName', 'dateOfCreate', 'complaintStatus', 'view', 'action'];
        this.graphFlag = true;
        console.log();
        if (window.location.href.includes('complaint-form')) {
            this.graphFlag = false;
        }
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
            let from = this.from.nativeElement.value;
            let to = this.to.nativeElement.value;
            let cname = this.cname.nativeElement.value;
            let cid = val;
            (yield this._complaint.getComplaintYearlyDetailsChartData(cid, cname, from, to)).subscribe((res) => {
                // for(let i = 0)
                res.data.forEach(element => {
                    this.YearlyComplaintChart.data.labels.push(element.product);
                    this.YearlyComplaintChart.data.datasets[0].data.push(element.physicalCondition);
                    this.YearlyComplaintChart.data.datasets[1].data.push(element.strenthPerformance);
                    this.YearlyComplaintChart.data.datasets[2].data.push(element.misfire);
                    this.YearlyComplaintChart.data.datasets[3].data.push(element.boxes);
                    this.YearlyComplaintChart.data.datasets[4].data.push(element.labelling);
                    this.YearlyComplaintChart.data.datasets[5].data.push(element.safety);
                    this.YearlyComplaintChart.data.datasets[6].data.push(element.total);
                });
                // this.YearlyComplaintChart.data.labels.push(
                //   res.data[0].sectorName,
                //   res.data[1].sectorName,
                //   res.data[2].sectorName,
                //   res.data[3].sectorName,
                //   res.data[4].sectorName,
                //   res.data[5].sectorName,
                //   res.data[6].sectorName,
                //   res.data[7].sectorName,
                // )
                this.YearlyComplaintChart.update();
                console.log(res.data);
            });
        });
    }
    gerYearlyDetailedReport() {
        let from = this.from.nativeElement.value;
        let to = this.to.nativeElement.value;
        let cname = this.cname.nativeElement.value;
        let cid = this.custID.nativeElement.value;
        console.log();
        if (from == '' || to == '' || cname == '' || cid == '') {
            alert('Please select all the fields');
            return 0;
        }
        window.location.href = (`${environment.apiUrl}/report/Complaint/Yearly/Details?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`);
    }
    getYearlyReport() {
        let from = this.from.nativeElement.value;
        let to = this.to.nativeElement.value;
        let cname = this.cname.nativeElement.value;
        let cid = this.custID.nativeElement.value;
        console.log();
        if (from == '' || to == '' || cname == '' || cid == '') {
            alert('Please select all the fields');
            return 0;
        }
        window.location.href = (`${environment.apiUrl}/report/Complaint/Yearly?companyId=${cid}&companyName=${cname}&fromDate=${from}&toDate=${to}`);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(this._router.url);
            if (this._router.url.includes('complaint-form')) {
                this.formFlag = true;
            }
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
            if (this._router.url.includes('complaints')) {
                (yield this._complaint.getAllComplaints()).subscribe((res) => {
                    console.log(res);
                    this.dataSource = new MatTableDataSource(res.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                });
            }
            (yield this._complaint.getCustomers()).subscribe((res) => {
                // console.log(res);
                if (res.status)
                    this.customersList = res.data;
            });
            (yield this._complaint.getSectors()).subscribe((res) => {
                if (res.status)
                    this.organizations = res.data;
            });
            (yield this._complaint.getMaterialsList()).subscribe((res) => {
                if (res.status)
                    this.materials = res.data;
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
        });
    }
    approve() {
        const dialogRef = this.dialog.open(AssignDepartmentComponent, {
            width: '30%'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    ngAfterViewInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.YearlyComplaintChart = new Chart(this.YearlyComplaintCanvas.nativeElement, {
                type: "bar",
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: "Physical Condition",
                            backgroundColor: "pink",
                            borderColor: "red",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Strenth Performance",
                            backgroundColor: "lightblue",
                            borderColor: "blue",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Misfire",
                            backgroundColor: "lightgreen",
                            borderColor: "green",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Boxes",
                            backgroundColor: "yellow",
                            borderColor: "orange",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Labelling",
                            backgroundColor: "orange",
                            borderColor: "orange",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Safety",
                            backgroundColor: "steelblue",
                            borderColor: "orange",
                            borderWidth: 1,
                            data: []
                        },
                        {
                            label: "Total",
                            backgroundColor: "gold",
                            borderColor: "orange",
                            borderWidth: 1,
                            data: []
                        },
                    ]
                }
            });
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    getFilterData() {
        return __awaiter(this, void 0, void 0, function* () {
            let from = this.from2.nativeElement.value;
            let to = this.to2.nativeElement.value;
            let cid = this.customerID2.nativeElement.value;
            let cname = this.nameOfOrganization2.nativeElement.value;
            let cat = this.categoryOfComplaint.nativeElement.value;
            let pname = this.nameOfProduct.nativeElement.value;
            let dep = this.approvalStageDepartment.nativeElement.value;
            let type = this.type.nativeElement.value;
            let cid2 = this.companyId2.nativeElement.value;
            let data = {
                from,
                to,
                cid,
                cname,
                cat,
                pname,
                dep,
                type,
                cid2,
            };
            (yield this._complaint.getFilterComplaints(data)).subscribe((res) => {
                console.log(res);
                alert('Data is fetched');
                this.dataSource = new MatTableDataSource(res.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }
    showAll() {
        window.location.reload();
    }
    new() {
        this._router.navigate(['/complaint-form']).then(() => {
            window.location.reload();
        });
    }
    viewDetail(id) {
        this._router.navigate(['/complaint-form', id]).then(() => {
            window.location.reload();
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], ComplaintComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], ComplaintComponent.prototype, "sort", void 0);
__decorate([
    ViewChild('custId')
], ComplaintComponent.prototype, "custID", void 0);
__decorate([
    ViewChild('from')
], ComplaintComponent.prototype, "from", void 0);
__decorate([
    ViewChild('to')
], ComplaintComponent.prototype, "to", void 0);
__decorate([
    ViewChild('cName')
], ComplaintComponent.prototype, "cname", void 0);
__decorate([
    ViewChild("YearlyComplaintCanvas")
], ComplaintComponent.prototype, "YearlyComplaintCanvas", void 0);
__decorate([
    ViewChild('from2')
], ComplaintComponent.prototype, "from2", void 0);
__decorate([
    ViewChild('to2')
], ComplaintComponent.prototype, "to2", void 0);
__decorate([
    ViewChild('customerID2')
], ComplaintComponent.prototype, "customerID2", void 0);
__decorate([
    ViewChild('nameOfOrganization2')
], ComplaintComponent.prototype, "nameOfOrganization2", void 0);
__decorate([
    ViewChild('categoryOfComplaint')
], ComplaintComponent.prototype, "categoryOfComplaint", void 0);
__decorate([
    ViewChild('nameOfProduct')
], ComplaintComponent.prototype, "nameOfProduct", void 0);
__decorate([
    ViewChild('approvalStageDepartment')
], ComplaintComponent.prototype, "approvalStageDepartment", void 0);
__decorate([
    ViewChild('type')
], ComplaintComponent.prototype, "type", void 0);
__decorate([
    ViewChild('companyId2')
], ComplaintComponent.prototype, "companyId2", void 0);
ComplaintComponent = __decorate([
    Component({
        selector: 'app-complaint',
        templateUrl: './complaint.component.html',
        styleUrls: ['./complaint.component.scss']
    })
], ComplaintComponent);
export { ComplaintComponent };
//# sourceMappingURL=complaint.component.js.map