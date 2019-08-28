import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ListPayload, TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'eden-apps-list-of-teachers',
  templateUrl: './list-of-teachers.component.html',
  styleUrls: ['./list-of-teachers.component.scss']
})
export class ListOfTeachersComponent implements OnInit {
  teachers$: Observable<ListPayload>;
  searchForm: FormGroup;
  selectedID = '';

  constructor(
    private teachersService: TeacherService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      name: ''
    });
  }

  ngOnInit() {
    this.teachers$ = this.teachersService.teachers$;
    this.searchForm.setValue({
      name: ''
    });

    this.searchForm.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        switchMap(v => {
          return this.teachersService.getByPage(1, 15, v.name || '');
        })
      )
      .subscribe();
  }

  gotoPage(page) {
    this.teachersService.getByPage(page, 15, this.name || '').subscribe();
  }

  clearField() {
    this.searchForm.setValue({
      name: ''
    });
  }
  get f() {
    return this.searchForm.controls;
  }

  get name() {
    return this.f.name.value;
  }
}
