import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  countDown;
  counter: number;

  constructor() {
    this.counter = 30;
   }

  ngOnInit() {
    this.countDown = Observable.timer(0, 1000).take(this.counter).map(() => --this.counter);
  }
}
