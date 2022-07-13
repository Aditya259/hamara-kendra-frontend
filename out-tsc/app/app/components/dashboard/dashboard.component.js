import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chart } from 'chart.js';
let DashboardComponent = class DashboardComponent {
    constructor(gVar, _http) {
        this.gVar = gVar;
        this._http = _http;
        this.env = environment;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!sessionStorage.getItem('reloadCounter')) {
                sessionStorage.setItem('reloadCounter', 'no reload');
                window.location.reload();
            }
            else {
                sessionStorage.removeItem('reloadCounter');
            }
            this._http.get(`${environment.apiUrl}/Dashboard_Data`).subscribe((res) => {
                this.dashData = res;
                this.TRADEChart.data.labels.push('total_complaints', 'total_admins', 'total_feedback', 'total_departments');
                this.TRADEChart.data.datasets.push(res.total_complaints, res.total_admins, res.total_feedback, res.total_departments);
                this.TRADEChart.update();
            });
        });
    }
    ngAfterViewInit() {
        this.TRADEChart = new Chart(this.TRADECanvas.nativeElement, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        fill: false,
                        // lineTension: 0.1,
                        backgroundColor: "rgb(152,16,16)",
                        borderColor: "rgb(152,16,16)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgb(152,16,16)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(152,16,16)",
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
        this._http.get(`${environment.apiUrl}/Dashboard_Data`).subscribe((res) => {
            this.dashData = res;
            this.TRADEChart.data.labels.push('total_complaints', 'total_admins', 'total_feedback', 'total_departments');
            this.TRADEChart.data.datasets[0].data.push(this.dashData.total_complaints, this.dashData.total_admins, this.dashData.total_feedback, this.dashData.total_departments);
            this.TRADEChart.update();
        });
    }
};
__decorate([
    ViewChild("TRADECanvas")
], DashboardComponent.prototype, "TRADECanvas", void 0);
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map