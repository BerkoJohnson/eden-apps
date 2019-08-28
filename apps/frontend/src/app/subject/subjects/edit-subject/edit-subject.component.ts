import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '@eden-apps/subject';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'eden-apps-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {
  updateSubject: FormGroup;
  subject: Subject;

  constructor(
    private fb: FormBuilder,
    private ss: SubjectService,
    private route: ActivatedRoute
  ) {
    this.updateSubject = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(r => this.ss.getSubject(r.get('id')))
    ).subscribe(s => {
      this.subject = s;
      this.updateSubject.patchValue({
        title: s.title
      });
    });
  }

  update() {
    if (this.updateSubject.invalid) {
      this.updateSubject.markAsDirty();
      return;
    }
    // console.log(this.updateSubject.value);

    this.ss.updateSubject(this.subject._id, this.updateSubject.value).subscribe(
      s => {
        
      }
    );
  }

  get s() {
    return this.updateSubject.get('title');
  }

}
