import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from '@eden-apps/lesson';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  _lessons = new BehaviorSubject<Lesson[]>(null);
  lessons$ = this._lessons.asObservable();
  constructor(private http: HttpClient) {
  }

  getLessons(day: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/periods/lessons?today=' + day).pipe(
      map(ls => {
        if (ls) {
          this._lessons.next(ls);
          return ls;
        }
      })
    );
  }
}
