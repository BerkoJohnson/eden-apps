import { Component, OnInit } from '@angular/core';
import { ISummary, StudentService } from '../../../services/student.service';
import { TimeTableService } from '../../../services/time-table.service';
import { Observable, of } from 'rxjs';
import { Lesson } from '@eden-apps/lesson';

@Component({
  selector: 'eden-apps-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  summary: ISummary;
  lessons: Lesson[];
  today: string;
  nextDay: string;
  previousDay: string;

  daysInWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  constructor(
    private studentService: StudentService,
    private tt: TimeTableService
  ) {}

  // get today() {
  //   return Date.now();
  // }

  thisDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d];
  }

  ngOnInit() {
    this.studentService.summary().subscribe(ds => {
      this.summary = ds;
    });

    const d = new Date().getDay();
    this.today = this.daysInWeek[d];

    this.nextDay = this.daysInWeek[d + 1];
    this.previousDay = this.daysInWeek[d - 1];

    this.tt.getLessons(this.today).subscribe(ls => (this.lessons = ls));
  }

  getLessons(day: string) {
    this.tt.getLessons(day).subscribe(ls => {
      this.lessons = ls;
      this.today = day;
      const dayIndex = this.daysInWeek.indexOf(day);
      // console.log(day, dayIndex);
      // IF CURRENT DAY'S INDEX IS ZERO, SET PREVIOUS DAY TO 'SATURDAY'
      // IF CURRENT DAYS'S INDEX IS SIX, SET NEXT DAY TO SUNDAY... GLORY BE TO GOD... AMEN!
      this.nextDay = dayIndex === 6 ? 'Sunday' : this.daysInWeek[dayIndex + 1];
      this.previousDay =
        dayIndex === 0 ? 'Saturday' : this.daysInWeek[dayIndex - 1];
    });
  }
}
