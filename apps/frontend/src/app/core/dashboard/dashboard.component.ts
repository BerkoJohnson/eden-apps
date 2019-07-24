import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService, ListPayload } from '../../services/student.service';

@Component({
  selector: 'eden-apps-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  students$: Observable<ListPayload>;

  constructor(private studentsService: StudentService) { }

  ngOnInit() {
    this.students$ = this.studentsService.students$;
  }

}
