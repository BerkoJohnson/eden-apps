import {Component, OnInit} from '@angular/core';
import { ISummary, StudentService } from '../../../services/student.service';

@Component({
  selector: 'eden-apps-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  summary: ISummary;
  daysInWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  constructor(private studentService: StudentService) {
  }

  get today() {
    return Date.now();
  }

  get thisDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d];
  }

  ngOnInit() {
    this.studentService.summary().subscribe(d => {
      this.summary = d;
    });

  }


}
