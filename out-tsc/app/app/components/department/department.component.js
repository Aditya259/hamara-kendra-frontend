import { __awaiter, __decorate } from "tslib";
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
let DepartmentComponent = class DepartmentComponent {
    constructor(depService, dialog) {
        this.depService = depService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'decription', 'createAt', 'edit', 'delete'];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.depService.getDepartment()).subscribe((res) => {
                if (res.status) {
                    console.error(res.data);
                    this.dataSource = new MatTableDataSource(res.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                console.error(this.departmentList);
            });
        });
    }
    addEditDepartment(type, id = '') {
        const dialogRef = this.dialog.open(AddEditDepartmentComponent, {
            data: { type, id },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            Swal.fire({
                title: 'Are you sure want to delete?',
                text: 'Department will get deleted',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
            }).then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.value) {
                    (yield this.depService.deleteDepartment(id)).subscribe((resp) => {
                        console.warn(resp);
                        if (resp.status) {
                            Swal.fire('Status!', 'Department Deleted Successfully', 'success').then(() => {
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1000);
                            });
                        }
                        else {
                            Swal.fire('Failed to delete!', 'Unable to delete.', 'error');
                        }
                    }, (error) => {
                        console.warn(error);
                        Swal.fire('Error!', 'Error occured Please try after some time.', 'error');
                    });
                }
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Cancelled', 'Your data is safe :)', 'error');
                }
            }));
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
], DepartmentComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], DepartmentComponent.prototype, "sort", void 0);
DepartmentComponent = __decorate([
    Component({
        selector: 'app-department',
        templateUrl: './department.component.html',
        styleUrls: ['./department.component.scss'],
    })
], DepartmentComponent);
export { DepartmentComponent };
//# sourceMappingURL=department.component.js.map