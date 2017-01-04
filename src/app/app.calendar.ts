import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './app.calendar.html',
  styleUrls: ['./app.calendar.css']
})

export class CalendarComponent { 
  public months: string[] = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December",];

  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  firstDay = new Date(this.year, this.month, 1);
  monthLength = this.days_in_month[this.month];
  days = [];



  if(month = 1) { // February only!
    if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
      this.monthLength = 29;
    }
  }

  getMonth() {
    var month = new Date();
    var currentMonth = this.months[month.getMonth()];
    return currentMonth;
  }

  getWeekDays() {
    for (var i = 1; i <= this.monthLength; i++) {
      this.days.push(i);
    }
    return this.days;
  }

  dayTests = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 }
  ]

  tests = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 }
  ]
}
