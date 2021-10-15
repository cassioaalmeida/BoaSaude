import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/shared/services/message.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { InsuranceService } from './insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  numberMaskPrice = createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: '',
    allowDecimal: true,
    decimalSymbol: '.'
  });

  form1= new FormGroup({
    id: new FormControl(1, [Validators.required]),
    type: new FormControl(1, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  form2= new FormGroup({
    id: new FormControl(2, [Validators.required]),
    type: new FormControl(2, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  form3= new FormGroup({
    id: new FormControl(3, [Validators.required]),
    type: new FormControl(3, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  

  constructor(
    private insuranceService:InsuranceService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.insuranceService.getInsurances().subscribe((data: any) => {
      console.log(data)
      this.loadData(data);
    });
  }

  upsert1() {
    this.insuranceService.saveInsurance(this.form1.getRawValue()).subscribe((data: any) => {
      this.messageService.success('success-ticket-created-logged')
    });
  }
  upsert2() {
    this.insuranceService.saveInsurance(this.form2.getRawValue()).subscribe((data: any) => {
      this.messageService.success('success-ticket-created-logged')
    });
  }
  upsert3() {
    this.insuranceService.saveInsurance(this.form3.getRawValue()).subscribe((data: any) => {
      this.messageService.success('success-ticket-created-logged')
    });
  }

  loadData (data) {
    this.form1id = data[0].id
    this.form1type = data[0].type
    this.form1value1 = data[0].value1
    this.form1value2 = data[0].value2
    this.form1value3 = data[0].value3
    this.form1value4 = data[0].value4
    this.form1value5 = data[0].value5
    this.form1value6 = data[0].value6
    this.form1value7 = data[0].value7
    this.form1value8 = data[0].value8
    this.form1value9 = data[0].value9
    this.form1value10 = data[0].value10

    
    this.form2id = data[1].id
    this.form2type = data[1].type
    this.form2value1 = data[1].value1
    this.form2value2 = data[1].value2
    this.form2value3 = data[1].value3
    this.form2value4 = data[1].value4
    this.form2value5 = data[1].value5
    this.form2value6 = data[1].value6
    this.form2value7 = data[1].value7
    this.form2value8 = data[1].value8
    this.form2value9 = data[1].value9
    this.form2value10 = data[1].value10

    
    this.form3id = data[2].id
    this.form3type = data[2].type
    this.form3value1 = data[2].value1
    this.form3value2 = data[2].value2
    this.form3value3 = data[2].value3
    this.form3value4 = data[2].value4
    this.form3value5 = data[2].value5
    this.form3value6 = data[2].value6
    this.form3value7 = data[2].value7
    this.form3value8 = data[2].value8
    this.form3value9 = data[2].value9
    this.form3value10 = data[2].value10
  }

  counter(i: number) {
    return new Array(i);
  }

  
  get form1type(): string{
    return this.form1.get('type').value;
  }
  set form1type(type: string){
    this.form1.get('type').setValue(type);
  }
  
  get form1id(): string{
    return this.form1.get('id').value;
  }
  set form1id(id: string){
    this.form1.get('id').setValue(id);
  }
  
  get form1value1(): string{
    return this.form1.get('value1').value;
  }
  set form1value1(value: string){
    this.form1.get('value1').setValue(value);
  }
  
  get form1value2(): string{
    return this.form1.get('value2').value;
  }
  set form1value2(value: string){
    this.form1.get('value2').setValue(value);
  }
  
  get form1value3(): string{
    return this.form1.get('value3').value;
  }
  set form1value3(value: string){
    this.form1.get('value3').setValue(value);
  }
  
  get form1value4(): string{
    return this.form1.get('value4').value;
  }
  set form1value4(value: string){
    this.form1.get('value4').setValue(value);
  }
  
  get form1value5(): string{
    return this.form1.get('value5').value;
  }
  set form1value5(value: string){
    this.form1.get('value5').setValue(value);
  }
  
  get form1value6(): string{
    return this.form1.get('value6').value;
  }
  set form1value6(value: string){
    this.form1.get('value6').setValue(value);
  }
  
  get form1value7(): string{
    return this.form1.get('value7').value;
  }
  set form1value7(value: string){
    this.form1.get('value7').setValue(value);
  }
  
  get form1value8(): string{
    return this.form1.get('value8').value;
  }
  set form1value8(value: string){
    this.form1.get('value8').setValue(value);
  }
  
  get form1value9(): string{
    return this.form1.get('value9').value;
  }
  set form1value9(value: string){
    this.form1.get('value9').setValue(value);
  }
  
  get form1value10(): string{
    return this.form1.get('value10').value;
  }
  set form1value10(value: string){
    this.form1.get('value10').setValue(value);
  }

  
  get form2type(): string{
    return this.form2.get('type').value;
  }
  set form2type(type: string){
    this.form2.get('type').setValue(type);
  }
  
  get form2id(): string{
    return this.form2.get('id').value;
  }
  set form2id(id: string){
    this.form2.get('id').setValue(id);
  }
  
  get form2value1(): string{
    return this.form2.get('value1').value;
  }
  set form2value1(value: string){
    this.form2.get('value1').setValue(value);
  }
  
  get form2value2(): string{
    return this.form2.get('value2').value;
  }
  set form2value2(value: string){
    this.form2.get('value2').setValue(value);
  }
  
  get form2value3(): string{
    return this.form2.get('value3').value;
  }
  set form2value3(value: string){
    this.form2.get('value3').setValue(value);
  }
  
  get form2value4(): string{
    return this.form2.get('value4').value;
  }
  set form2value4(value: string){
    this.form2.get('value4').setValue(value);
  }
  
  get form2value5(): string{
    return this.form2.get('value5').value;
  }
  set form2value5(value: string){
    this.form2.get('value5').setValue(value);
  }
  
  get form2value6(): string{
    return this.form2.get('value6').value;
  }
  set form2value6(value: string){
    this.form2.get('value6').setValue(value);
  }
  
  get form2value7(): string{
    return this.form2.get('value7').value;
  }
  set form2value7(value: string){
    this.form2.get('value7').setValue(value);
  }
  
  get form2value8(): string{
    return this.form2.get('value8').value;
  }
  set form2value8(value: string){
    this.form2.get('value8').setValue(value);
  }
  
  get form2value9(): string{
    return this.form2.get('value9').value;
  }
  set form2value9(value: string){
    this.form2.get('value9').setValue(value);
  }
  
  get form2value10(): string{
    return this.form2.get('value10').value;
  }
  set form2value10(value: string){
    this.form2.get('value10').setValue(value);
  }

  
  get form3type(): string{
    return this.form3.get('type').value;
  }
  set form3type(type: string){
    this.form3.get('type').setValue(type);
  }
  
  get form3id(): string{
    return this.form3.get('id').value;
  }
  set form3id(id: string){
    this.form3.get('id').setValue(id);
  }
  
  get form3value1(): string{
    return this.form3.get('value1').value;
  }
  set form3value1(value: string){
    this.form3.get('value1').setValue(value);
  }
  
  get form3value2(): string{
    return this.form3.get('value2').value;
  }
  set form3value2(value: string){
    this.form3.get('value2').setValue(value);
  }
  
  get form3value3(): string{
    return this.form3.get('value3').value;
  }
  set form3value3(value: string){
    this.form3.get('value3').setValue(value);
  }
  
  get form3value4(): string{
    return this.form3.get('value4').value;
  }
  set form3value4(value: string){
    this.form3.get('value4').setValue(value);
  }
  
  get form3value5(): string{
    return this.form3.get('value5').value;
  }
  set form3value5(value: string){
    this.form3.get('value5').setValue(value);
  }
  
  get form3value6(): string{
    return this.form3.get('value6').value;
  }
  set form3value6(value: string){
    this.form3.get('value6').setValue(value);
  }
  
  get form3value7(): string{
    return this.form3.get('value7').value;
  }
  set form3value7(value: string){
    this.form3.get('value7').setValue(value);
  }
  
  get form3value8(): string{
    return this.form3.get('value8').value;
  }
  set form3value8(value: string){
    this.form3.get('value8').setValue(value);
  }
  
  get form3value9(): string{
    return this.form3.get('value9').value;
  }
  set form3value9(value: string){
    this.form3.get('value9').setValue(value);
  }
  
  get form3value10(): string{
    return this.form3.get('value10').value;
  }
  set form3value10(value: string){
    this.form3.get('value10').setValue(value);
  }
}
