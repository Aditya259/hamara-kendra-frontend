import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import {IntegrationLogService } from 'src/app/services/integration-log.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'; 
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-admins',
  templateUrl: './interactionLog.component.html',
  styleUrls: ['./interactionLog.component.scss'],
})
export class interactionLogComponent implements OnInit {
  departmentForm: any;
  newCustomerFlag: boolean  = false;
  emailCommunicationFlag:boolean = false;
  callCommunicationFlag:boolean = false;
  smsCommunicationFlag:boolean = false;
  siteVisitCommunicationFlag:boolean = false;
  onlineMeetingInformationFlag:boolean = false;
  enabbleExisting:boolean = false;
  disableExisting:boolean = true;
  environment = environment;
  existFlag = false;
  toggle = true;
  userList:any;
  allCustomer:any;
 tableData:any;
 allCompanyList:any;
 allSectorList:any;
 allTypeList:any;
 allIndustryList:any;
 allSubCompany:any;
 allCountryList:any;
 allSubChannel:any;
 allPurposeList:any;
 allStateList:any;
 customerDetailsForm:any;
 selectedState:any;
 selectedSector:any;
 selectedSubsidaryCompany:any;
 selectedCompany: any;
 selectedExtModeOfContact:any;
 selectedExtPurposeOfEmail:any;
 selectedEmployee:any;
 selectedCountry:any;
 selectedSegment:any;
 toggleEditView:any;
 selectedIndustry:any;
 selectedParentCompany:any;
 selectedSubsidaryArea:any;
 selectedSubsidaryChannel:any;
 selectedCpdContactPersonCompany:any;
 selectedCpdContactPerson:any;
 selectedCpdDesignationn:any;
 selectedCpdEmail:any;
 selectedextraSubject:any;
 selectedEmaildatePicker:any;
 selectedextraContactPerson:any
selectedextraContactNo:any
selectedextraDescription:any
selectedextraPurposeOfEmail:any
selectedCustomerName :any
selectedCustomerCode:any
dateFlagClick:any;
custNameArray:any;
custCodeArray:any;
errorMsg:any;
flagTag:any;
newCustomerNameFlag:any;
allparentCompanyList:any;
allSubAreaList:any;
allSegmentList:any;

  displayedColumns = [
    'General',
    'Finance',
    'Dispatch',
    'Order',
    'Negotiation',
    'Price',
    'Product',
    'Complaint',
    'Visit',
    'Misc',
    'Information'
  ];

  segmentList = [
    'Segment1',
    'Segment2',
    'Segment3'
  ];

  industryList= [
    'IT',
    'Non-IT',
    'Other'
  ];

  parentCompanyList= [
    'parentCompany1',
    'parentCompany2',
    'Other'
  ];

  SubsidaryCompanyList=[
    'SubsidaryCompany1',
    'SubsidaryCompany2',
    'Other'
  ]

  SubsidaryAreaList=[
    'SubsidaryArea1',
    'SubsidaryArea2',
    'Other'
  ]

  SubsidaryChannelList= [
    'SubsidaryChannel1',
    'SubsidaryChannel2',
    'Other'
  ]

  //customerCodeName:CustomerCodeName[] = [];
  customerCodeName:any;
  customerDetails:CustomerDetails;
  changeDateInputBox:any;
  myControl = new FormControl();
  myControl1 = new FormControl();
  myControl2 = new FormControl();

  options: string[] = [];
  options1: string[] = [];
  //options2: CustomerCodeName[] = [];
  options2: string[] = [];
  
  filteredOptions: Observable<string[]>;
  filteredOptionsCode: Observable<string[]>;
  filteredOptionsCodeWithName: Observable<string[]>;

//  filteredOptionsCodeWithName: Observable<CustomerCodeName[]>;

  flagTagCustomerCode:any;
  errorMsgCustomerCode:any;
  constructor( private integrationLogService: IntegrationLogService, public router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    //this.newCustomerNameFlag = true;
    this.flagTag = false;
    this.flagTagCustomerCode =false;
    this.getOnlyCustName();
    this.getOnlyCustCode();
    this.getAllCustomerList();
    this.getCompanyList();
    this.getSectorList();
    this.getTypeList();
    this.getPurposeList();
    this.getOnlyCustCodeWithName();
    this.getAllIndustryList();
    this.getAllSubChannelList();
    this.getAllSubCompanyList();
    this.getAllCountryList();
    this.getAllStateList();
    this.getAllSubsidoryList();
    this.getAllSegmentList();
    this.getAllParentComanyList();
    this.dateFlagClick =false;
    this.changeDateInputBox = true;
    let param1 = this.route.snapshot.queryParams["id"];
    //alert(param1)
    if(param1=== null || param1 ==='' || param1 === undefined){
      //this.router.navigateByUrl('/newLog');

    }else{
      //alert("i am not null");
      this.getByid(param1);
      this.enabbleExisting = true;

    }
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
      this.filteredOptionsCodeWithName = this.myControl2.valueChanges.pipe(
        startWith(''),
        map(value1 => this._filterCodesCustCodeWithName(value1)),
      );
    }, 2000);
  }
  existingCust(e){
    if(e.checked){
      this.enabbleExisting = true;
      this.disableExisting =false;
    }else{
      this.allCustomer = null;
      this.enabbleExisting = false;
      this.disableExisting =true;
      this.reset();

    }      
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.custNameArray.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCodes(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();
    return this.custCodeArray.filter(option => option.toLowerCase().includes(filterValue1));
  }

  private _filterCodesCustCodeWithName(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();
    return this.customerCodeName.filter(option => option.toLowerCase().includes(filterValue1));
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

  getAllIndustryList(){
    this.integrationLogService.getAllIndustryList().subscribe((res: any) => {
      this.allIndustryList = res.data;
    });
  }

  getAllSubChannelList(){
    this.integrationLogService.getAllSubChannelList().subscribe((res: any) => {
      this.allSubChannel = res.data;
    });
  }

  getAllSubCompanyList(){
    this.integrationLogService.getAllSubCompanyList().subscribe((res: any) => {
      this.allSubCompany = res.data;
    });
  }

  getAllCountryList(){
    this.integrationLogService.getAllCountryList().subscribe((res: any) => {
      this.allCountryList = res.data;
    });
  }
  
  getPurposeList(){
    this.integrationLogService.getAllPurposeList().subscribe((res: any) => {
      this.allPurposeList = res.data;
    });
  }

  getAllStateList(){
    this.integrationLogService.getAllStateList().subscribe((res: any) => {
      this.allStateList = res.data;
    });
  }

  getAllSegmentList(){
    this.integrationLogService.getAllSegmentList().subscribe((res: any) => {
      this.allSegmentList = res.data;
    });
  }
  
  getAllParentComanyList(){
    this.integrationLogService.getAllParentComanyList().subscribe((res: any) => {
      this.allparentCompanyList = res.data;
    });
  }

  getAllSubsidoryList(){
    this.integrationLogService.getAllSubsidoryList().subscribe((res: any) => {
      this.allSubAreaList = res.data;
    });
  }

  getCompanyList(){
    this.integrationLogService.getAllCompanyList().subscribe((res: any) => {
      this.allCompanyList = res.data;
    });
  }
  changeDateInput(){
    this.dateFlagClick =true;
    this.changeDateInputBox = false;
  }

  checkForNewCustomerFlag(){
    this.toggle = !this.toggle;

    if(!this.toggle){
      this.existFlag = false;
      this.newCustomerFlag=true;
    }else{
      this.newCustomerFlag=false;
    }
    
  }

  checkForeEmailCommunication(){
    this.emailCommunicationFlag = true;
    this.callCommunicationFlag = false;
  }

  checkForeCallCommunication(){
    this.emailCommunicationFlag = false;
    this.callCommunicationFlag = true;
  }

  checkForSmsCommunication(){
    this.smsCommunicationFlag=true;
    this.emailCommunicationFlag = false;
    this.callCommunicationFlag = false;
  }

  checkForSiteVisitCommunicationFlag(){
    this.smsCommunicationFlag=false;
    this.emailCommunicationFlag = false;
    this.callCommunicationFlag = false;
    this.siteVisitCommunicationFlag = true;
  }

  checkForOnlineMeetingInformationFlag(){
    this.smsCommunicationFlag=false;
    this.emailCommunicationFlag = false;
    this.callCommunicationFlag = false;
    this.siteVisitCommunicationFlag = false;
    this.onlineMeetingInformationFlag = true;
  }

  callExistingUserList(data){
  
    if(data.length >= 3){
      this.existFlag = true;
      this.integrationLogService.existingCustomerCheck(data,this.existFlag).subscribe((res: any) => {
  
        if(res.message === 'not_found'){
          Swal.fire({
            title: 'Existing user not found?',
            text: 'Please click on the New Customer',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            //cancelButtonText: 'No'
          })
       }else{
        this.userList = res.data;
       }
      });
    }
  }

  searchAddress(event){
    //alert(event)
    this.selectedCustomerName =  event;
  }

  onClickSubmit(userForm) {
    let data = userForm;
    if(this.emailCommunicationFlag){
      data.extraEmail = 'email';
    }

    if(this.callCommunicationFlag){
      data.extraCall = 'call';
    }

    if(this.smsCommunicationFlag){
      data.extraSms = 'sms';
    }
    
    if(this.siteVisitCommunicationFlag){
      data.extraSiteVisitor = 'SiteVisitor';
    }

    if(this.onlineMeetingInformationFlag){
      data.extraOnlineMarketing = 'OnlineMarketing';
    }
       
    //alert(this.selectedCustomerName);
    data.existingCustomerName  = this.selectedCustomerName;
    data.company = userForm.selectedCompany;
    data.segment = userForm.selectedSegment;
    data.industry = userForm.selectedIndustry;
    data.parentCompany = userForm.selectedParentCompany;
    data.subsidaryCompany = userForm.selectedSubsidaryCompany;
    data.subsidaryArea = userForm.selectedSubsidaryArea;
    data.subsidaryChannel = userForm.selectedSubsidaryChannel;
    data.state= userForm.selectedState;
    data.sector = userForm.selectedSector;
    data.cpdcompany= userForm.selectedCpdContactPersonCompany;
    data.cpdcontactperson= userForm.selectedCpdContactPerson;
    data.cpddesignation= userForm.selectedCpdDesignationn;
    data.cpdemail= userForm.selectedCpdEmail;
    data.extraSubject= userForm.selectedextraSubject;
    data.extraContactPerson= userForm.selectedextraContactPerson;
    data.extraContactNo= userForm.selectedextraContactNo;
    data.extraDescription= userForm.selectedextraDescription;
    data.extraPurposeOfEmail= userForm.selectedextraPurposeOfEmail;
    data.country= userForm.selectedCountry;
    data.id = this.selectedCustomerCode;



    data.emaildatePicker = userForm.selectedEmaildatePicker.split('T')[0];

    
    this.integrationLogService.submitFormData(data).subscribe((res: any) => {

      if(res.message === 'Success'){
        Swal.fire({
          title: 'Data Saved ...',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
        this.router.navigateByUrl('/userList');
      }else{
        Swal.fire({
          title: 'Unable to Save ...',
          text: 'Please click on the Ok',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
        this.router.navigateByUrl('/interationLog');
      }
    });
 }

 getAllCustomerList(){
  this.integrationLogService.getAllCustomer().subscribe((res: any) => {
    this.allCustomer = res.data;
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

getOnlyCustCode(){
  this.integrationLogService.getOnlyCustCode().subscribe((res: any) => {
    this.custCodeArray = res.data;
    this.custCodeArray.forEach(element => {
      this.options1.push(element);
    });

  });
}

getOnlyCustCodeWithName(){
  this.integrationLogService.getOnlyCustCodeWithName().subscribe((res: any) => {
    //this.custCodeArray = res.data;
    this.customerCodeName = res.data;
    //alert(this.customerCodeName)
    this.customerCodeName.forEach(element => {
      const displayValue = element.customerCode + "-" + element.customerName;
      this.options2.push(element);
    });

  });
}

 callnewForm(){
  this.router.navigateByUrl('/department');
}

redirectToView(event){
  this.router.navigateByUrl(`/listOfUser?id=${event}`)
}

redirectToEdit(event){
  this.router.navigateByUrl(`/interationLog?id=${event}`)

}


getByCustomerName(event){
  const newVal = event;
  if(event!=undefined){
  this.selectedCustomerName = event;
  this.integrationLogService.getByCustomerName(newVal).subscribe((res: any) => {
    //alert(res.data);
    if(res.message === 'Success'){
      this.errorMsg = ''
      this.errorMsgCustomerCode = ''
      this.flagTag = false;
      this.flagTagCustomerCode=false;
      this.newCustomerNameFlag = 'no';
    this.allCustomer = res.data;
    this.selectedCustomerCode = this.allCustomer[0].customerCode;
    this.selectedCustomerName = this.allCustomer[0].customerName;
    //alert(this.selectedCustomerName)
  }else{
    this.flagTag = true;
    this.flagTagCustomerCode=false;
      this.errorMsg = 'No Customer Found'
      this.allCustomer = "";
      this.selectedCustomerCode="";
      this.selectedCompany="";
      this.newCustomerNameFlag = 'new';
      
  }

  });
}
}

getByid(event){
  if(event!=undefined){
    this.selectedCustomerCode = event;
  this.integrationLogService.getByidCustId(event).subscribe((res: any) => {
    //alert(res.data);
    this.allCustomer = res.data;
    if(res.message === 'Success'){
      this.disableExisting = true;
      this.errorMsgCustomerCode = ''
      this.errorMsg='';
      this.newCustomerNameFlag = 'no';
      this.flagTagCustomerCode = false;
    this.selectedSector = this.allCustomer[0].sector;
    this.selectedSubsidaryCompany = this.allCustomer[0].subsidaryCompany;
    this.selectedCompany = this.allCustomer[0].company;
    this.selectedExtModeOfContact = this.allCustomer[0].extModeOfContact;
    this.selectedExtPurposeOfEmail= this.allCustomer[0].extPurposeOfEmail;
    this.selectedEmployee = this.allCustomer[0].custName;
    this.selectedCountry = this.allCustomer[0].country;
    this.selectedSegment = this.allCustomer[0].segment;
    this.selectedIndustry = this.allCustomer[0].industry;
    this.selectedParentCompany = this.allCustomer[0].parentCompany;
    this.selectedSubsidaryChannel = this.allCustomer[0].subsidaryChannel;
    this.selectedSubsidaryArea = this.allCustomer[0].subsidaryArea;
    this.selectedCpdContactPersonCompany =  this.allCustomer[0].cpdCompany;
    this.selectedCpdContactPerson =  this.allCustomer[0].cpdContactPerson;
    this.selectedCpdDesignationn = this.allCustomer[0].cpdDesignation;
    this.selectedCpdEmail = this.allCustomer[0].cpdeEail;
    this.selectedState = this.allCustomer[0].state;
    if(this.allCustomer[0].extModeOfContact === 'email'){
      this.emailCommunicationFlag = true;
    }
    if(this.allCustomer[0].extModeOfContact === 'call'){
      this.callCommunicationFlag = true;
    }
    if(this.allCustomer[0].extModeOfContact === 'sms'){
      this.smsCommunicationFlag = true;
    }
    if(this.allCustomer[0].extModeOfContact === 'SiteVisitor'){
      this.siteVisitCommunicationFlag = true;
    }
    if(this.allCustomer[0].extModeOfContact === 'OnlineMarketing'){
      this.onlineMeetingInformationFlag = true;
    }
    this.selectedEmaildatePicker = this.allCustomer[0].extLogDate;
    this.selectedextraSubject = this.allCustomer[0].extSubject;
    this.selectedextraContactPerson= this.allCustomer[0].extContactPerson;
    this.selectedextraContactNo= this.allCustomer[0].extContactNumber;
    this.selectedextraDescription= this.allCustomer[0].extDescription;
    this.selectedextraPurposeOfEmail= this.allCustomer[0].extPurposeOfEmail;
    this.selectedCustomerName = this.allCustomer[0].customerName;
    this.selectedCustomerCode = this.allCustomer[0].customerCode;
  }else{
    this.errorMsgCustomerCode = 'Customer Code Not Found'
      this.flagTagCustomerCode = true;
      this.newCustomerNameFlag = 'new';
      this.allCustomer = null;
  }

  });
}
}

reset(){
  this.selectedSector = "";
  this.selectedSubsidaryCompany = "";
  this.selectedCompany = "";
  this.selectedExtModeOfContact = "";
  this.selectedExtPurposeOfEmail= "";
  this.selectedEmployee = "";
  this.selectedCountry = "";
  this.selectedSegment = "";
  this.selectedIndustry = "";
  this.selectedParentCompany = "";
  this.selectedSubsidaryChannel = "";
  this.selectedSubsidaryArea = "";
  this.selectedCpdContactPersonCompany =  "";
  this.selectedCpdContactPerson =  "";
  this.selectedCpdDesignationn = "";
  this.selectedCpdEmail = "";
    this.emailCommunicationFlag = false;
  
    this.callCommunicationFlag = false;
    this.smsCommunicationFlag = false;
    this.siteVisitCommunicationFlag = false;
    this.onlineMeetingInformationFlag = false;
  this.selectedEmaildatePicker = "";
  this.selectedextraSubject = "";
  this.selectedextraContactPerson= "";
  this.selectedextraContactNo= "";
  this.selectedextraDescription= "";
  this.selectedextraPurposeOfEmail= "";
  this.selectedCustomerName = "";
  this.selectedCustomerCode = "";
}

}



export interface CustomerDetails {
  id: string;
  company: string;
  segment: string;
  industry: string;
  parentCompany: string;
  subsidaryCompany: string;
  subsidaryArea: string;
  subsidaryChannel: string;
  customerName: string;
  existingFlag: boolean;
}

export interface CustomerCodeName {
  customerName :string;
  customerCode :string;
}
