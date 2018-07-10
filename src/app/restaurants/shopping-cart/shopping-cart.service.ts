import { CartItem } from './shopping-cart-item.model';
import { MenuItem } from '../menu/menu-item/menu-item.model';

export class ShoppingCartService {

  items: CartItem[] = [];

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

  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
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
