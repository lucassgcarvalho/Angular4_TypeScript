import { Http } from '@angular/http';
import { MET_API } from '../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from './menu/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {
  constructor(private http: Http) {}

  restaurant(): Observable<Restaurant[]> {
    return this.http
      .get(`${MET_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.errorHandler);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${MET_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.errorHandler);
  }

  reviewsRestaurants(id: string): Observable<any> {
    return this.http
      .get(`${MET_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.errorHandler);
  }

  menuRestaurants(id: string): Observable<MenuItem> {
    return this.http
      .get(`${MET_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.errorHandler);
  }

}
