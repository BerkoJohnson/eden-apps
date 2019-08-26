import {Injectable} from '@angular/core';
import {ISubject} from './subject.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import { Subject } from '@eden-apps/subject';


export interface ITeacher {
  _id?: string;
  name: string;
  email: string;
  contacts: string[];
  password?: string;
  subjects?: ISubject[];
  createdAt?: Date;
  updateAt?: Date;
}

export interface ListPayload {
  teachers: ITeacher[];
  count: number;
  itemsFound: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
// tslint:disable-next-line: variable-name
  private _teachers = new BehaviorSubject<ListPayload>(null);
  teachers$ = this._teachers.asObservable();

// tslint:disable-next-line: variable-name
  private _teacher = new BehaviorSubject<ITeacher>(null);
  teacher$ = this._teacher.asObservable();

  constructor(private http: HttpClient) {
    this.loadTeachers();
  }

  loadTeachers() {
    this.getByPage().subscribe();
  }

  getTeachers(): Observable<ListPayload> {
    return this.http.get<ListPayload>('/api/teachers');
  }

  getByPage(page = 1, limit = 5, search = ''): Observable<ListPayload> {
    return this.http
      .get<ListPayload>(`/api/teachers?page=${page}&limit=${limit}&search=${search}`)
      .pipe(
        map(res => {
          this._teachers.next(res);
          return res;
        })
      );
  }

  createNewTeacher(FormData: ITeacher): Observable<ITeacher> {
    return this.http
      .post<ITeacher>('/api/teachers', {teacher: FormData})
      .pipe(
        map(_ => {
          this.loadTeachers();
          return _;
        })
      );
  }

  getTeacher(id: string): Observable<ITeacher> {
    return this.http.get<ITeacher>(`/api/teachers/${id}`).pipe(
      map(d => {
        this._teacher.next(d);
        return d;
      })
    );
  }

  assignTeacher(subject: Subject, id: string) {
    return this.http.put('/api/teachers/assign-subject?id=' + id, {
      subject: subject._id
    });
  }
}
