import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/shared/services/message.service';
import { UtilsService } from 'src/app/_core/Utils/utils.service';
import { ValidateService } from 'src/app/_core/Utils/validate.service';
import { InsuranceStatus } from 'src/app/_enum/insurance-status.enum';
import { InsuranceType } from 'src/app/_enum/InsuranceType';
import { InsuranceService } from '../insurance/insurance.service';
import { SearchPartnerService } from '../search-partner/search-partner.service';
import { UserInsuranceService } from '../user-insurance/user-insurance.service';
import { UserService } from '../user/shared/user.service';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  showDIv = false
  insurances;
  userid
  monthlyCost
  partnerData;
  user;
  partners;
  
  maskCPF = [/\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-' , /\d/, /\d/];
  form = new FormGroup({
    userDocument: new FormControl(null, [Validators.required]),
    partnerId: new FormControl(null, [Validators.required]),
    userName: new FormControl(null),
    userAge: new FormControl(null),
    userId: new FormControl(null),
    type: new FormControl({value:'', disabled:true}, [Validators.required]),
    status: new FormControl({value:'', disabled:true}, [Validators.required]),
    hasDental: new FormControl({value:'', disabled:true}, [Validators.required]),
    cardNumber: new FormControl({value:'', disabled:true}),
    userIsuranceId: new FormControl(null)
  });
  
  get partnerId(): string{
    return this.form.get('partnerId').value;
  }
  set partnerId(partnerId: string){
    this.form.get('partnerId').setValue(partnerId);
  }
  get userDocument(): string{
    return this.form.get('userDocument').value;
  }
  set userDocument(userDocument: string){
    this.form.get('userDocument').setValue(userDocument);
  }
  get userName(): string{
    return this.form.get('userName').value;
  }
  set userName(userName: string){
    this.form.get('userName').setValue(userName);
  }
  get userAge(): string{
    return this.form.get('userAge').value;
  }
  set userAge(userAge: string){
    this.form.get('userAge').setValue(userAge);
  }
  get type(): any{
    return this.form.get('type').value;
  }
  set type(type: any){
    this.form.get('type').setValue(type);
  }
  
  get status(): any{
    return this.form.get('status').value;
  }
  set status(status: any){
    this.form.get('status').setValue(status);
  }
  
  get hasDental(): any{
    return this.form.get('hasDental').value;
  }
  set hasDental(hasDental: any){
    this.form.get('hasDental').setValue(hasDental);
  }
  
  get cardNumber(): any{
    return this.form.get('cardNumber').value;
  }
  set cardNumber(cardNumber: any){
    this.form.get('cardNumber').setValue(cardNumber);
  }
  get userIsuranceId(): any{
    return this.form.get('userIsuranceId').value;
  }
  set userIsuranceId(userIsuranceId: any){
    this.form.get('userIsuranceId').setValue(userIsuranceId);
  }
  
  constructor(
    private userInsuranceService: UserInsuranceService,
    private userService: UserService,
    private insuranceService: InsuranceService,
    private utilsService: UtilsService,
    private attendanceService: AttendanceService,
    private searchPartnerService: SearchPartnerService,
    private validateService: ValidateService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.searchPartnerService.getAllPartners().subscribe((data: any) => {
      this.partners = data
    });
  }


  search() {
    this.showDIv = false
    this.userService.getUserByDocument(this.userDocument).subscribe((user: any) => {
      this.resetForm()
      if (!!user){
        this.user = user
        this.showDIv = true
        this.userid = user.id
        this.userInsuranceService.getUserInsurance(user.id).subscribe((data: any) => {
          this.loadData(data[0]);
        });
      }
    });
  }
  resetForm() {
    this.monthlyCost = 0
    this.hasDental = 0
    this.userIsuranceId = null
    this.cardNumber = ''
    this.type = 0
    this.status = 0
    this.userName = ''
    this.userAge = ''
    this.userid = 0
  }
  loadData(data) {
    this.resetForm()
    if (!!data){
      switch (Number(data.insurance?.type)) {
        case 1:
          this.type = 'Nursery'
          break;
        case 2:
          this.type = 'Apartment'
          break;
        case 3:
          this.type = 'VIP'
          break;
        default:
          break;
      }
      this.cardNumber = data.cardNumber
      switch (Number(data.status)) {
        case 1:
          this.status = 'Active'
          break;
        case 2:
          this.status = 'Suspended'
          break;
        case 3:
          this.status = 'Inactive'
          break;
        default:
          break;
      }
      this.monthlyCost = data.monthlyCost
      this.hasDental = data.hasDental
      this.userIsuranceId = data.id
      this.userName = this.user?.name
      this.userAge = this.user?.age
      this.userid = this.user?.id
    } else {
    }
  }
  cancel() {
    this.utilsService.reloadComponent()
  }
  upsert() {
    if (this.validateService.validateForm(this.form)){
      const partner = this.partners.find(x=> x.id === this.partnerId)
      let obj = {
        userId: this.userid,
        userName: this.userName,
        userDocument: this.userDocument,
        userAge: this.userAge,
        userInsuranceCardNumber: this.cardNumber,
        userIsuranceId: this.userIsuranceId,
        partnerId: partner.id,
        partnerName: partner.name,
        partnerlongitude: partner.longitude,
        partnerLatitude: partner.latidute,
        partnerType: partner.type
      }
      console.log(obj)
      this.attendanceService.save(obj).subscribe((data: any) => {
        this.messageService.success('message.success')
        this.resetForm()
      });
    }
  }
  getInsurance(): any {
    return Object.keys(InsuranceType)
  }
  getInsuranceStatus(): any {
    return Object.keys(InsuranceStatus)
  }
}
