import { Component, OnInit } from '@angular/core';
import { ISummary, StudentService } from '../../../services/student.service';
import { TimeTableService } from '../../../services/time-table.service';
import { Observable } from 'rxjs';
import {Lesson} from '@eden-apps/lesson';

@Component({
  selector: 'eden-apps-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  summary: ISummary;
  lessons: Lesson[];
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

  get today() {
    return Date.now();
  }

  get thisDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d];
  }

  get nextDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d + 1];
  }

  get previousDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d - 1];
  }

  ngOnInit() {
    this.studentService.summary().subscribe(d => {
      this.summary = d;
    });


    this.tt.getLessons(this.thisDay).subscribe(ls => this.lessons = ls);
  }

  getLessons(day: string) {
    this.tt.getLessons(day).subscribe(ls => this.lessons = ls);
  }
}
