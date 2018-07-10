import { RadioOption } from '../shared/radio/radio.module';
import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../restaurants/shopping-cart/shopping-cart-item.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 7;

  @Input() address: string;
  @Input() number: string;
  @Input() optional: string;

  paymentOptions: RadioOption[] = [
    { label: 'Cartão Crédito', value: 'CRED' },
    { label: 'Cartão Débito', value: 'DEB' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  getItemsValue(): number {
    return this.orderService.getItemsValues();
  }

  increaseQty(cart: CartItem) {
    this.orderService.increaseQty(cart);
  }

  decreaseQty(cart: CartItem) {
    this.orderService.decreaseQty(cart);
  }

  remove(cart: CartItem) {
    this.orderService.remove(cart);
  }

  getCartItems(): CartItem[] {
    return this.orderService.getCartItems();
  }

  checkOrder(order: Order) {
    order.orderItems = this.getCartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluída ${orderId}`);
      this.orderService.clear();
    } );
  }


}
