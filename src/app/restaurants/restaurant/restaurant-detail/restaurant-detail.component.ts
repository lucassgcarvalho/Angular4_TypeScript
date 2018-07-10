import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurants.service';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.activatedRoute.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);
  }

}
