import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let AddEditDepartmentComponent = class AddEditDepartmentComponent {
    constructor(formBuilder, data, depService) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.depService = depService;
    }
    ngOnInit() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.type = (_a = this.data) === null || _a === void 0 ? void 0 : _a.type;
            this.id = (_b = this.data) === null || _b === void 0 ? void 0 : _b.id;
            if (this.id != undefined && this.type == 'edit') {
                (yield this.depService.getOneDepartment(this.id)).subscribe((res) => {
                    console.error(res);
                    this.departmentForm = this.formBuilder.group({
                        name: [res.data.name, [Validators.required]],
                        decription: [res.data.decription, [Validators.required]]
                    });
                });
            }
            this.departmentForm = this.formBuilder.group({
                name: ['', [Validators.required]],
                decription: ['', [Validators.required]]
            });
        });
    }
    addForm() {
        if (this.departmentForm.invalid) {
            return;
        }
        this.submit = true;
        this.depService.addDepartment(this.departmentForm.value).then((res) => {
            res.subscribe((response) => {
                console.error(response);
                if (response.status) {
                    this.errorMsg = "";
                    this.successMsg = 'Department Added Successfully...';
                    this.submit = false;
                    console.log(response);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    this.submit = false;
                    this.successMsg = "";
                    this.errorMsg = "Failed to add department...";
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
            console.error(this.departmentForm.value);
            if (this.departmentForm.invalid) {
                return;
            }
            this.submit = true;
            (yield (this.depService.editDepartment({ name: this.departmentForm.value.name, decription: this.departmentForm.value.decription }, this.id))).subscribe((response) => {
                console.error(response);
                // await (await (this._category.editCategory(this.categoryForm.value, this.id))).subscribe((response: any) => {
                if (response === null || response === void 0 ? void 0 : response.status) {
                    this.errorMsg = "";
                    this.successMsg = "Department updated successfully";
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
AddEditDepartmentComponent = __decorate([
    Component({
        selector: 'app-add-edit-department',
        templateUrl: './add-edit-department.component.html',
        styleUrls: ['./add-edit-department.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], AddEditDepartmentComponent);
export { AddEditDepartmentComponent };
//# sourceMappingURL=add-edit-department.component.js.map