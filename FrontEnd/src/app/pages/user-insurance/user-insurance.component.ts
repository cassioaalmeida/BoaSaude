import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/_core/Utils/utils.service';
import { InsuranceStatus } from 'src/app/_enum/insurance-status.enum';
import { InsuranceType } from 'src/app/_enum/InsuranceType';
import { InsuranceService } from '../insurance/insurance.service';
import { UserService } from '../user/shared/user.service';
import { UserInsuranceService } from './user-insurance.service';

@Component({
  selector: 'app-user-insurance',
  templateUrl: './user-insurance.component.html',
  styleUrls: ['./user-insurance.component.scss']
})
export class UserInsuranceComponent implements OnInit {

  showDIv = false
  insurances;
  userid
  monthlyCost

  maskCPF = [/\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-' , /\d/, /\d/];

  form = new FormGroup({
    document: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    hasDental: new FormControl(null, [Validators.required]),
    cardNumber: new FormControl({value:'', disabled:true}),
    id: new FormControl(null)
  });
  
  get document(): string{
    return this.form.get('document').value;
  }
  set document(document: string){
    this.form.get('document').setValue(document);
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
  get id(): any{
    return this.form.get('id').value;
  }
  set id(id: any){
    this.form.get('id').setValue(id);
  }

  constructor(
    private userInsuranceService: UserInsuranceService,
    private userService: UserService,
    private insuranceService: InsuranceService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.insuranceService.getInsurances().subscribe((data: any) => {
      this.insurances = data
    });
  }

  search() {
    this.showDIv = false
    this.userService.getUserByDocument(this.document).subscribe((user: any) => {
      this.resetForm()
      if (!!user){
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
    this.id = null
    this.cardNumber = ''
    this.type = 0
    this.status = 0
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
      this.id = data.id
      this.changeType()
    } else {
    }
  }
  cancel() {
    this.utilsService.reloadComponent()
  }

  upsert() {
    let obj = {
      userId: this.userid,
      cardNumber: this.cardNumber,
      hasDental: this.hasDental,
      monthlyCost: this.monthlyCost,
      status: InsuranceStatus[this.status],
      insuranceId: InsuranceType[this.type],
      id: this.id
    }
    this.userInsuranceService.save(obj).subscribe((data: any) => {
      this.loadData(data);
    });
  }

  changeType() {
    const insuranceId = InsuranceType[this.type]
    this.userInsuranceService.calculate(this.userid, insuranceId, this.hasDental ? 1:0).subscribe((data: any) => {
      this.monthlyCost = data.monthlyCost
    });
  }

  getInsurance(): any {
    return Object.keys(InsuranceType)
  }
  getInsuranceStatus(): any {
    return Object.keys(InsuranceStatus)
  }
}
