import { CartItem } from './shopping-card-item.model';
import { MenuItem } from '../menu/menu-item/menu-item.model';

export class ShoppingCardService {

  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((paramListItem) => paramListItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
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


}
