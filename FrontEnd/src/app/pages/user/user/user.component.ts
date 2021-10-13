import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CorreioService } from 'src/app/_core/Utils/correios.service';
import { CustomValidatorsService } from 'src/app/_core/Utils/custom-validators.service';
import { ValidateService } from 'src/app/_core/Utils/validate.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  maskPhone = ['(', /\d/, /\d/, ')', ' ' , /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  userId: number;
  companyUrlId: number;

  formUser = new FormGroup({
    name: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200)]),
    email: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200), this.customValidators.email()]),
    phone: new FormControl(null, [Validators.required]),
    cep: new FormControl(null, [Validators.required]),
    street: new FormControl({value:'', disabled: true}, [Validators.required]),
    city: new FormControl({value:'', disabled: true}, [Validators.required]),
    state: new FormControl({value:'', disabled: true}, [Validators.required]),
    complement: new FormControl(null),
    age: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    enable: new FormControl(true),
  });

  get name(): string{
    return this.formUser.get('name').value;
  }
  set name(name: string){
    this.formUser.get('name').setValue(name);
  }
  get street(): string{
    return this.formUser.get('street').value;
  }
  set street(street: string){
    this.formUser.get('street').setValue(street);
  }
  get cep(): string{
    return this.formUser.get('cep').value;
  }
  set cep(cep: string){
    this.formUser.get('cep').setValue(cep);
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

  get enable(): boolean{
    return this.formUser.get('enable').value;
  }
  set enable(enable: boolean){
    this.formUser.get('enable').setValue(enable);
  }


  loadUser(user: any): void{
    this.name = user.name;
    this.email = user.email;
    this.enable = user.enable;
    this.id = user.id;
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
    return this.correioService.getCEP(this.cep).subscribe(data => {
      console.log(data)
      this.street = data.logradouro === '' ? data.localidade : data.logradouro;
      this.city = data.localidade;
      this.state = data.uf;
    }, error => {
    });
  }
}
