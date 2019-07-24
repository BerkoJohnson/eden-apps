import { Component, OnInit } from '@angular/core';
import { IRegs, ISummary, StudentService, IRegistrationSummary } from '../../../services/student.service';

@Component({
  selector: 'eden-apps-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.scss']
})
export class StudentsHomeComponent implements OnInit {
  studentsRegs: IRegistrationSummary[];

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

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor(private studentService: StudentService) {
  }

  get thisMonth() {
    const m = new Date().getMonth();
    return this.months[m];
  }

  get thisDay() {
    const d = new Date().getDay();
    return this.daysInWeek[d];
  }

  ngOnInit() {
    this.studentService.summary().subscribe(d => {
      this.summary = d;
    });

    this.studentService
    .getRegistrationsForMonth(this.thisMonth)
    .subscribe(
      ss => this.studentsRegs = ss
    );

  }

}
