import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let AddAdminComponent = class AddAdminComponent {
    constructor(formBuilder, adminService, data, depService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.data = data;
        this.depService = depService;
        this.selectedDepartment = 'department';
    }
    ngOnInit() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.type = (_a = this.data) === null || _a === void 0 ? void 0 : _a.type;
            this.id = (_b = this.data) === null || _b === void 0 ? void 0 : _b.id;
            if (this.id != undefined && this.type == 'edit') {
                (yield this.adminService.getAnAdmin(this.id)).subscribe((res) => {
                    this.addAdminForm = this.formBuilder.group({
                        name: [res.data.name, [Validators.required]],
                        user: [res.data.user, [Validators.required]],
                        pass: [res.data.pass, [Validators.required]],
                        role: [res.data.role, [Validators.required]],
                        department: [res.data.department]
                    });
                });
            }
            (yield this.depService.getDepartment()).subscribe((res) => {
                if (res.status) {
                    this.departmentList = res.data;
                }
                console.error(this.departmentList);
            });
            this.addAdminForm = this.formBuilder.group({
                name: ['', [Validators.required]],
                user: ['', [Validators.required]],
                pass: ['', [Validators.required]],
                role: ['', [Validators.required]],
                department: ['']
            });
        });
    }
    setRoleValue(event) {
        console.log(event);
        this.selectedDepartment = event.value;
        this.role = this.selectedDepartment;
    }
    addForm() {
        if (this.addAdminForm.invalid) {
            return;
        }
        this.submit = true;
        this.adminService.addAdmin(this.addAdminForm.value).then((res) => {
            res.subscribe((response) => {
                console.error(response);
                if (response.status) {
                    this.errorMsg = "";
                    this.successMsg = 'Admin Added Successfully...';
                    this.submit = false;
                    console.log(response);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    this.submit = false;
                    this.successMsg = "";
                    this.errorMsg = "Failed to add admin...";
                }
            });
        }).catch((error) => {
            this.submit = false;
            console.log(error);
            this.errorMsg = error.message;
        });
    }
    editForm() {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(this.addAdminForm.value);
            if (this.addAdminForm.invalid) {
                return;
            }
            this.submit = true;
            (yield (this.adminService.editAdmin({ user: this.addAdminForm.value.user, name: this.addAdminForm.value.name, pass: this.addAdminForm.value.pass, role: this.addAdminForm.value.role, department: this.addAdminForm.value.department }, this.id))).subscribe((response) => {
                console.error(response);
                // await (await (this._category.editCategory(this.categoryForm.value, this.id))).subscribe((response: any) => {
                if (response === null || response === void 0 ? void 0 : response.status) {
                    this.errorMsg = "";
                    this.successMsg = "Admin updated successfully";
                    this.submit = false;
                    console.log(response);
                    setTimeout(() => { window.location.reload(); }, 1000);
                }
                else {
                    this.submit = false;
                    this.successMsg = "";
                    this.errorMsg = "Failed to update";
                }
            }, (error) => {
            });
        });
    }
};
AddAdminComponent = __decorate([
    Component({
        selector: 'app-add-admin',
        templateUrl: './add-admin.component.html',
        styleUrls: ['./add-admin.component.scss'],
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], AddAdminComponent);
export { AddAdminComponent };
//# sourceMappingURL=add-admin.component.js.map