import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminComponent = class AdminComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.adminService.getAdmin()).subscribe((res) => {
                console.log(res);
            });
        });
    }
};
AdminComponent = __decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.scss']
    })
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map