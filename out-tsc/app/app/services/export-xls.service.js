import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
let ExportXlsService = class ExportXlsService {
    constructor() {
        this.fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        this.fileExtension = '.xlsx';
    }
    exportExcel(jsonData, fileName) {
        const ws = XLSX.utils.json_to_sheet(jsonData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        this.saveExcelFile(excelBuffer, fileName);
    }
    saveExcelFile(buffer, fileName) {
        const data = new Blob([buffer], { type: this.fileType });
        FileSaver.saveAs(data, fileName + this.fileExtension);
    }
};
ExportXlsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ExportXlsService);
export { ExportXlsService };
//# sourceMappingURL=export-xls.service.js.map