<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from '@eden-apps/lesson';
import { map } from 'rxjs/operators';
import { Period } from '@eden-apps/period';

const URL = '/api/periods';

export interface PeriodsList {
  subjects: Period[];
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}
@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  _lessons = new BehaviorSubject<Lesson[]>(null);
  lessons$ = this._lessons.asObservable();
  _periods = new BehaviorSubject<PeriodsList>(null);
  periods$ = this._periods.asObservable();

  constructor(private http: HttpClient) {
    this.loadPeriods();
  }

  loadPeriods() {
    this.getPeriods().subscribe();
  }

  getLessons(day: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${URL}/lessons?today=${day}`).pipe(
      map(ls => {
        if (ls) {
          this._lessons.next(ls);
          return ls;
        }
      })
    );
  }

  getPeriods(page = 1, limit = 15, day = ''): Observable<PeriodsList> {
    return this.http
      .get<PeriodsList>(`${URL}?page=${page}&limit=${limit}&day=${day}`)
      .pipe(
        map(ps => {
          if (ps) {
            this._periods.next(ps);
            return ps;
          }
        })
      );
  }

  getPeriod(id: string): Observable<Period> {
    return this.http.get<Period>(`${URL}/${id}`)
  }

  deletePeriod(id: string) {
    return this.http.delete(`${URL}/${id}`, {observe: 'response'}).pipe(
      map(res => {
        if(res.status === 204) {
          this.getPeriods().subscribe();
        }
      })
    );
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from '@eden-apps/lesson';
import { map } from 'rxjs/operators';
import { Period } from '@eden-apps/period';

const URL = '/api/periods';
export interface Schedules {
  monday?: Period[];
  tuesday?: Period[];
  wednesday?: Period[];
  thursday?: Period[];
  friday?: Period[];
  saturday?: Period[];
  sunday?: Period[];
}
export interface PeriodsList {
  subjects: Period[];
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}
@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  _lessons = new BehaviorSubject<Lesson[]>(null);
  lessons$ = this._lessons.asObservable();
  _periods = new BehaviorSubject<PeriodsList>(null);
  periods$ = this._periods.asObservable();

  constructor(private http: HttpClient) {
    this.loadPeriods();
  }

  loadPeriods() {
    this.getPeriods().subscribe();
  }

  getLessons(day: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${URL}/lessons?today=${day}`).pipe(
      map(ls => {
        if (ls) {
          this._lessons.next(ls);
          return ls;
        }
      })
    );
  }

  getPeriods(page = 1, limit = 15, day = ''): Observable<PeriodsList> {
    return this.http
      .get<PeriodsList>(`${URL}?page=${page}&limit=${limit}&day=${day}`)
      .pipe(
        map(ps => {
          if (ps) {
            this._periods.next(ps);
            return ps;
          }
        })
      );
  }

  getPeriod(id: string): Observable<Period> {
    return this.http.get<Period>(`${URL}/${id}`)
  }

  deletePeriod(id: string) {
    return this.http.delete(`${URL}/${id}`, {observe: 'response'}).pipe(
      map(res => {
        if(res.status === 204) {
          this.getPeriods().subscribe();
        }
      })
    );
  }

  time_schedules(): Observable<Schedules> {
    return this.http.get<Schedules>(`${URL}/time-table`);
  }
}
>>>>>>> e76f2e838b7f089761275d9d76577adc1c72632b
