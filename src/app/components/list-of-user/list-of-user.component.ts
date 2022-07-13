import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { IntegrationLogService } from 'src/app/services/integration-log.service';

@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrls: ['./list-of-user.component.scss']
})
export class ListOfUserComponent implements OnInit {

  id : any;
  departmentForm: any;
  newCustomerFlag: boolean  = false;
  emailCommunicationFlag:boolean = false;
  callCommunicationFlag:boolean = false;
  smsCommunicationFlag:boolean = false;
  siteVisitCommunicationFlag:boolean = false;
  onlineMeetingInformationFlag:boolean = false;
  existFlag = false;
  toggle = true;
  userList:any;
  allCustomer:any;
 tableData:any;
 allCompanyList:any;
 allSectorList:any;
 allTypeList:any;
 allPurposeList:any;
 customerDetailsForm:any;
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
 selectedCountrt:any;
 selectedState:any;
 selectedEnquiryId:any;
 selectedextraSubject:any;
 selectedEmaildatePicker:any;
 selectedextraContactPerson:any
    selectedextraContactNo:any
    selectedextraDescription:any
    selectedextraPurposeOfEmail:any
    selectedCustomerCode:any;
    dateFlagClick:any;
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
  changeDateInputBox:any;
  selectedCustomerName:any;
  constructor(public router: Router,private route: ActivatedRoute,private integrationLogService: IntegrationLogService,) { }

  ngOnInit() {
    let param1 = this.route.snapshot.queryParams["id"];
    this.listOfUser(param1);
  }

  redirectToEdit(event){
    this.router.navigateByUrl(`/interationLog?id=${event}`)

  }

  listOfUser(event){
    //alert(event);
    this.integrationLogService.getByid(event).subscribe((res: any) => {
      //alert(res.data);
      this.allCustomer = res.data;
      this.selectedEnquiryId = this.allCustomer[0].enquiryId;
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
      this.selectedCountrt = this.allCustomer[0].country;
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
      this.selectedEmaildatePicker = this.allCustomer[0].dateToDisplay;
      this.selectedextraSubject = this.allCustomer[0].extSubject;
      this.selectedextraContactPerson= this.allCustomer[0].extContactPerson;
      this.selectedextraContactNo= this.allCustomer[0].extContactNumber;
      this.selectedextraDescription= this.allCustomer[0].extDescription;
      this.selectedextraPurposeOfEmail= this.allCustomer[0].extPurposeOfEmail;
      this.selectedCustomerName = this.allCustomer[0].customerName;
      this.selectedCustomerCode = this.allCustomer[0].customerCode;
      //alert(this.selectedCustomerName)
    });
  }


}
