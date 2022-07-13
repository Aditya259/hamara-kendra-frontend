import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddEditQuartelyFormComponent } from './add-edit-quartely-form/add-edit-quartely-form.component';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';
let FeedbackQuartelyTargetComponent = class FeedbackQuartelyTargetComponent {
    constructor(_feedbackService, dialog, _complaint, _router) {
        this._feedbackService = _feedbackService;
        this.dialog = dialog;
        this._complaint = _complaint;
        this._router = _router;
        // // displayedColumns = ['id', 'name', 'decription', 'createAt', 'edit', 'delete'];
        this.displayedColumns = ['id', 'year', 'institution', 'trade', 'export', 'wcl', 'mcl', 'ncl', 'sccl', 'bccl', 'ccl', 'ecl', 'secl', 'createAt', 'edit'];
    }
    getRFeedBackQuaterlyeports() {
        return __awaiter(this, void 0, void 0, function* () {
            let from = this.from.nativeElement.value;
            let to = this.to.nativeElement.value;
            let cname = this.cname.nativeElement.value;
            let cid = this.custID.nativeElement.value;
            let year = this.year.nativeElement.value;
            console.log();
            if (from == '' || to == '' || cname == '' || cid == '' || year == '') {
                alert('Please select all the fields');
                return 0;
            }
            window.location.href = (`${environment.apiUrl}/report/FeedBack/Quarterly/Details?months=${from}TO${to}&year=${year}&companyID=${cid}&companyName=${cname}`);
        });
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
            let year = this.year.nativeElement.value;
            (yield this._feedbackService.getChartDataQuarterlyChart(from, to, cid, cname, year)).subscribe((res) => {
                console.log(res);
                this.TRADEChart.data.datasets[0].data.push(res.data[0].feedback_Sectors_rating_percent.productQuality, res.data[0].feedback_Sectors_rating_percent.delivery, res.data[0].feedback_Sectors_rating_percent.service, res.data[0].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[0].feedback_Sectors_rating_percent.competitiveness);
                this.TRADEChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.TRADEChart.update();
                this.INSTITUTIONChart.data.datasets[0].data.push(res.data[1].feedback_Sectors_rating_percent.productQuality, res.data[1].feedback_Sectors_rating_percent.delivery, res.data[1].feedback_Sectors_rating_percent.service, res.data[1].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[1].feedback_Sectors_rating_percent.competitiveness);
                this.INSTITUTIONChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.INSTITUTIONChart.update();
                this.EXPORTChart.data.datasets[0].data.push(res.data[2].feedback_Sectors_rating_percent.productQuality, res.data[2].feedback_Sectors_rating_percent.delivery, res.data[2].feedback_Sectors_rating_percent.service, res.data[2].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[2].feedback_Sectors_rating_percent.competitiveness);
                this.EXPORTChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.EXPORTChart.update();
                this.BCCLChart.data.datasets[0].data.push(res.data[3].feedback_Sectors_rating_percent.productQuality, res.data[3].feedback_Sectors_rating_percent.delivery, res.data[3].feedback_Sectors_rating_percent.service, res.data[3].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[3].feedback_Sectors_rating_percent.competitiveness);
                this.BCCLChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.BCCLChart.update();
                this.CCLChart.data.datasets[0].data.push(res.data[4].feedback_Sectors_rating_percent.productQuality, res.data[4].feedback_Sectors_rating_percent.delivery, res.data[4].feedback_Sectors_rating_percent.service, res.data[4].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[4].feedback_Sectors_rating_percent.competitiveness);
                this.CCLChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.CCLChart.update();
                this.ECLChart.data.datasets[0].data.push(res.data[5].feedback_Sectors_rating_percent.productQuality, res.data[5].feedback_Sectors_rating_percent.delivery, res.data[5].feedback_Sectors_rating_percent.service, res.data[5].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[5].feedback_Sectors_rating_percent.competitiveness);
                this.ECLChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.ECLChart.update();
                this.SECLChart.data.datasets[0].data.push(res.data[6].feedback_Sectors_rating_percent.productQuality, res.data[6].feedback_Sectors_rating_percent.delivery, res.data[6].feedback_Sectors_rating_percent.service, res.data[6].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[6].feedback_Sectors_rating_percent.competitiveness);
                this.SECLChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.SECLChart.update();
                this.Overall_RatingChart.data.datasets[0].data.push(res.data[7].feedback_Sectors_rating_percent.productQuality, res.data[7].feedback_Sectors_rating_percent.delivery, res.data[7].feedback_Sectors_rating_percent.service, res.data[7].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[7].feedback_Sectors_rating_percent.competitiveness);
                this.Overall_RatingChart.data.labels.push('productQuality', 'delivery', 'service', 'knowledge_and_Behavior_of_our_staff', 'competitiveness');
                this.Overall_RatingChart.update();
                this.CombinedChart.data.datasets[0].data.push(res.data[0].feedback_Sectors_rating_percent.productQuality, res.data[1].feedback_Sectors_rating_percent.productQuality, res.data[2].feedback_Sectors_rating_percent.productQuality, res.data[3].feedback_Sectors_rating_percent.productQuality, res.data[4].feedback_Sectors_rating_percent.productQuality, res.data[5].feedback_Sectors_rating_percent.productQuality, res.data[6].feedback_Sectors_rating_percent.productQuality, res.data[7].feedback_Sectors_rating_percent.productQuality);
                this.CombinedChart.data.datasets[1].data.push(res.data[0].feedback_Sectors_rating_percent.delivery, res.data[1].feedback_Sectors_rating_percent.delivery, res.data[2].feedback_Sectors_rating_percent.delivery, res.data[3].feedback_Sectors_rating_percent.delivery, res.data[4].feedback_Sectors_rating_percent.delivery, res.data[5].feedback_Sectors_rating_percent.delivery, res.data[6].feedback_Sectors_rating_percent.delivery, res.data[7].feedback_Sectors_rating_percent.delivery);
                this.CombinedChart.data.datasets[2].data.push(res.data[0].feedback_Sectors_rating_percent.service, res.data[1].feedback_Sectors_rating_percent.service, res.data[2].feedback_Sectors_rating_percent.service, res.data[3].feedback_Sectors_rating_percent.service, res.data[4].feedback_Sectors_rating_percent.service, res.data[5].feedback_Sectors_rating_percent.service, res.data[6].feedback_Sectors_rating_percent.service, res.data[7].feedback_Sectors_rating_percent.service);
                this.CombinedChart.data.datasets[3].data.push(res.data[0].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[1].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[2].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[3].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[4].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[5].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[6].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff, res.data[7].feedback_Sectors_rating_percent.knowledge_and_Behavior_of_our_staff);
                this.CombinedChart.data.datasets[4].data.push(res.data[0].feedback_Sectors_rating_percent.competitiveness, res.data[1].feedback_Sectors_rating_percent.competitiveness, res.data[2].feedback_Sectors_rating_percent.competitiveness, res.data[3].feedback_Sectors_rating_percent.competitiveness, res.data[4].feedback_Sectors_rating_percent.competitiveness, res.data[5].feedback_Sectors_rating_percent.competitiveness, res.data[6].feedback_Sectors_rating_percent.competitiveness, res.data[7].feedback_Sectors_rating_percent.competitiveness);
                this.CombinedChart.data.labels.push(res.data[0].sectorName, res.data[1].sectorName, res.data[2].sectorName, res.data[3].sectorName, res.data[4].sectorName, res.data[5].sectorName, res.data[6].sectorName, res.data[7].sectorName);
                this.CombinedChart.update();
            });
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._feedbackService.getFeedbackQuarterlyTargerList()).subscribe((res) => {
                if (res.status) {
                    console.error(res.data);
                    this.dataSource = new MatTableDataSource(res.data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                console.error(this.departmentList);
            });
            (yield this._complaint.getCompanyList()).subscribe((res) => {
                // console.log(res);
                if (res.status) {
                    this.companies = res.data;
                }
            });
        });
    }
    addEditDepartment(type, id = '') {
        const dialogRef = this.dialog.open(AddEditQuartelyFormComponent, {
            data: { type, id },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngAfterViewInit() {
        this.TRADEChart = new Chart(this.TRADECanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Trade",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.INSTITUTIONChart = new Chart(this.INSTITUTIONCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "INSTITUTION",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.EXPORTChart = new Chart(this.EXPORTCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "EXPORT",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.BCCLChart = new Chart(this.BCCLCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "BCCL",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.CCLChart = new Chart(this.CCLCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "CCL",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.ECLChart = new Chart(this.ECLCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "ECL",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.SECLChart = new Chart(this.SECLCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "SECL",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.Overall_RatingChart = new Chart(this.Overall_RatingCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Overall Rating",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.CombinedChart = new Chart(this.CombinedCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Product Quality",
                        backgroundColor: "pink",
                        borderColor: "red",
                        borderWidth: 1,
                        data: []
                    },
                    {
                        label: "Delivery",
                        backgroundColor: "lightblue",
                        borderColor: "blue",
                        borderWidth: 1,
                        data: []
                    },
                    {
                        label: "Service",
                        backgroundColor: "lightgreen",
                        borderColor: "green",
                        borderWidth: 1,
                        data: []
                    },
                    {
                        label: "Knowledge and Behavior of our staff",
                        backgroundColor: "yellow",
                        borderColor: "orange",
                        borderWidth: 1,
                        data: []
                    },
                    {
                        label: "Competitiveness",
                        backgroundColor: "orange",
                        borderColor: "orange",
                        borderWidth: 1,
                        data: []
                    },
                ]
            }
        });
        this.ProductQualityChart = new Chart(this.ProductQualityCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Product Quality",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.DeliveryChart = new Chart(this.DeliveryCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Delivery",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.ServicesChart = new Chart(this.ServicesCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Services",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.KnowledgebehaviourofStaffChart = new Chart(this.KnowledgebehaviourofStaffCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Knowledge & behaviour of Staff",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
        this.CompetitivenessChart = new Chart(this.CompetitivenessCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Competitiveness",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgba(247,96,69, 0.4)",
                        borderColor: "rgba(247,96,69,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(247,96,69,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(247,96,69,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    setCustID2(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectEl = e.target;
            const val = selectEl.options[selectEl.selectedIndex].getAttribute('data-id');
            // console.log(
            //   val
            // );
            this.custID2.nativeElement.value = val;
            // this.customerComplaintForm.patchValue({ customerID: val })
            let from = this.from2.nativeElement.value;
            let to = this.to2.nativeElement.value;
            let cname = this.cname2.nativeElement.value;
            let cid = val;
            let year = this.year2.nativeElement.value;
            (yield this._feedbackService.getChartDataQuarterlyPeforomaceChart(from, to, cid, cname, year)).subscribe((res) => {
                this.ProductQualityChart.data.datasets[0].data.push(res.data[0].sectror_and_Percent[0].percent, res.data[0].sectror_and_Percent[1].percent, res.data[0].sectror_and_Percent[2].percent, res.data[0].sectror_and_Percent[3].percent, res.data[0].sectror_and_Percent[4].percent, res.data[0].sectror_and_Percent[5].percent, res.data[0].sectror_and_Percent[6].percent);
                this.ProductQualityChart.data.labels.push('TRADE', 'INSTITUTION', 'EXPORT', 'BCCL', 'CCL', 'ECL', 'SECL');
                this.ProductQualityChart.update();
                this.DeliveryChart.data.datasets[0].data.push(res.data[1].sectror_and_Percent[0].percent, res.data[1].sectror_and_Percent[1].percent, res.data[1].sectror_and_Percent[2].percent, res.data[1].sectror_and_Percent[3].percent, res.data[1].sectror_and_Percent[4].percent, res.data[1].sectror_and_Percent[5].percent, res.data[1].sectror_and_Percent[6].percent);
                this.DeliveryChart.data.labels.push('TRADE', 'INSTITUTION', 'EXPORT', 'BCCL', 'CCL', 'ECL', 'SECL');
                this.DeliveryChart.update();
                this.ServicesChart.data.datasets[0].data.push(res.data[2].sectror_and_Percent[0].percent, res.data[2].sectror_and_Percent[1].percent, res.data[2].sectror_and_Percent[2].percent, res.data[2].sectror_and_Percent[3].percent, res.data[2].sectror_and_Percent[4].percent, res.data[2].sectror_and_Percent[5].percent, res.data[2].sectror_and_Percent[6].percent);
                this.ServicesChart.data.labels.push('TRADE', 'INSTITUTION', 'EXPORT', 'BCCL', 'CCL', 'ECL', 'SECL');
                this.ServicesChart.update();
                this.KnowledgebehaviourofStaffChart.data.datasets[0].data.push(res.data[3].sectror_and_Percent[0].percent, res.data[3].sectror_and_Percent[1].percent, res.data[3].sectror_and_Percent[2].percent, res.data[3].sectror_and_Percent[3].percent, res.data[3].sectror_and_Percent[4].percent, res.data[3].sectror_and_Percent[5].percent, res.data[3].sectror_and_Percent[6].percent);
                this.KnowledgebehaviourofStaffChart.data.labels.push('TRADE', 'INSTITUTION', 'EXPORT', 'BCCL', 'CCL', 'ECL', 'SECL');
                this.KnowledgebehaviourofStaffChart.update();
                this.CompetitivenessChart.data.datasets[0].data.push(res.data[4].sectror_and_Percent[0].percent, res.data[4].sectror_and_Percent[1].percent, res.data[4].sectror_and_Percent[2].percent, res.data[4].sectror_and_Percent[3].percent, res.data[4].sectror_and_Percent[4].percent, res.data[4].sectror_and_Percent[5].percent, res.data[4].sectror_and_Percent[6].percent);
                this.CompetitivenessChart.data.labels.push('TRADE', 'INSTITUTION', 'EXPORT', 'BCCL', 'CCL', 'ECL', 'SECL');
                this.CompetitivenessChart.update();
            });
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], FeedbackQuartelyTargetComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], FeedbackQuartelyTargetComponent.prototype, "sort", void 0);
__decorate([
    ViewChild('custId')
], FeedbackQuartelyTargetComponent.prototype, "custID", void 0);
__decorate([
    ViewChild('custId2')
], FeedbackQuartelyTargetComponent.prototype, "custID2", void 0);
__decorate([
    ViewChild('from')
], FeedbackQuartelyTargetComponent.prototype, "from", void 0);
__decorate([
    ViewChild('from2')
], FeedbackQuartelyTargetComponent.prototype, "from2", void 0);
__decorate([
    ViewChild('to')
], FeedbackQuartelyTargetComponent.prototype, "to", void 0);
__decorate([
    ViewChild('to2')
], FeedbackQuartelyTargetComponent.prototype, "to2", void 0);
__decorate([
    ViewChild('year')
], FeedbackQuartelyTargetComponent.prototype, "year", void 0);
__decorate([
    ViewChild('year2')
], FeedbackQuartelyTargetComponent.prototype, "year2", void 0);
__decorate([
    ViewChild('cName')
], FeedbackQuartelyTargetComponent.prototype, "cname", void 0);
__decorate([
    ViewChild('cName2')
], FeedbackQuartelyTargetComponent.prototype, "cname2", void 0);
__decorate([
    ViewChild("TRADECanvas")
], FeedbackQuartelyTargetComponent.prototype, "TRADECanvas", void 0);
__decorate([
    ViewChild("INSTITUTIONCanvas")
], FeedbackQuartelyTargetComponent.prototype, "INSTITUTIONCanvas", void 0);
__decorate([
    ViewChild("EXPORTCanvas")
], FeedbackQuartelyTargetComponent.prototype, "EXPORTCanvas", void 0);
__decorate([
    ViewChild("BCCLCanvas")
], FeedbackQuartelyTargetComponent.prototype, "BCCLCanvas", void 0);
__decorate([
    ViewChild("CCLCanvas")
], FeedbackQuartelyTargetComponent.prototype, "CCLCanvas", void 0);
__decorate([
    ViewChild("ECLCanvas")
], FeedbackQuartelyTargetComponent.prototype, "ECLCanvas", void 0);
__decorate([
    ViewChild("SECLCanvas")
], FeedbackQuartelyTargetComponent.prototype, "SECLCanvas", void 0);
__decorate([
    ViewChild("Overall_RatingCanvas")
], FeedbackQuartelyTargetComponent.prototype, "Overall_RatingCanvas", void 0);
__decorate([
    ViewChild("CombinedCanvas")
], FeedbackQuartelyTargetComponent.prototype, "CombinedCanvas", void 0);
__decorate([
    ViewChild("ProductQualityCanvas")
], FeedbackQuartelyTargetComponent.prototype, "ProductQualityCanvas", void 0);
__decorate([
    ViewChild("DeliveryCanvas")
], FeedbackQuartelyTargetComponent.prototype, "DeliveryCanvas", void 0);
__decorate([
    ViewChild("ServicesCanvas")
], FeedbackQuartelyTargetComponent.prototype, "ServicesCanvas", void 0);
__decorate([
    ViewChild("KnowledgebehaviourofStaffCanvas")
], FeedbackQuartelyTargetComponent.prototype, "KnowledgebehaviourofStaffCanvas", void 0);
__decorate([
    ViewChild("CompetitivenessCanvas")
], FeedbackQuartelyTargetComponent.prototype, "CompetitivenessCanvas", void 0);
FeedbackQuartelyTargetComponent = __decorate([
    Component({
        selector: 'app-feedback-quartely-target',
        templateUrl: './feedback-quartely-target.component.html',
        styleUrls: ['./feedback-quartely-target.component.scss']
    })
], FeedbackQuartelyTargetComponent);
export { FeedbackQuartelyTargetComponent };
//# sourceMappingURL=feedback-quartely-target.component.js.map