import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './app.calendar.html',
  styleUrls: ['./app.calendar.css']
})

export class CalendarComponent {

  getMonth() {
    var CurrentMonth: string[] = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December",];
    var month = new Date();
    var CrrntMonth = CurrentMonth[month.getMonth()];
    return CrrntMonth;

  }

  date = new Date();
  year = this.date.getFullYear();
}
