import { RadioOption } from './radio.module';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];
  value: any;
  onChange: any;

  constructor() {}

  ngOnInit() {}

  setValues(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
   * Write a new value to the element.
   */
  writeValue(obj: any): void{
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
