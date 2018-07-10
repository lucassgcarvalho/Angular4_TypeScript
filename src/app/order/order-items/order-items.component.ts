import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurants/shopping-card/shopping-card-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {


  items: CartItem[];

  @Input() increaseQty = new EventEmitter<CartItem>();
  @Input() decreaseQty = new EventEmitter<CartItem>();
  @Input() remove = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit() {}

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
