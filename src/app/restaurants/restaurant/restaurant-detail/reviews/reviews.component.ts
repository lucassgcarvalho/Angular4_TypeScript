import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from '../../../restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsRestaurants(
      this.activatedRoute.parent.snapshot.params['id']
    );
  }
}
