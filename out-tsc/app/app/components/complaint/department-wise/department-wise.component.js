import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
let DepartmentWiseComponent = class DepartmentWiseComponent {
    constructor(_router, _complaint, gVar) {
        this._router = _router;
        this._complaint = _complaint;
        this.gVar = gVar;
        this.environment = environment;
        this.displayedColumns = ['id', 'customerID', 'customerName', 'dateOfCreate', 'complaintStatus', 'view', 'action'];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._complaint.getDepartmentWise()).subscribe((res) => {
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
};
__decorate([
    ViewChild(MatPaginator)
], DepartmentWiseComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], DepartmentWiseComponent.prototype, "sort", void 0);
DepartmentWiseComponent = __decorate([
    Component({
        selector: 'app-department-wise',
        templateUrl: './department-wise.component.html',
        styleUrls: ['./department-wise.component.scss']
    })
], DepartmentWiseComponent);
export { DepartmentWiseComponent };
//# sourceMappingURL=department-wise.component.js.map