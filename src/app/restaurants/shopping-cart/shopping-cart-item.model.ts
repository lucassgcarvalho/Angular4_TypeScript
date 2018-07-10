import { MenuItem } from '../menu/menu-item/menu-item.model';

export class CartItem {

  constructor(public menuItem: MenuItem, public quantity: number = 1) { }

  valueQuantity(): number {
    return this.menuItem.price * this.quantity;
  }

  value(): number {
    return this.menuItem.price;
  }


}
