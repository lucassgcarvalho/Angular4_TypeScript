import { MenuItem } from './menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../restaurants.service';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
