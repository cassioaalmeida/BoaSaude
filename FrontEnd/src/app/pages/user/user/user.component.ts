import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CorreioService } from 'src/app/_core/Utils/correios.service';
import { CustomValidatorsService } from 'src/app/_core/Utils/custom-validators.service';
import { ValidateService } from 'src/app/_core/Utils/validate.service';
import { Profiles } from 'src/app/_enum/profiles.enum';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  maskPhone = ['(', /\d/, /\d/, ')', ' ' , /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  maskCPF = [/\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-' , /\d/, /\d/];
  userId: number;
  companyUrlId: number;

  formUser = new FormGroup({
    name: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200)]),
    email: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200), this.customValidators.email()]),
    phone: new FormControl(null, [Validators.required]),
    document: new FormControl(null, [Validators.required]),
    CEP: new FormControl(null, [Validators.required]),
    address: new FormControl({value:'', disabled: true}, [Validators.required]),
    city: new FormControl({value:'', disabled: true}, [Validators.required]),
    state: new FormControl({value:'', disabled: true}, [Validators.required]),
    complement: new FormControl(null),
    age: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    active: new FormControl(true),
    password: new FormControl(null, [Validators.required]),
    userLoginId: new FormControl(null),
    type: new FormControl(null, [Validators.required]),
  });

  get name(): string{
    return this.formUser.get('name').value;
  }
  set name(name: string){
    this.formUser.get('name').setValue(name);
  }
  get address(): string{
    return this.formUser.get('address').value;
  }
  set address(address: string){
    this.formUser.get('address').setValue(address);
  }
  get CEP(): string{
    return this.formUser.get('CEP').value;
  }
  set CEP(CEP: string){
    this.formUser.get('CEP').setValue(CEP);
  }
  get city(): string{
    return this.formUser.get('city').value;
  }
  set city(city: string){
    this.formUser.get('city').setValue(city);
  }
  get state(): string{
    return this.formUser.get('state').value;
  }
  set state(state: string){
    this.formUser.get('state').setValue(state);
  }

  get email(): string{
    return this.formUser.get('email').value;
  }
  set email(email: string){
    this.formUser.get('email').setValue(email);
  }

  get id(): number{
    return this.formUser.get('id').value;
  }
  set id(id: number){
    this.formUser.get('id').setValue(id);
  }

  get phone(): string{
    return this.formUser.get('phone').value;
  }
  set phone(phone: string){
    this.formUser.get('phone').setValue(phone);
  }
  get complement(): string{
    return this.formUser.get('complement').value;
  }
  set complement(complement: string){
    this.formUser.get('complement').setValue(complement);
  }
  get age(): number{
    return this.formUser.get('age').value;
  }
  set age(age: number){
    this.formUser.get('age').setValue(age);
  }
  get number(): number{
    return this.formUser.get('number').value;
  }
  set number(number: number){
    this.formUser.get('number').setValue(number);
  }
  get password(): string{
    return this.formUser.get('password').value;
  }
  set password(password: string){
    this.formUser.get('password').setValue(password);
  }
  get userLoginId(): number{
    return this.formUser.get('userLoginId').value;
  }
  set userLoginId(userLoginId: number){
    this.formUser.get('userLoginId').setValue(userLoginId);
  }
  get active(): boolean{
    return this.formUser.get('active').value;
  }
  set active(active: boolean){
    this.formUser.get('active').setValue(active);
  }
  get type(): string{
    return this.formUser.get('type').value;
  }
  set type(type: string){
    this.formUser.get('type').setValue(type);
  }
  get document(): string{
    return this.formUser.get('document').value;
  }
  set document(document: string){
    this.formUser.get('document').setValue(document);
  }


  loadUser(user: any): void{
    this.name = user.name;
    this.email = user.email;
    this.active = user.active;
    this.id = user.id;
    this.phone= user.phone
    this.CEP=   user.CEP
    this.address= user.address
    this.city=    user.city
    this.state=  user.state
    this.complement= user.complement
    this.age=        user.age
    this.number=     user.number
    this.password=   user.password
    this.userLoginId= user.userLoginId
    this.document = user.document
    console.log(user)
    this.type = Object.keys(Profiles).filter(k => k==user.type)[0]
  }

  constructor(
    private userService: UserService,
    private ativatedRoute: ActivatedRoute,
    private customValidators: CustomValidatorsService,
    private validateService: ValidateService,
    private correioService: CorreioService
  ) {}

  ngOnInit(): void {
    this.userId = parseInt(this.ativatedRoute.snapshot.paramMap.get('id'), 10);

    if(!!this.userId){
      this.userService.getUser(this.userId).subscribe((data: any) => {
        this.loadUser(data);
      });
    }
  }

  upsert(): void{
    if (this.validateService.validateForm(this.formUser)){
      this.userService.upsert(this.formUser.getRawValue());
    }
  }

  cancel(): void{
    this.userService.cancel();
  }

  searchCEPAdress() {
    return this.correioService.getCEP(this.CEP).subscribe(data => {
      console.log(data)
      this.address = data.logradouro === '' ? data.localidade : data.logradouro;
      this.city = data.localidade;
      this.state = data.uf;
    }, error => {
    });
  }
  
  getProfiles(): any {
    return Object.keys(Profiles).filter(k => !isNaN(Number(k)));
  }
}
