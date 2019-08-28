import {Component, OnInit} from '@angular/core';
import { StudentService, IRegistrationSummary } from '../../../services/student.service';
import { RegistrationService, IRegSummary } from '../../../services/registration.service';

@Component({
  selector: 'eden-apps-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
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

  get thisMonth() {
    const m = new Date().getMonth();
    return this.months[m];
  }
  subjectRegistration: IRegSummary[];
  constructor(
    private studentService: StudentService,
    private readonly reg: RegistrationService
    ) {
  }

  ngOnInit() {
    this.reg.getRegistrationSummary(this.thisMonth).subscribe(d => this.subjectRegistration = d);
  }

}
