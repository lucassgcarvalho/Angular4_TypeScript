import { RestaurantService } from './../restaurants/restaurants.service';
import { NgModule } from '@angular/core';
import { ShoppingCartService } from '../restaurants/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';
@NgModule({
  imports: [ShoppingCartService, RestaurantService, OrderService]
})
export class CoreModule {}
