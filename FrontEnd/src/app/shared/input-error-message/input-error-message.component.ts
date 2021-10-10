import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.scss']
})
export class InputErrorMessageComponent implements OnInit {

  private _control: FormControl;
  private _textArea: boolean

  @Input() set control(data: FormControl) {
    this._control = data;
  }

  @Input() set textArea(data: boolean){
    this._textArea = data;
  }

  get control() {
    return this._control;
  }

  get textArea() {
    return this._textArea;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.control.touched) {
      if (this.control.hasError('required')) {
        return 'Você deve preencher o campo obrigatório';
      }
      if (this.control.hasError('whitespace')) {
        return 'Você deve preencher o campo obrigatório';
      }
      if (this.control.hasError('minlength')) {
        return `Tamanho mínimo para o campo é ${this.control.errors.minlength.requiredLength} caracteres`;
      }
      if (this.control.hasError('maxlength')) {
        return `Tamanho máximo para o campo é ${this.control.errors.maxlength.requiredLength} caracteres`;
      }
      if (this.control.hasError('email')) {
        return `Email inválido`;
      }
      if(this.control.hasError('password')) {
        return `A sua senha não atende os requisitos mínimos de segurança`;
      }
      if (this.control.hasError('pattern')) {
        return `Conteúdo inválido`;
      }
      if (this.control.hasError('min')) {
        return `O valor mínimo para o campo é ${this.control.errors.min.min.toString().replace('.', ',')}`;
      }
      if (this.control.hasError('max')) {
        return `O valor máximo para o campo é ${this.control.errors.max.max.toString().replace('.', ',')}`;
      }
      if (this.control.hasError('invalidDate')) {
        return `O campo deve ser igual ou maior que a data atual`;
      }
      if (this.control.hasError('min-price')) {
        return 'O campo deve ser maior ou igual a 0,01';
      }
      if (this.control.hasError('minDate')) {
        return `O campo deve ser igual ou maior que ${this.control.errors.minDate}`;
      }
      if (this.control.hasError('greaterThan')) {
        return `O campo deve ser maior que zero e maior que a classificação anterior`;
      }
      if (this.control.hasError('quantityGreaterThan')) {
        return `Valor máximo deve ser igual ou maior que o valor Mínimo`;
      }
      if (this.control.hasError('onlyNumber')) {
        return `O campo deve conter apenas números`;
      }
    }
  }
}
