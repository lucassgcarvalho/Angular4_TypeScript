import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from './shopping-card.service';
import { CartItem } from './shopping-card-item.model';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  constructor(private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
  }

  getItems(): CartItem[] {
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
