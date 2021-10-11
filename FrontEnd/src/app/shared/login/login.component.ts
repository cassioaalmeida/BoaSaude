import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidatorsService } from 'src/app/_core/Utils/custom-validators.service';
import { ValidateService } from 'src/app/_core/Utils/validate.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl(null, [ Validators.required, this.customValidators.email() ]),
    password: new FormControl(null, Validators.required),
  });

  get email() {
    return this.formLogin.get('email').value;
  }

  get password() {
    return this.formLogin.get('password').value;
  }

  constructor(
    private loginService: LoginService,
    private customValidators: CustomValidatorsService,
    private validateService: ValidateService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.validateService.validateForm(this.formLogin)) {
      this.loginService.login(this.email, this.password);
    }
  }

  forgotPassword(){
    this.loginService.forgotPassword();
  }

  createAccount(){
    this.loginService.createAccount();
  }

}
