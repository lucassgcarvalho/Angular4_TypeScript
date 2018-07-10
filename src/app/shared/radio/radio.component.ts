import { RadioOption } from './radio.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[];
  value: any;

  constructor() {}

  ngOnInit() {}

  setValues(value: any) {
    this.value = value;
  }
}
