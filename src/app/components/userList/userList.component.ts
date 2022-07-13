import {IntegrationLogService } from 'src/app/services/integration-log.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { MatTableDataSource, PageEvent,MatSort } from '@angular/material';


@Component({
  selector: 'app-department',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.scss'],
})
export class UserListComponent implements OnInit {
 departmentForm: any;
 tableData:any;
 allCompanyList:any;
 allSectorList:any;
 allTypeList:any;
 allPurposeList:any;
 allCustomer:any;
 selectedCustomerName :any
 selectedCustomerCode:any
 customerDetailsForm:any;
 selectedSector:any;
 selectedSubsidaryCompany:any;
 selectedCompany: any;
 selectedExtModeOfContact:any;
 selectedExtPurposeOfEmail:any;
 selectedEmployee:any;
 selectedState:any;
 selectedCountry:any;
 toggleEditView:any;
 filteredCustomer : Observable<string[]>;
 myControl = new FormControl();
 myControl1 = new FormControl();
 myControl2 = new FormControl();
 toggleWithTableData:any;
  dataFormSelected:any;
  fromDateFilter:any;
  toDateFilter:any;
 custNameArray:any;
 allStateList:any;
 custCodeArray:any;
 custEnqId:any;
 options: string[] = [];
 options1: string[] = [];
 options2: string[] = [];

 filteredOptions: Observable<string[]>;
 filteredOptionsCode: Observable<string[]>;
 filteredOptionsEnquiryId: Observable<string[]>;


 control = new FormControl();
 fileName= 'UserList.xlsx';
 SubsidaryCompanyList=[
  'SubsidaryCompany1',
  'SubsidaryCompany2',
  'Other'
]

modeOfContact=[
  'email',
'call',
'sms',
'SiteVisitor',
'OnlineMarketing'
]

countryList=[
  'IN',
  'US'
]
pgIndex= 2;
periodicElement: PeriodicElement[];
displayedColumns: string[] = ['Customer Code', 'Customer Name	', 'Sector', 'Subsidary', 'Company', 'Type', 'Purpose', 'Employee', 'Date', 'Action'];
@ViewChild(MatSort, {static: false}) sort: MatSort;
tableErrorMsg:any;
selectedEnquiryId:any;
//dataSource: MatTableDataSource<PeriodicElement>;
allSubCompany:any;
allEmpList:any;
allCountryList:any;
constructor(private integrationLogService: IntegrationLogService, public router: Router,
    private formBuilder: FormBuilder,private _router: Router) {}

  ngOnInit() {
    this.getOnlyCustName();
    this.getOnlyCustCode();
    this.getOnlyEnquiryId();
    this.getAllEmployeeList();
    this.getAllCountryList();
    this.getAllSubCompanyList();
    this.getAllStateList();
    setTimeout(() => {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    }, 1000);

    setTimeout(() => {
      this.filteredOptionsCode = this.myControl1.valueChanges.pipe(
        startWith(''),
        map(value1 => this._filterCodes(value1)),
      );
    }, 2000);

    setTimeout(() => {
      this.filteredOptionsEnquiryId = this.myControl2.valueChanges.pipe(
        startWith(''),
        map(value1 => this._filterEnqId(value1)),
      );
    }, 2000);

    this.customerDetailsForm = false;
    this.toggleEditView = false;
    this.getAllListInTable(0,3);
    this.getCompanyList();
    this.getSectorList();
    this.getTypeList();
    this.getPurposeList();
    this.getAllCustomerList();
    
    this.departmentForm = this.formBuilder.group({
      customerName: [''],
      sector: [''],
      subsidary: [''],
      company: [''],
      customerCode: [''],
      type: [''],
      purpose: [''],
      employee: [''],
      country: [''],
      fromDate: [''],
      toDate: ['']
    });

    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.custNameArray.filter(option => option.toLowerCase().includes(filterValue));
  }
  getAllStateList(){
    this.integrationLogService.getAllStateList().subscribe((res: any) => {
      this.allStateList = res.data;
    });
  }

  getOnlyCustName(){
    this.integrationLogService.getOnlyCustName().subscribe((res: any) => {
      this.custNameArray = res.data;
      this.custNameArray.forEach(element => {
        this.options.push(element);
      });
  
    });
  }

  
  getOnlyEnquiryId(){
    this.integrationLogService.getOnlyEnquiryId().subscribe((res: any) => {
      this.custEnqId = res.data;
      this.custEnqId.forEach(element => {
        this.options2.push(element);
      });
  
    });
  }
  
  getOnlyCustCode(){
    this.integrationLogService.getOnlyCustCode().subscribe((res: any) => {
      this.custCodeArray = res.data;
      this.custCodeArray.forEach(element => {
        this.options1.push(element);
      });
  
    });
  }
  private _filterCodes(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();
    return this.custCodeArray.filter(option => option.toLowerCase().includes(filterValue1));
  }

  private _filterEnqId(value2: string): string[] {
    const filterValue2 = value2.toLowerCase();
    return this.custEnqId.filter(option => option.toLowerCase().includes(filterValue2));
  }
  

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  isShowDiv = true;  
  onShowFilter(){
    this.isShowDiv = !this.isShowDiv;  
  }

  exportexcel(){
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    ws['!cols'][10] = { hidden: true };

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }

  redirectToView(event){
    this.router.navigateByUrl(`/listOfUser?id=${event}`)
  }
  
  redirectToEdit(event){
    this.router.navigateByUrl(`/interationLog?id=${event}`)
  
  }


  getByEnquiryId(event){
    const newVal = event;
    this.selectedEnquiryId = newVal;
    this.integrationLogService.getByEnquiryId(newVal).subscribe((res: any) => {
      //alert(res.data);
      this.allCustomer = res.data;
      this.selectedCustomerCode = this.allCustomer[0].customerCode;
      this.selectedCustomerName = this.allCustomer[0].customerName;
      this.selectedEnquiryId = this.allCustomer[0].enquiryId;
      this.selectedSector = this.allCustomer[0].sector;
      this.selectedSubsidaryCompany = this.allCustomer[0].subsidaryCompany;
      this.selectedCompany = this.allCustomer[0].company;
      this.selectedExtModeOfContact = this.allCustomer[0].extModeOfContact;
      this.selectedExtPurposeOfEmail= this.allCustomer[0].extPurposeOfEmail;
      this.selectedEmployee = this.allCustomer[0].employeeName;
      this.selectedCountry = this.allCustomer[0].country;
      this.selectedCustomerName = this.allCustomer[0].customerName;
      this.selectedCustomerCode = this.allCustomer[0].customerCode;
      this.toDateFilter = this.allCustomer[0].extLogDate.split('T')[0];
      this.fromDateFilter = this.allCustomer[0].extLogDate.split('T')[0];
      this.selectedEnquiryId = this.allCustomer[0].enquiryId;
      this.selectedState = this.allCustomer[0].state;

      
    });
  }
  
  getByCustomerName(event){
    const newVal = event;
    this.integrationLogService.getByCustomerName(newVal).subscribe((res: any) => {
      //alert(res.data);
      this.allCustomer = res.data;
      this.selectedCustomerCode = this.allCustomer[0].customerCode;
      this.selectedCustomerName = this.allCustomer[0].customerName;
      this.selectedEnquiryId = this.allCustomer[0].enquiryId;
    });
  }

  removeAssignments(event){
    //alert(event)
    if(event ==='enqId'){
      this.selectedEnquiryId = null;
    }
    if(event ==='custname'){
      this.selectedCustomerName = null;
    }
    if(event ==='custCode'){
     this.selectedCustomerCode =null;
    }
    if(event ==='subCompany'){
      this.selectedSubsidaryCompany =null;
     }
     if(event ==='company'){
      this.selectedCompany =null;
     }
     if(event ==='type'){
      this.selectedExtModeOfContact =null;
     }
     if(event ==='purpose'){
      this.selectedExtPurposeOfEmail =null;
     }
     if(event ==='employee'){
      this.selectedEmployee =null;
     }
     if(event ==='country'){
      this.selectedCountry =null;
     }
     if(event ==='state'){
      this.selectedState =null;
     }
     if(event ==='fromDateFilter'){
      this.fromDateFilter =null;
     }
     if(event ==='toDateFilter'){
      this.toDateFilter =null;
     }
  }

  getByid(event){
    if(event!=undefined){
    this.integrationLogService.getByidCustId(event).subscribe((res: any) => {
      //alert(res.data);
      this.allCustomer = res.data;
      this.selectedSector = this.allCustomer[0].sector;
      this.selectedSubsidaryCompany = this.allCustomer[0].subsidaryCompany;
      this.selectedCompany = this.allCustomer[0].company;
      this.selectedExtModeOfContact = this.allCustomer[0].extModeOfContact;
      this.selectedExtPurposeOfEmail= this.allCustomer[0].extPurposeOfEmail;
      this.selectedEmployee = this.allCustomer[0].cpdContactPerson;
      this.selectedCountry = this.allCustomer[0].country;
      this.selectedCustomerName = this.allCustomer[0].customerName;
      this.selectedCustomerCode = this.allCustomer[0].customerCode;
      this.toDateFilter = this.allCustomer[0].extLogDate.split('T')[0];
      this.fromDateFilter = this.allCustomer[0].extLogDate.split('T')[0];
      this.selectedEnquiryId = this.allCustomer[0].enquiryId;
      this.selectedState = this.allCustomer[0].state;
    });
  }
  }

  reset(){
    this.allCustomer = null;
    this.selectedSector = null;
    this.selectedSubsidaryCompany = null;
    this.selectedCompany = null;
    this.selectedExtModeOfContact = null;
    this.selectedExtPurposeOfEmail= null;
    this.selectedEmployee = null;
    this.selectedCountry= null;
    this.selectedCustomerName = null;
    this.selectedCustomerCode = null;
    this.selectedEnquiryId = null;
    this.fromDateFilter = null;
    this.toDateFilter= null;
  }


  getNext(event: PageEvent) {
    this.getAllListInTable(event.pageIndex,event.pageSize);
  }
  
  getAllListInTable(pageIndex:any,pageSize:any){
    this.integrationLogService.getAllListInTable(pageIndex,pageSize).subscribe((res: any) => {
      //this.tableData = res.data;
      if(res.message === 'Not_Found'){
        this.tableErrorMsg = "Interaction log Data Not found";
        this.toggleWithTableData = true;
        this.tableData = null;
      }else{
        this.tableData = res.data;
        this.tableErrorMsg = "";
        this.toggleWithTableData=false;
      }
      //this.dataSource = new MatTableDataSource(res.data);
      //alert(this.dataSource);
    });
  }

  addEditInterationLog(){
    this._router.navigateByUrl(`/interationLog`)
  }

  listOfUser(event){
    this._router.navigateByUrl(`/listOfUser?id=${event}`)
  }


openDialog(){
  this.toggleEditView = true;  
}

getAllSubCompanyList(){
  this.integrationLogService.getAllSubCompanyList().subscribe((res: any) => {
    this.allSubCompany = res.data;
  });
}

getAllEmployeeList(){
  this.integrationLogService.getAllEmployeeList().subscribe((res: any) => {
    this.allEmpList = res.data;
  });
}

getAllCountryList(){
  this.integrationLogService.getAllCountryList().subscribe((res: any) => {
    this.allCountryList = res.data;
  });
}

 

  onClickSubmit(userForm) {
    let data = userForm;
    data.enquiryId = this.selectedEnquiryId;
    data.sector = userForm.selectedSector;
    data.customerCode = this.selectedCustomerCode;
    data.customerName =  this.selectedCustomerName
    data.subsidary = userForm.selectedSubsidaryCompany;
    data.company = userForm.selectedCompany;
    data.customerCode = userForm.customerCode;
    data.type = userForm.selectedExtModeOfContact;
    data.purpose = userForm.selectedExtPurposeOfEmail;
    data.employee  = userForm.selectedEmployee;
    data.country = userForm.selectedCountry;
    data.state = userForm.selectedState;
    data.fromDate = userForm.fromDateFilter.split('T')[0];
    if(data.fromDate!=null && data.fromDate!=''){
      this.fromDateFilter = data.fromDate;
    }
    data.toDate = userForm.toDateFilter.split('T')[0];
    if(data.toDate !=null && data.toDate!=''){
      this.toDateFilter = data.toDate;
    }
    if(data.country === null){
      data.country = '';
    }
    this.dataFormSelected = data;
    this.integrationLogService.getFilterdData(data).subscribe((res: any) => {
      if(res.message === 'Not_Found'){
        this.tableErrorMsg = "Interaction log Data Not found";
        this.toggleWithTableData = true;
        this.tableData = null;
      }else{
        this.tableData = res.data;
        this.tableErrorMsg = "";
        this.toggleWithTableData=false;
      }
    });
  }

  getCompanyList(){
    this.integrationLogService.getAllCompanyList().subscribe((res: any) => {
      this.allCompanyList = res.data;
    });
  }

  getSectorList(){
    this.integrationLogService.getAllSectorList().subscribe((res: any) => {
      this.allSectorList = res.data;
    });
  }

  getTypeList(){
    this.integrationLogService.getAllTypeList().subscribe((res: any) => {
      this.allTypeList = res.data;
    });
  }
  
  getPurposeList(){
    this.integrationLogService.getAllPurposeList().subscribe((res: any) => {
      this.allPurposeList = res.data;
    });
  }

  getAllCustomerList(){
    this.integrationLogService.getAllCustomer().subscribe((res: any) => {
      this.allCustomer = res.data;
    });
  }

  callnewForm(){
    this.router.navigateByUrl('/admins');
  }
}

export interface PeriodicElement {
  id: string;
  customerName: string;
  sector: string;
  subsidaryCompany: string;
  company:string;
  extModeOfContact:string;
  extPurposeOfEmail:string;
  cpdContactPerson:string;
  dateToDisplay:string;
}