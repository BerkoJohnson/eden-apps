import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import {
  TimeTableService,
  PeriodsList
} from '../../../services/time-table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'eden-apps-list-of-periods',
  templateUrl: './list-of-periods.component.html',
  styleUrls: ['./list-of-periods.component.css']
})
export class ListOfPeriodsComponent implements OnInit {
  daysInWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  searchPeriod: FormGroup;
  selectedID = '';
  periods$: Observable<PeriodsList>;

  constructor(private fb: FormBuilder, private tt: TimeTableService) {
    this.searchPeriod = this.fb.group({ day: '' });
  }

  ngOnInit() {
    this.periods$ = this.tt.periods$;
    this.searchPeriod.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        switchMap(v => {
          return this.tt.getPeriods(1, 10, v.day || '');
        })
      )
      .subscribe();
  }


  gotoPage(page: number) {
    this.tt.getPeriods(page, 10, this.day || '').subscribe();
  }
  get f() {
    return this.searchPeriod.controls;
  }

  get day() {
    return this.f.day.value;
  }


  onHover(id) {
    this.selectedID = id;
  }
}
