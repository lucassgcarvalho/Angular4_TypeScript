import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/animations';

const STATE_HIDDEN = 'hidden';
const STATE_VISIBLE = 'visible';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('trigger-snackbar-visibility', [
      state('hidden', style({
          opacity: 0,
          bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string;
  snackVisibilityAction: string = STATE_HIDDEN;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
        this.notificationService.notifier.do(message => {
        this.message = message;
        this.snackVisibilityAction = STATE_VISIBLE;
      }).switchMap(map => Observable.timer(3000))
      .subscribe(timer => this.snackVisibilityAction = STATE_HIDDEN);
  }

}
