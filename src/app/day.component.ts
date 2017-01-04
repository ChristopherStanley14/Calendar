import { Component } from '@angular/core';

@Component({
  selector: 'calendar-days',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent {
  date = new Date();
  day = this.date.getDate();
  year = this.date.getFullYear;
  month = this.date.getMonth();
  days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

  total = this.days_in_month[this.month];

  tests = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 }
  ]


}
