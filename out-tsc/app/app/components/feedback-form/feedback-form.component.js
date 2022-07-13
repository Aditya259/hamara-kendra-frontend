import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let FeedbackFormComponent = class FeedbackFormComponent {
    constructor(formBuilder, _activeRoute, _feedback, gVar, _router, _complaint, depService) {
        this.formBuilder = formBuilder;
        this._activeRoute = _activeRoute;
        this._feedback = _feedback;
        this.gVar = gVar;
        this._router = _router;
        this._complaint = _complaint;
        this.depService = depService;
        this.showStages = false;
        this.level1Name = "";
        this.level1Date = "";
        this.level2Name = "";
        this.level2Date = "";
        this.feedID = '0';
        this.customerFeedbackFormData = new FormData();
        this.editible = true;
        this.companies = [];
    }
    setComapnyId(e) {
        const selectEl = e.target;
        const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
        console.log(val);
        this.customerFeedForm.patchValue({ companyID: val });
    }
    uploadSignature(event) {
        const files = event.target.files;
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            alert('Only Images are Allowed');
            return;
        }
        const reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.url = reader.result;
            console.log(this.url);
        };
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._complaint.getAllSectors()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.sectors = res.data;
                }
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
            this.feedID = this._activeRoute.snapshot.paramMap.get('id');
            this._activeRoute.queryParams.subscribe(res => {
                console.log(res.action); //will give query params as an object
                this.action = res.action;
            });
            if (this.feedID == null || this.feedID == '0') {
                this.editible = true;
            }
            if (this.feedID != '0' && this.feedID != null) {
                this.editible = false;
                this.showStages = true;
                (yield this._feedback.getFeedbackById(this.feedID)).subscribe((res) => {
                    console.error(res);
                    if (res.status) {
                        this.level1Name = res.data.nameOfSalesPerson;
                        this.level1Date = res.data.dateOfCreate;
                        this.level2Name = res.data.nameOfLevel1;
                        this.level2Date = res.data.dateOfLevel1;
                        this.url = res.data.signature;
                        this.attachmentUrl = res.data.upload_attachment;
                        this.customerFeedForm = this.formBuilder.group({
                            companyID: [res.data.companyID, Validators.required],
                            companyName: [res.data.companyName, Validators.required],
                            date: [res.data.date, Validators.required],
                            nameOfMine: [res.data.nameOfMine, Validators.required],
                            contactPersonName: [res.data.contactPersonName, Validators.required],
                            designation: [res.data.designation, Validators.required],
                            department: [res.data.department, Validators.required],
                            sectorName: [res.data.sectorName, Validators.required],
                            sectorID: [res.data.sectorID, Validators.required],
                            productUsed: [res.data.productUsed, Validators.required],
                            productQuality1: [res.data.productQuality1, Validators.required],
                            productQuality2: [res.data.productQuality2, Validators.required],
                            delivery1: [res.data.delivery1, Validators.required],
                            delivery2: [res.data.delivery2, Validators.required],
                            delivery3: [res.data.delivery3, Validators.required],
                            service1: [res.data.service1, Validators.required],
                            service2: [res.data.service2, Validators.required],
                            service3: [res.data.service3, Validators.required],
                            behaviourOfOurStaff1: [res.data.behaviourOfOurStaff1, Validators.required],
                            behaviourOfOurStaff2: [res.data.behaviourOfOurStaff2, Validators.required],
                            behaviourOfOurStaff3: [res.data.behaviourOfOurStaff3, Validators.required],
                            anyOtherComments1: [res.data.anyOtherComments1],
                            anyOtherComments2: [res.data.anyOtherComments2],
                            anyOtherComments3: [res.data.anyOtherComments3],
                            anyOtherComments4: [res.data.anyOtherComments4],
                            anyOtherComments5: [res.data.anyOtherComments5],
                            competitiveness1: [res.data.competitiveness1, Validators.required],
                            competitiveness2: [res.data.competitiveness2, Validators.required],
                            uploadedBy: [res.data.uploadedBy],
                        });
                    }
                });
            }
            (yield this._complaint.getMaterialsList()).subscribe((res) => {
                if (res.status)
                    this.materials = res.data;
                this.materials = new Set(this.materials);
            });
            this.customerFeedForm = this.formBuilder.group({
                companyID: ['', Validators.required],
                signature: ['', Validators.required],
                companyName: ['', Validators.required],
                date: ['', Validators.required],
                nameOfMine: ['', Validators.required],
                contactPersonName: ['', Validators.required],
                designation: ['', Validators.required],
                department: ['', Validators.required],
                productUsed: ['', Validators.required],
                productQuality1: [''],
                sectorName: ['', Validators.required],
                sectorID: ['', Validators.required],
                productQuality2: [''],
                delivery1: [''],
                delivery2: [''],
                delivery3: [''],
                service1: [''],
                service2: [''],
                service3: [''],
                behaviourOfOurStaff1: [''],
                behaviourOfOurStaff2: [''],
                behaviourOfOurStaff3: [''],
                anyOtherComments1: [''],
                anyOtherComments2: [''],
                anyOtherComments3: [''],
                anyOtherComments4: [''],
                anyOtherComments5: [''],
                competitiveness1: ['', Validators.required],
                competitiveness2: ['', Validators.required],
                uploadedBy: [''],
                upload_attachment: [''],
                nameOfSalesPerson: [sessionStorage.getItem('name')]
            });
            this.approveFeedForm = this.formBuilder.group({
                feedBackStatus: ['', Validators.required],
                // nameOfLevel1: ['', Validators.required],
                nameOfLevel1: [sessionStorage.getItem('name')]
            });
            (yield this._complaint.getCustomers()).subscribe((res) => {
                // console.log(res);
                if (res.status)
                    this.customersList = res.data;
            });
            (yield this.depService.getDepartment()).subscribe((res) => {
                if (res.status) {
                    this.departmentList = res.data;
                }
                // console.error(this.departmentList);
            });
        });
    }
    setCustID(e) {
        const selectEl = e.target;
        const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
        // console.log(
        //   val
        // );
        this.customerFeedForm.patchValue({ customerID: val });
    }
    editibleTogle() {
        this.editible = !this.editible;
    }
    addFile(event) {
        console.log(event.target.files[0]);
        this.customerFeedbackFormData.append(event.target.getAttribute('data-name'), event.target.files[0]);
        console.log(event.target.getAttribute('data-name'));
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
                this.customerFeedForm.reset();
                Swal.fire('Status!', 'Successful Reset', 'success');
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        }));
    }
    submitNow() {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.customerFeedForm.value['signature'];
            delete this.customerFeedForm.value['upload_attachment'];
            this.customerFeedbackFormData.append('feedBackJSON', JSON.stringify(this.customerFeedForm.value));
            (yield this._feedback.addNewFeed(this.customerFeedbackFormData)).subscribe((res) => {
                console.log(res);
                if (res.status) {
                    Swal.fire('Success', 'Feedback Added! ID : ' + res.id, 'success');
                    setTimeout(() => {
                        this._router.navigateByUrl('feedbacks');
                    }, 1000);
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    submit(status) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._feedback.updateStatus(this.feedID, { nameOfLevel1: sessionStorage.getItem('name'), feedBackStatus: status })).subscribe((res) => {
                if (res.status) {
                    Swal.fire('Success', 'Status updated successfully!', 'success').then(() => {
                        this._router.navigateByUrl('feedbacks');
                    });
                }
                else {
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                }
            });
        });
    }
    printForm() {
        var printContents = this.formFeedback.nativeElement.innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    setSecID(e) {
        const selectEl = e.target;
        const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
        console.log(val);
        this.customerFeedForm.patchValue({ sectorID: val });
    }
};
__decorate([
    ViewChild('formFeedback')
], FeedbackFormComponent.prototype, "formFeedback", void 0);
FeedbackFormComponent = __decorate([
    Component({
        selector: 'app-feedback-form',
        templateUrl: './feedback-form.component.html',
        styleUrls: ['./feedback-form.component.scss']
    })
], FeedbackFormComponent);
export { FeedbackFormComponent };
//# sourceMappingURL=feedback-form.component.js.map