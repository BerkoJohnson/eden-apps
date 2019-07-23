import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IStudent, StudentService } from '../../../services/student.service';


@Component({
  selector: 'eden-apps-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss']
})
export class StudentsViewComponent implements OnInit {
  student: IStudent;
  constructor(
    private route: ActivatedRoute,
    private ss: StudentService
    ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(v => {
          return this.ss.getStudent(v.get('id'));
        })
      )
      .subscribe(s => this.student = s);
  }
}
