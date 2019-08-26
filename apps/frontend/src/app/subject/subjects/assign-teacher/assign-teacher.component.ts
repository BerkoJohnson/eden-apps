import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListPayload, TeacherService } from '../../../services/teacher.service';
import { ISubject, SubjectService } from '../../../services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject } from '@eden-apps/subject';

@Component({
  selector: 'eden-apps-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.scss']
})
export class AssignTeacherComponent implements OnInit {
  assignForm: FormGroup;
  teachers: ListPayload;
  subject: Subject;

  constructor(
    private fb: FormBuilder,
    private teachersService: TeacherService,
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.assignForm = this.fb.group({
      teacherID: ['', Validators.required]
    });
  }

  get tID() {
    return this.assignForm.get('teacherID');
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(d => {
        return this.subjectService.getSubject(d.get('id'));
      })
    ).subscribe(subject => this.subject = subject);

    this.route.paramMap.pipe(
      switchMap(d => {
        return this.teachersService.getTeachers();
      })
    ).subscribe(teachers => this.teachers = teachers);
  }

  submitAssignment() {
    if (!this.assignForm.valid) {
      return this.assignForm.markAsDirty();
    }

    this.teachersService.assignTeacher(this.subject, this.tID.value)
      .subscribe(d => this.router.navigateByUrl(`/subjects/${this.subject._id}`));
  }
}
