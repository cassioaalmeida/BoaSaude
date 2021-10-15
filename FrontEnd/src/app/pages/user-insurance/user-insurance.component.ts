import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user/shared/user.service';
import { UserInsuranceService } from './user-insurance.service';

@Component({
  selector: 'app-user-insurance',
  templateUrl: './user-insurance.component.html',
  styleUrls: ['./user-insurance.component.scss']
})
export class UserInsuranceComponent implements OnInit {

  showDIv = false

  maskCPF = [/\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-' , /\d/, /\d/];

  form = new FormGroup({
    document: new FormControl(null, [Validators.required])
  });

  
  get document(): string{
    return this.form.get('document').value;
  }
  set document(document: string){
    this.form.get('document').setValue(document);
  }

  constructor(
    private userInsuranceService: UserInsuranceService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.showDIv = false
    this.userService.getUserByDocument(this.document).subscribe((user: any) => {
      console.log(user)
      if (!!user){
        this.userInsuranceService.getUserInsurance(user.id).subscribe((data: any) => {
          console.log(data)
          this.showDIv = true
          this.loadData(data);
        });
      }
    });
  }

  loadData(data) {

  }

}
