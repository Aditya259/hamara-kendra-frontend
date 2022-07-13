import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AddAdminComponent } from './add-admin/add-admin.component';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
let AdminsComponent = class AdminsComponent {
    constructor(adminService, dialog) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.environment = environment;
        this.displayedColumns = [
            'id',
            'name',
            'user',
            'role',
            'department',
            'status',
            'createAt',
            'edit',
            'delete',
        ];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.adminService.getAdmin()).subscribe((res) => {
                if (res.status) {
                    console.error(res.adminList);
                    this.dataSource = new MatTableDataSource(res.adminList);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
            });
        });
    }
    addEditAdmin(type, id = '') {
        const dialogRef = this.dialog.open(AddAdminComponent, {
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
                text: 'Admin will get deleted',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
            }).then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.value) {
                    (yield this.adminService.deleteAdmin(id)).subscribe((resp) => {
                        console.warn(resp);
                        if (resp.status) {
                            Swal.fire('Status!', 'Admin Deleted Successfully', 'success').then(() => {
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
], AdminsComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], AdminsComponent.prototype, "sort", void 0);
AdminsComponent = __decorate([
    Component({
        selector: 'app-admins',
        templateUrl: './admins.component.html',
        styleUrls: ['./admins.component.scss'],
    })
], AdminsComponent);
export { AdminsComponent };
//# sourceMappingURL=admins.component.js.map