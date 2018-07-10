import { RadioOption } from './../shared/radio/radio.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() address: string;
  @Input() number: string;
  @Input() optional: string;

  paymentOptions: RadioOption[] = [
    {label: 'Cartão Crédito', value: 'CRED'},
    {label: 'Cartão Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
