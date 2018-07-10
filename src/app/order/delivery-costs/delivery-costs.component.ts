import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValues: number;

  constructor() { }

  ngOnInit() {
  }

  getTotal() {
    return this.delivery + this.itemsValues;
  }

}