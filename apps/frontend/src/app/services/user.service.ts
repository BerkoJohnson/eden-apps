import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import {User} from '@eden-apps/user';

export interface IUserPayload {
  users: User[];
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
export class UserService {
  // tslint:disable-next-line: variable-name
  _user = new BehaviorSubject<User>(null);
  user$ = this._user.asObservable();
  // tslint:disable-next-line:variable-name
  private _users = new BehaviorSubject<IUserPayload>(null);
  users$ = this._users.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    this.getByPage().subscribe();
  }

  getUsers(): Observable<IUserPayload> {
    return this.http.get<IUserPayload>('/api/users');
  }

  getByPage(page = 1, limit = 5, search = ''): Observable<IUserPayload> {
    return this.http
      .get<IUserPayload>(`/api/users/list?page=${page}&limit=${limit}&search=${search}`)
      .pipe(
        map(res => {
          this._users.next(res);
          return res;
        })
      );
  }


  createUser(FormData: User) {
    return this.http
      .post('/api/users', FormData, { observe: 'response' })
      .pipe(
        tap(_ => {
          this.loadUsers();
        })
      );
  }

  addPeriod(userId: string, periods: [{ day: string, time: string }]): Observable<User> {
    return this.http.patch<User>(`/api/users/${userId}/periods`, periods).pipe(
      map(d => {
        this.getUser(userId).subscribe();
        return d;
      })
    );
  }

  resignPeriod(id: string, periodData): Observable<User> {
    return this.http.patch<User>('/api/users/resign-period', periodData).pipe(
      map(d => {
        this.getUser(id).subscribe();
        return d;
      })
    );
  }

  getUser(id) {
    return this.http.get<User>('/api/users/' + id).pipe(
      map(d => this._user.next(d))
    );
  }
}
