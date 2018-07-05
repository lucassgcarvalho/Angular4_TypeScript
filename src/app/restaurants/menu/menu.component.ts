import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens: Observable<any>;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menuItens = this.restaurantService.menuRestaurants(
      this.activatedRoute.parent.snapshot.params['id']
    );
  }


  addMenuItemCardShopping(item: MenuItem) {
    console.log(item);
  }

}
