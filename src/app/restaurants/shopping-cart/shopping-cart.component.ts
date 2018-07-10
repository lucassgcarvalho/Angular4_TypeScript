import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './shopping-cart-item.model';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCardService: ShoppingCartService) { }

  ngOnInit() {
  }

  getCartItems(): CartItem[] {
    return this.shoppingCardService.items;
  }

  clear() {
    this.shoppingCardService.clear();
  }

  addItem(cartItem: any) {
    this.shoppingCardService.addItem(cartItem);
  }

  removeItem(cartItem: any) {
    this.shoppingCardService.removeItem(cartItem);
  }

  getTotal(): number {
    return this.shoppingCardService.total();
  }

}
