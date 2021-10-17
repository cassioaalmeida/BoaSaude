import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    cardNumber: new FormControl({value:'', disabled:true}, [Validators.required]),
    id: new FormControl(null)
  });
  
  get document(): string{
    return this.form.get('document').value;
  }
  set document(document: string){
    this.form.get('document').setValue(document);
  }
  
  get type(): string{
    return this.form.get('type').value;
  }
  set type(type: string){
    this.form.get('type').setValue(type);
  }
  
  get status(): string{
    return this.form.get('status').value;
  }
  set status(status: string){
    this.form.get('status').setValue(status);
  }
  
  get hasDental(): string{
    return this.form.get('hasDental').value;
  }
  set hasDental(hasDental: string){
    this.form.get('hasDental').setValue(hasDental);
  }
  
  get cardNumber(): string{
    return this.form.get('cardNumber').value;
  }
  set cardNumber(cardNumber: string){
    this.form.get('cardNumber').setValue(cardNumber);
  }
  get id(): string{
    return this.form.get('id').value;
  }
  set id(id: string){
    this.form.get('id').setValue(id);
  }

  constructor(
    private userInsuranceService: UserInsuranceService,
    private userService: UserService,
    private insuranceService: InsuranceService
  ) { }

  ngOnInit(): void {
    this.insuranceService.getInsurances().subscribe((data: any) => {
      this.insurances = data
    });
  }

  search() {
    this.showDIv = false
    this.userService.getUserByDocument(this.document).subscribe((user: any) => {
      if (!!user){
        this.showDIv = true
        this.userid = user.id
        this.userInsuranceService.getUserInsurance(user.id).subscribe((data: any) => {
          this.loadData(data);
        });
      }
    });
  }

  loadData(data) {

  }
  cancel() {

  }
  upsert() {
    let obj = {
      userId: this.userid,
      cardNumber: this.cardNumber,
      hasDental: this.hasDental,
      monthlyCost: this.monthlyCost,
      status: this.status,
      insuranceId: this.insurances.find((element: any) => element.type === this.type)[0].id,
      id: this.id
    }
    this.userInsuranceService.save(obj).subscribe((data: any) => {
      this.loadData(data);
    });
  }

  getInsurance(): any {
    return Object.keys(InsuranceType).filter(k => !isNaN(Number(k)));
  }
  getInsuranceStatus(): any {
    return Object.keys(InsuranceStatus).filter(k => !isNaN(Number(k)));
  }
}
