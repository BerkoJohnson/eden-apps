import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';
import { Subject } from '@eden-apps/subject';
import { switchMap } from 'rxjs/operators';
import { TimeTableService } from '../../../services/time-table.service';

@Component({
  selector: 'eden-apps-remove-subject',
  templateUrl: './remove-subject.component.html',
  styleUrls: ['./remove-subject.component.scss']
})
export class RemoveSubjectComponent implements OnInit {
  subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private ss: SubjectService,
    private router: Router,
    private tt: TimeTableService
    ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(s => this.ss.getSubject(s.get('id'))))
      .subscribe(s => (this.subject = s));
  }


  deleteSubject() {
    this.ss.removeSubject(this.subject._id).subscribe(s => {
      this.ss.getByPage().subscribe();
      this.tt.getPeriods().subscribe();
      this.router.navigateByUrl('/subjects');

    });
  }
}
