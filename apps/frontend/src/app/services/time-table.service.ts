import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  _lessons = new BehaviorSubject<>();
  lessons$ = this._lessons.asObservable();
  constructor(private http: HttpClient) {

  }

  getLessons() {
    return this.http.get('/api/periods/lessons')
  }
}
