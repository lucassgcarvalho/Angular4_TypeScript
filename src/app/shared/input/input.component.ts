import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any;
  @Input() errorMessage: string;
  @Input() label: string;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) formControlName: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.input = this.model || this.formControlName;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com um diretiva ngModel');
    }
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

}
