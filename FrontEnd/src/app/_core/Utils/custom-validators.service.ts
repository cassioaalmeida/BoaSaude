import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }
      return control.value.toString().match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ? null : {
          'email' : true
      };
    };
  }

  password() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!!!control.value){
        return null;
      }
      return control.value.toString().match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%¨&*])/) ? null : {
        'password' : true
      };
    }
  }

  minPrice(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }
      const price = control.value.replace(',', '.');
      return price >= 0.01 ? null : {
        'min-price' : true
      };
    };
  }

  currentOrFutureDate() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }
      
      let now = new Date().setHours(0,0,0,0);
      if(control.value < now)
        return {'invalidDate': true};
    }
  }

  dateMinimun(date: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }

      if(control.value < date.setHours(0,0,0,0)){
        return {'minDate': date.toLocaleDateString('pt-BR')};
      }
    }
  }

  
  greaterThan(value: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }

      if(parseInt(control.value) <= value){
        return {'greaterThan': value};
      }
    }
  }

  quantityGreaterThan(value: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }

      if(parseInt(control.value) < value){
        return {'quantityGreaterThan': value};
      }
    }
  }

  onlyNumber() {
    
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }

      if(!/^[0-9]\d*$/.test(control.value.toString()))
        return {'onlyNumber': true};
        
    }
  }
  minLengthArray(min: number) {
    
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }

      if(control.value.length < min)
        return {'required' : true};
        
    }
  }

  noWhitespaceValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }
      
      const isWhitespace = (control.value || '').toString().trim().length === 0;
      const isValid = !isWhitespace;

      return isValid ? null : { 'whitespace': true };
    };
  }

  noWhitespaceValidatorOnlyNumber() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!!control.value){
        return null;
      }
      let value = control.value;

      if (!!control.value){
        value = value.toString().replace(/\D/g, '');
      }

      const isWhitespace = (value || '').trim().length === 0;
      const isValid = !isWhitespace;

      return isValid ? null : { 'whitespace': true };
    };
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
