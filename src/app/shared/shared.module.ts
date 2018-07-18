import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from '../restaurants/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantService, OrderService]
    };
  }
}
