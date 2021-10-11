import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_core/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  isLogged(){
    return this.authenticationService.isLogged();
  }

}
