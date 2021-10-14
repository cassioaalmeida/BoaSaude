import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  numberMaskPrice = createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: '',
    allowDecimal: true,
    decimalSymbol: ','
  });

  form1= new FormGroup({
    id: new FormControl(1, [Validators.required]),
    type: new FormControl(1, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  form2= new FormGroup({
    id: new FormControl(2, [Validators.required]),
    type: new FormControl(2, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  form3= new FormGroup({
    id: new FormControl(3, [Validators.required]),
    type: new FormControl(3, [Validators.required]),
    value1: new FormControl(null, [Validators.required]),
    value2: new FormControl(null, [Validators.required]),
    value3: new FormControl(null, [Validators.required]),
    value4: new FormControl(null, [Validators.required]),
    value5: new FormControl(null, [Validators.required]),
    value6: new FormControl(null, [Validators.required]),
    value7: new FormControl(null, [Validators.required]),
    value8: new FormControl(null, [Validators.required]),
    value9: new FormControl(null, [Validators.required]),
    value10: new FormControl(null, [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }
}
