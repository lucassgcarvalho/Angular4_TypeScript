import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  mouseEnterEventName = 'mouseenter';

  @Output() ratedEventEmitter = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  rateAux: number = 0;

  constructor() {}
  ngOnInit() {}

  setRating(rateVar: number) {
    this.rate = rateVar;
    this.rateAux = rateVar;
    this.ratedEventEmitter.emit(rateVar);
  }

  mouseOver(event: string, rateVar: number) {
    if (event === this.mouseEnterEventName) {
      this.rateAux = this.rate;
      this.rate = rateVar;
    }else {
      this.rate = this.rateAux;
    }
  }





}
