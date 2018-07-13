import { Injectable } from '../../../node_modules/@angular/core';
import { ShoppingCartService } from '../restaurants/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants/shopping-cart/shopping-cart-item.model';
import { Order } from './order.model';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Http, RequestOptions, Headers } from '../../../node_modules/@angular/http';
import { MET_API } from '../app.api';

@Injectable()
export class OrderService {
  constructor(private shoppingCartService: ShoppingCartService, private http: Http) { };

  getCartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(cart: CartItem) {
    this.shoppingCartService.increaseQty(cart);
  }

  decreaseQty(cart: CartItem) {
    this.shoppingCartService.decreaseQty(cart);
  }

  remove(cart: CartItem) {
    this.shoppingCartService.removeItem(cart);
  }

  getItemsValues(): number {
    return this.shoppingCartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MET_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(order => order.id);


  }

  clear() {
    this.shoppingCartService.clear();
  }


}
