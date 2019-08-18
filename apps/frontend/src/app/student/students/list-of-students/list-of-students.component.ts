import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListPayload, StudentService } from '../../../services/student.service';

@Component({
  selector: 'eden-apps-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.scss']
})
export class ListOfStudentsComponent implements OnInit {
  studentSearch: FormGroup;
  selected = '';
  students$: Observable<ListPayload>;
  clearSearch = false;

  constructor(private fb: FormBuilder, private ss: StudentService) {
    this.studentSearch = this.fb.group({
      name: ''
    });
  }

  ngOnInit() {
    this.students$ = this.ss.students$;

    this.studentSearch
      .get('name')
      .valueChanges.pipe(
        distinctUntilChanged(),
        debounceTime(300),
        switchMap(v => {
          return this.ss.getByPage(1, 15, v);
        })
      )
      .subscribe(p => {
          this.clearSearch = true;
      });
  }

  clearField() {
    this.studentSearch.setValue({
      name: ''
    });
  }

  gotoPage(page: number) {
    const searchInput = this.studentSearch.get('name').value;
    this.ss.getByPage(page, 15, searchInput || '').subscribe();
  }

  get name() {
    return this.studentSearch.get('name');
  }
}
