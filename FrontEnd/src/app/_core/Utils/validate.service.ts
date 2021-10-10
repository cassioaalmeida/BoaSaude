import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(
    private translateService: TranslateService,
    private toastrService: ToastrService
  ) { }

  validateForm(form: FormGroup): boolean {
    if (form.invalid) {
      form.markAllAsTouched();
      if (Object.keys(form.controls).some(key => form.get(key).hasError('required'))) {
        this.translateService.get('message.required-fill').subscribe((label: string) => this.toastrService.warning(label));
        return false;
      }
      this.translateService.get('message.invalid-fill').subscribe((label: string) => this.toastrService.warning(label));
      return false;
    }
    return true;
  }

  validateFormArray(formArray: FormArray): boolean {
    let messageSent = false;
    if (formArray.invalid){
      formArray.controls.forEach(formGroup => {
        let form = formGroup as FormGroup;
        if (form.invalid) {
          form.markAllAsTouched();
          if (Object.keys(form.controls).some(key => form.get(key).hasError('required'))) {
            if(!messageSent){
              this.translateService.get('message.required-fill').subscribe((label: string) => this.toastrService.warning(label));
              messageSent = true;
            }
            return false;
          }
          if(!messageSent){
            this.translateService.get('message.invalid-fill').subscribe((label: string) => this.toastrService.warning(label));
            messageSent = true;
          }
          return false;
        }
      });
      return false;
    }
    return true;
  }
}
