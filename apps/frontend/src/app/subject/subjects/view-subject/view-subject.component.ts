import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ISubject, SubjectService } from '../../../services/subject.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'eden-apps-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.scss']
})
export class ViewSubjectComponent implements OnInit {
  subject: ISubject;

  constructor(
    private subjectsService: SubjectService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  // input() {console.log('edit this')}
  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(p => {
          return this.subjectsService.getSubject(p.get('id'));
        })
      )
      .subscribe(d => (this.subject = d), error => console.error(error));
  }

}
