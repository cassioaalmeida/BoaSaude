import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_core/authentication.service';
import { TermOfUseApiService } from 'src/app/_core/Utils/term-of-use/term-of-use-api.service';
import { LoginApiService } from './login-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginEvent = new EventEmitter();

  get loginEvent(){
    return this._loginEvent;
  }

  constructor(
    private loginApiService: LoginApiService,
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog,
    private termOfUseApiService: TermOfUseApiService,
  ) { }

  login(email: string, password: string) {
    this.loginApiService.login(email, password).subscribe((res: any) => {
      this.authenticationService.storeTokenData(res.access_token, res.expiration);
      this._loginEvent.emit();
    });
  }

  forgotPassword(){
    this.router.navigate(['forgot-password']);
  }

  createAccount(){
    this.router.navigate(['create-account']);
  }
}
