import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidatorsService } from 'src/app/_core/Utils/custom-validators.service';
import { ValidateService } from 'src/app/_core/Utils/validate.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: number;
  companyUrlId: number;

  formUser = new FormGroup({
    name: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200)]),
    email: new FormControl(null, [Validators.required, this.customValidators.noWhitespaceValidator(), Validators.maxLength(200), this.customValidators.email()]),
    id: new FormControl(null),
    companyId: new FormControl(null),
    enable: new FormControl(true),
  });

  get name(): string{
    return this.formUser.get('name').value;
  }
  set name(name: string){
    this.formUser.get('name').setValue(name);
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
  get companyId(): number{
    return this.formUser.get('companyId').value;
  }
  set companyId(companyId: number){
    this.formUser.get('companyId').setValue(companyId);
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
    private validateService: ValidateService
  ) {}

  ngOnInit(): void {
    this.userId = parseInt(this.ativatedRoute.snapshot.paramMap.get('id'), 10);
    this.companyUrlId = parseInt(this.ativatedRoute.snapshot.paramMap.get('companyId'), 10);

    if(!!this.userId){
      this.userService.getUser(this.userId).subscribe((data: any) => {
        this.loadUser(data);

        this.userService.getLoggedUser().subscribe((user: any) => {
          if(user.id === this.id){
            this.formUser.get('enable').disable();
          }
        });
      });
    }
  }

  upsert(): void{
    if (this.validateService.validateForm(this.formUser)){
      this.companyId = this.companyUrlId ? this.companyUrlId : 0;
      this.userService.upsert(this.formUser.getRawValue());
    }
  }

  cancel(): void{
    this.userService.cancel();
  }

}
