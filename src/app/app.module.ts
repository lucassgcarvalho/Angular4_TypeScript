import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/menu/menu.component';
import { ShoppingCardComponent } from './restaurants/shopping-card/shopping-card.component';
import { MenuItemComponent } from './restaurants/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import { ShoppingCardService } from './restaurants/shopping-card/shopping-card.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService, ShoppingCardService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
