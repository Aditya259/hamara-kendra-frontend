import { __awaiter, __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let AddEditQuartelyFormComponent = class AddEditQuartelyFormComponent {
    constructor(formBuilder, data, _feedback) {
        this.formBuilder = formBuilder;
        this.data = data;
        this._feedback = _feedback;
    }
    ngOnInit() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.type = (_a = this.data) === null || _a === void 0 ? void 0 : _a.type;
            this.id = (_b = this.data) === null || _b === void 0 ? void 0 : _b.id;
            if (this.id != undefined && this.type == 'edit') {
                (yield this._feedback.getAnFeedbackQuarterlyTarger(this.id)).subscribe((res) => {
                    console.error(res);
                    this.quaterlyReportForm = this.formBuilder.group({
                        year: [res.data.year, [Validators.required]],
                        institution: [res.data.institution, [Validators.required]],
                        trade: [res.data.trade, [Validators.required]],
                        export: [res.data.export, [Validators.required]],
                        wcl: [res.data.wcl, [Validators.required]],
                        mcl: [res.data.mcl, [Validators.required]],
                        ncl: [res.data.ncl, [Validators.required]],
                        sccl: [res.data.sccl, [Validators.required]],
                        bccl: [res.data.bccl, [Validators.required]],
                        ccl: [res.data.ccl, [Validators.required]],
                        ecl: [res.data.ecl, [Validators.required]],
                        secl: [res.data.secl, [Validators.required]]
                    });
                });
            }
            this.quaterlyReportForm = this.formBuilder.group({
                // name: ['', [Validators.required]],
                // decription: ['', [Validators.required]]
                year: ['', [Validators.required]],
                institution: ['', [Validators.required]],
                trade: ['', [Validators.required]],
                export: ['', [Validators.required]],
                wcl: ['', [Validators.required]],
                mcl: ['', [Validators.required]],
                ncl: ['', [Validators.required]],
                sccl: ['', [Validators.required]],
                bccl: ['', [Validators.required]],
                ccl: ['', [Validators.required]],
                ecl: ['', [Validators.required]],
                secl: ['', [Validators.required]]
            });
        });
    }
    addForm() {
        if (this.quaterlyReportForm.invalid) {
            return;
        }
        this.submit = true;
        this._feedback.addAnFeedbackQuarterlyTarger(this.quaterlyReportForm.value).then((res) => {
            res.subscribe((response) => {
                console.error(response);
                if (response.status) {
                    this.errorMsg = "";
                    this.successMsg = ' Added Successfully...';
                    this.submit = false;
                    console.log(response);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    this.submit = false;
                    this.successMsg = "";
                    this.errorMsg = "Failed to add ...";
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
            console.error(this.quaterlyReportForm.value);
            if (this.quaterlyReportForm.invalid) {
                return;
            }
            this.submit = true;
            (yield (this._feedback.updateAnFeedbackQuarterlyTarger(this.id, this.quaterlyReportForm.value))).subscribe((response) => {
                console.error(response);
                // await (await (this._category.editCategory(this.categoryForm.value, this.id))).subscribe((response: any) => {
                if (response === null || response === void 0 ? void 0 : response.status) {
                    this.errorMsg = "";
                    this.successMsg = " updated successfully";
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
AddEditQuartelyFormComponent = __decorate([
    Component({
        selector: 'app-add-edit-quartely-form',
        templateUrl: './add-edit-quartely-form.component.html',
        styleUrls: ['./add-edit-quartely-form.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], AddEditQuartelyFormComponent);
export { AddEditQuartelyFormComponent };
//# sourceMappingURL=add-edit-quartely-form.component.js.map