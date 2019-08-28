import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IRegSummary {
  _id: string;
  title: string;
  noOfStudents: string;
  students: any;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _monthlyRegistrations = new BehaviorSubject<IRegSummary[]>(null);
  monthlyRegistrations$ = this._monthlyRegistrations.asObservable();

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
  constructor(private http: HttpClient) {}

  getRegistrationSummary(month: string): Observable<IRegSummary[]> {
    const thisMonth = month || this.thisMonth;
    
    return this.http
      .get<IRegSummary[]>('/api/registrations/summary?month=' + thisMonth)
      .pipe(
        map(r => {
          this._monthlyRegistrations.next(r);
          return r;
        })
      );
  }
}
