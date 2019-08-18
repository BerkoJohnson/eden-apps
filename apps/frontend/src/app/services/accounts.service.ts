import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '@eden-apps/payment';
import { Observable } from 'rxjs';

const URL = '/api/accounts'
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }
  getPaymentRecordById(id: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${URL}/student/${id}`);
  }
}
