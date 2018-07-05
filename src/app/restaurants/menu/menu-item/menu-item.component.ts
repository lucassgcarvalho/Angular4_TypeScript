import { MenuItem } from './menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../../restaurants.service';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() eventEmitter = new EventEmitter();

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addCartShopEvent() {
    this.eventEmitter.emit(this.menuItem);
  }

}
