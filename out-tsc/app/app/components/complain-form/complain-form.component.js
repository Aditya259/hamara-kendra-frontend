import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
let ComplainFormComponent = class ComplainFormComponent {
    constructor(formBuilder, gVar, exportService, _complaint, _router, _activeRoute, depService) {
        this.formBuilder = formBuilder;
        this.gVar = gVar;
        this.exportService = exportService;
        this._complaint = _complaint;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.depService = depService;
        this.complaintId = '0';
        this.editible = true;
        this.fieldReport = true;
        this.plainReport = true;
        this.closure = true;
        this.customerComplaintFormData = new FormData();
        this.customerReportFormData = new FormData();
        this.customerClosureFormData = new FormData();
        this.plantReportFormData = new FormData();
        this.rpc = false;
        this.showApprovalStages = false;
        this.level1Name = '';
        this.level1Date = '';
        this.level2Name = '';
        this.level2Date = '';
        this.level3Name = '';
        this.level3Date = '';
        this.level4Name = '';
        this.level4Date = '';
        this.companies = [];
        this.plants = [];
        this.customersList = [];
        this.organizations = [];
        this.materials = [];
        this.ApprovedFlag = false;
        this.customers = [];
    }
    setCustID(deviceValue) {
        // console.log(deviceValue);
        this.customerComplaintForm.patchValue({ customerID: deviceValue });
        const name = $("#customerNam option:selected").text();
        this.customerComplaintForm.patchValue({ customerName: name });
    }
    // printForm(){
    //   // window.print()
    //   var printContents = this.formFeedback.nativeElement.innerHTML;
    //   var originalContents = document.body.innerHTML;
    //   document.body.innerHTML = printContents;
    //   window.print();
    //   document.body.innerHTML = originalContents;
    // }
    printForm() {
        var printContents = document.getElementById('formPrint').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    ngAfterViewInit() {
        // $('.selectpicker').selectpicker('refresh');
        // setTimeout(function () {
        //   alert('afterView')
        //   $('.selectpicker').selectpicker('refresh');   // refresh the selectpicker with fetched courses
        //   this.selectpicker.nativeElement.selectpicker('refresh');
        // }, 3000);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.complaintId = this._activeRoute.snapshot.paramMap.get('id');
            this._activeRoute.queryParams.subscribe(params => {
                this.action = params["action"];
            });
            if (this.complaintId != '0' && this.complaintId != null) {
                this.rpc = true;
                this.editible = false;
                this.showApprovalStages = true;
                // console.log(this.editible, this.complaintId);
                (yield this._complaint.getComplaintById(this.complaintId)).subscribe((res) => {
                    console.log(res);
                    // console.log(res.data.date.split('T')[0]);
                    if (res.status) {
                        if (res.data.approvalStageStatus == "approve") {
                            this.ApprovedFlag = true;
                        }
                        this.level1Date = res.data.dateOfCreate;
                        this.level1Name = res.data.nameOfSalesPerson;
                        this.level2Date = res.data.dateOfLevel1;
                        this.level2Name = res.data.nameOfLevel1;
                        this.level3Date = res.data.dateOfLevel2;
                        this.level3Name = res.data.nameOfLevel2;
                        this.level4Date = res.data.dateOfLevel3;
                        this.level4Name = res.data.nameOfLevel3;
                        // this.customerComplaintForm.get('nameOfProduct')[!this.editible ? 'enable' : 'disable']();
                        this.customerComplaintForm = this.formBuilder.group({
                            customerID: [res.data.customerID],
                            customerName: [res.data.customerName, Validators.required],
                            date: [res.data.date.split('T')[0], Validators.required],
                            nameOfOrganization: [res.data.nameOfOrganization, Validators.required],
                            nameOfMine: [res.data.nameOfMine, Validators.required],
                            categoryOfComplaint: [res.data.categoryOfComplaint, Validators.required],
                            nameOfProduct: [res.data.nameOfProduct, Validators.required],
                            // mobileNo: [res.data.mobileNo, Validators.required],
                            batchNo: [res.data.batchNo, Validators.required],
                            caseNo: [res.data.caseNo, Validators.required],
                            dateOfManufacturing: [res.data.dateOfManufacturing, Validators.required],
                            natureOfComplaint: [res.data.natureOfComplaint, Validators.required],
                            type: [res.data.type, Validators.required],
                            remark: [res.data.remark, Validators.required],
                            invoiceNo: [res.data.invoiceNo],
                            upload_attachment: [''],
                            upload_re_11: [''],
                            upload_re_12: [''],
                            desciptionOfProduct: [res.data.desciptionOfProduct]
                        });
                        this.plantReportForm = this.formBuilder.group({
                            companyName: [res.data.companyName],
                            plantName: [res.data.plantName],
                            reportDocumentNo: [res.data.reportDocumentNo],
                            dateOfRecieptOfComplaint: [res.data.dateOfRecieptOfComplaint],
                            natureOfComplaint: [res.data.natureOfComplaint],
                            qtyDispatched: [res.data.qtyDispatched],
                            dateOfDispatch: [res.data.dateOfDispatch],
                            qtyDefective: [res.data.qtyDefective],
                            complaintInvestigationFindingRemark: [res.data.complaintInvestigationFindingRemark],
                            correctiveActionIfAny: [res.data.correctiveActionIfAny],
                            verificationOfEffectivenessOfCorrectionActions: [res.data.verificationOfEffectivenessOfCorrectionActions],
                            complaintValidatedBy: [res.data.complaintValidatedBy],
                            complaintJustifiedNotJustified: [res.data.complaintJustifiedNotJustified],
                            complaintAttendedByIfAny: [res.data.complaintAttendedByIfAny],
                            inChargeSignature: [res.data.inChargeSignature],
                            hodSignature: [res.data.hodSignature],
                            complaintReportAttachment: [res.data.complaintReportAttachment],
                            companyId: [res.data.companyId],
                            plantId: [res.data.plantId],
                        });
                        this.uploadAttachmentURL = res.data.uploadAttachment;
                        this.uploadRe11URL = res.data.uploadRe11;
                        this.uploadRe12URL = res.data.uploadRe12;
                        this.inChargeSignatureURL = res.data.inChargeSignature;
                        this.hodSignatureURL = res.data.hodSignature;
                        this.complaintReportAttachmentURL = res.data.complaintReportAttachment;
                        this.fieldReportForm = this.formBuilder.group({
                            nameOfEngineer: [res.data.nameOfEngineer, Validators.required],
                            nameOfContactPersonEngineer: [res.data.nameOfContactPersonEngineer, Validators.required],
                            recipient: [res.data.recipient, Validators.required],
                            conclusion: [res.data.conclusion, Validators.required],
                            uploadAttachment1: [res.data.uploadAttachment1],
                            uploadAttachment2: [res.data.uploadAttachment2],
                            uploadAttachment3: [res.data.uploadAttachment3],
                            uploadAttachment4: [res.data.uploadAttachment4],
                            correctionActivity: [res.data.correctionActivity, Validators.required],
                            nameOfLevel2: [this.gVar.name, Validators.required],
                            clouser: [res.data.clouser, Validators.required],
                        });
                        this.fieldUploadAttachment1URL = res.data.uploadAttachment1;
                        this.fieldUploadAttachment2URL = res.data.uploadAttachment2;
                        this.fieldUploadAttachment3URL = res.data.uploadAttachment3;
                        this.fieldUploadAttachment4URL = res.data.uploadAttachment4;
                        this.clouserAttachmentURL = res.data.clouserAttachment;
                        this.closureForm = this.formBuilder.group({
                            clouserRemark1: [res.data.clouserRemark1],
                            clouserRemark2: [res.data.clouserRemark2],
                            clouserRemark3: [res.data.clouserRemark3],
                            clouserRemark4: [res.data.clouserRemark4],
                            clouserAttachment: [res.data.clouserAttachment],
                            nameOfLevel3: [sessionStorage.getItem('name')]
                        });
                    }
                    else {
                        alert('Something went Worng, Try Again... Unable to Fetch Data...');
                        this._router.navigateByUrl('/complaints');
                    }
                });
            }
            // console.log(this.editible);
            for (let i = 0; i <= 1; i++) {
                this.customers.push({
                    firstName: `first${i}`, lastName: `last${i}`,
                    email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`
                });
            }
            this.plantReportForm = this.formBuilder.group({
                companyName: [''],
                plantName: [''],
                reportDocumentNo: [''],
                dateOfRecieptOfComplaint: [''],
                natureOfComplaint: [''],
                qtyDispatched: [''],
                dateOfDispatch: [''],
                qtyDefective: [''],
                complaintInvestigationFindingRemark: [''],
                correctiveActionIfAny: [''],
                verificationOfEffectivenessOfCorrectionActions: [''],
                complaintValidatedBy: [''],
                complaintJustifiedNotJustified: [''],
                complaintAttendedByIfAny: [''],
                inChargeSignature: [''],
                hodSignature: [''],
                complaintReportAttachment: [''],
                companyId: [''],
                plantId: [''],
            });
            this.customerComplaintForm = this.formBuilder.group({
                customerID: ['', Validators.required],
                desciptionOfProduct: [''],
                customerName: [''],
                date: ['', Validators.required],
                nameOfOrganization: ['', Validators.required],
                nameOfMine: ['', Validators.required],
                categoryOfComplaint: ['', Validators.required],
                nameOfProduct: ['', Validators.required],
                // mobileNo: ['', Validators.required],
                batchNo: ['', Validators.required],
                caseNo: ['', Validators.required],
                dateOfManufacturing: ['', Validators.required],
                natureOfComplaint: ['', Validators.required],
                type: ['', Validators.required],
                remark: ['', Validators.required],
                invoiceNo: [''],
                upload_attachment: [''],
                upload_re_11: [''],
                upload_re_12: [''],
                nameOfSalesPerson: [sessionStorage.getItem('name')]
            });
            this.approveComplaintForm = this.formBuilder.group({
                approvalStageDepartment: [''],
                approvalStageNotes: [''],
                approvalStageForwardTo: [''],
                nameOfLevel1: [sessionStorage.getItem('name')],
                dateOfLevel1: [new Date()]
            });
            this.fieldReportForm = this.formBuilder.group({
                nameOfEngineer: ['', Validators.required],
                nameOfContactPersonEngineer: ['', Validators.required],
                recipient: ['', Validators.required],
                conclusion: ['', Validators.required],
                uploadAttachment1: [''],
                uploadAttachment2: [''],
                uploadAttachment3: [''],
                uploadAttachment4: [''],
                correctionActivity: ['', Validators.required],
                // nameOfLevel2: [this.gVar.name, Validators.required],
                clouser: ['', Validators.required],
                nameOfLevel2: [sessionStorage.getItem('name')]
            });
            this.closureForm = this.formBuilder.group({
                clouserRemark1: [''],
                clouserRemark2: [''],
                clouserRemark3: [''],
                clouserRemark4: [''],
                clouserAttachment: [''],
                nameOfLevel3: [sessionStorage.getItem('name')]
            });
            (yield this.depService.getDepartment()).subscribe((res) => {
                if (res.status) {
                    this.departmentList = res.data;
                }
                // console.error(this.departmentList);
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
            (yield this._complaint.getCustomers()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.customersList = res.data;
                    // setTimeout(function () {
                    //   // this.customersList = res.data
                    //     // alert('afterView')
                    //     // $(".selectpicker").append('<option value="asdasd">asdasd</option>');
                    //     $('.selectpicker').selectpicker();   // refresh the selectpicker with fetched courses
                    //     // this.selectpicker.nativeElement.selectpicker('refresh');
                    //   }, 500);
                }
            });
            (yield this._complaint.getSectors()).subscribe((res) => {
                if (res.status)
                    this.organizations = res.data;
            });
            (yield this._complaint.getMaterialsList()).subscribe((res) => {
                if (res.status)
                    this.materials = res.data;
            });
        });
    }
    getPlants(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectEl = e.target;
            const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
            this.plantReportForm.patchValue({ companyId: val });
            // console.log(
            //   val
            // );
            (yield this._complaint.getPlants(val)).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.plants = res.data;
                }
            });
        });
    }
    resetComplaintForm() {
        Swal.fire({
            title: 'Are you sure want to reset the Form?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Reset it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => __awaiter(this, void 0, void 0, function* () {
            if (result.value) {
                this.customerComplaintForm.reset();
                Swal.fire('Status!', 'Successful Reset', 'success');
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        }));
    }
    addReportFile(event) {
        this.customerReportFormData.append(event.target.getAttribute('data-name'), event.target.files[0]);
    }
    addClosureFile(event) {
        this.customerClosureFormData.append(event.target.getAttribute('data-name'), event.target.files[0]);
    }
    addFile(event) {
        this.customerComplaintFormData.append(event.target.getAttribute('data-name'), event.target.files[0]);
    }
    changeReport(event, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (type == 0) {
                if (event.target.checked) {
                    this.fieldReport = false;
                }
                else {
                    this.fieldReport = true;
                }
            }
            else if (type == 1) {
                if (event.target.checked) {
                    this.plainReport = false;
                }
                else {
                    this.plainReport = true;
                }
            }
            else if (type == 2) {
                if (event.target.checked) {
                    this.closure = false;
                }
                else {
                    this.closure = true;
                }
            }
            console.log(this.fieldReport, this.plainReport, this.closure);
        });
    }
    export() {
        this.exportService.exportExcel(this.customers, 'customers');
    }
    submit(status) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error({ "approvalStageDepartment": this.approveComplaintForm.value.approvalStageDepartment, "approvalStageNotes": this.approveComplaintForm.value.approvalStageNotes, "approvalStageForwardTo": this.approveComplaintForm.value.approvalStageForwardTo, "approvalStageStatus": status });
            this._complaint.actionForm({ "approvalStageDepartment": this.approveComplaintForm.value.approvalStageDepartment, "approvalStageNotes": this.approveComplaintForm.value.approvalStageNotes, "approvalStageForwardTo": this.approveComplaintForm.value.approvalStageForwardTo, "approvalStageStatus": status, "nameOfLevel1": sessionStorage.getItem('name') }, this.complaintId).then((res) => {
                res.subscribe((resp) => {
                    if (resp.status) {
                        Swal.fire('Success', 'Complaint ' + status + 'ed', 'success').then(() => {
                            this._router.navigateByUrl('complaints');
                        });
                    }
                    else {
                        Swal.fire('Oops...', 'Something went wrong!', 'error');
                    }
                });
            });
        });
    }
    // changeReport(event , type) {
    //   if(type == 0){
    //     if (event.target.checked) {
    //       this.fieldReport = false;
    //     }else {
    //       this.fieldReport = true;
    //     }
    //   }else if(type == 1){
    //     if (event.target.checked) {
    //       this.plainReport = false;
    //     }else {
    //       this.plainReport = true;
    //     }
    //   }else if(type == 2){
    //     if (event.target.checked) {
    //       this.closure = false;
    //     }else {
    //       this.closure = true;
    //     }
    //   }
    // }
    editibleTogle() {
        this.editible = !this.editible;
    }
    submitNow() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(this.customerComplaintForm.value);
            // return 0
            delete this.customerComplaintForm.value['upload_re_12'];
            delete this.customerComplaintForm.value['upload_re_11'];
            delete this.customerComplaintForm.value['upload_attachment'];
            // if (this.complaintId == undefined || this.complaintId == '0')
            // this.customerComplaintForm.controls({ nameOfSalesPerson: localStorage.getItem('name') })
            // this.customerComplaintForm.patchValue({ 'nameOfSalesPerson': sessionStorage.getItem('name').toString() })
            console.log(this.customerComplaintForm.value);
            this.customerComplaintFormData.append('complaintsJSON', JSON.stringify(this.customerComplaintForm.value));
            (yield this._complaint.addNewComplaints(this.customerComplaintFormData)).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    Swal.fire('Success', 'Complaint Added! ID : ' + res.id, 'success');
                    setTimeout(() => {
                        this._router.navigateByUrl('complaints');
                    }, 1000);
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    submitFieldReport() {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.fieldReportForm.value['uploadAttachment1'];
            delete this.fieldReportForm.value['uploadAttachment2'];
            delete this.fieldReportForm.value['uploadAttachment3'];
            delete this.fieldReportForm.value['uploadAttachment4'];
            this.customerReportFormData.append('complaintsJSON', JSON.stringify(this.fieldReportForm.value));
            (yield this._complaint.addReportField(this.complaintId, this.customerReportFormData)).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    Swal.fire('Success', 'Complaint Added! ID : ' + res.id, 'success');
                    setTimeout(() => {
                        this._router.navigateByUrl('complaints');
                    }, 1000);
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    submitPlantReport() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plantReportFormData.append('complaintsJSON', JSON.stringify(this.plantReportForm.value));
            delete this.plantReportForm.value.inChargeSignature;
            delete this.plantReportForm.value.hodSignature;
            delete this.plantReportForm.value.complaintReportAttachment;
            this.plantReportFormData.forEach((value, key) => {
                console.log(key, value);
            });
            (yield this._complaint.addPlantreport(this.complaintId, this.plantReportFormData)).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    Swal.fire('Success', 'Complaint Added! ID : ' + this.complaintId, 'success');
                    setTimeout(() => {
                        this._router.navigateByUrl('complaints');
                    }, 1000);
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    submitClosure() {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.closureForm.value['clouserAttachment'];
            console.log(this.closureForm.value);
            this.customerClosureFormData.append('complaintsJSON', JSON.stringify(this.closureForm.value));
            (yield this._complaint.addClosure(this.complaintId, this.customerClosureFormData)).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    Swal.fire('Success', 'Complaint Added! ID : ' + res.id, 'success');
                    setTimeout(() => {
                        this._router.navigateByUrl('complaints');
                    }, 1000);
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    addPlantReportsFiles(event) {
        this.plantReportFormData.append(event.target.getAttribute('data-name'), event.target.files[0]);
    }
    setPlantID(e) {
        const selectEl = e.target;
        const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
        // console.log(
        //   val
        // );
        this.plantReportForm.patchValue({ plantId: val });
    }
};
__decorate([
    ViewChild('formPrint')
], ComplainFormComponent.prototype, "formFeedback", void 0);
__decorate([
    ViewChild('selectpicker')
], ComplainFormComponent.prototype, "selectpicker", void 0);
ComplainFormComponent = __decorate([
    Component({
        selector: 'app-complain-form',
        templateUrl: './complain-form.component.html',
        styleUrls: ['./complain-form.component.scss']
    })
], ComplainFormComponent);
export { ComplainFormComponent };
//# sourceMappingURL=complain-form.component.js.map