import { CartItem } from './shopping-cart-item.model';
import { MenuItem } from '../menu/menu-item/menu-item.model';
import { NotificationService } from '../../shared/message/notification.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];


  constructor(private notificationService: NotificationService) {}

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((paramListItem) => paramListItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
  }

  total(): number {
    return this.items.map(paramItemMap => paramItemMap.valueQuantity())
      .reduce((prev, value) => prev + value, 0);
  }


  increaseQty(cart: CartItem) {
    cart.quantity = cart.quantity + 1;
  }


  decreaseQty(cart: CartItem) {
    cart.quantity = cart.quantity - 1;
    if (cart.quantity === 0) {
      this.removeItem(cart);
    }
  }

}
