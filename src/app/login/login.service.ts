import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apibaseUrl = 'https://apidev.fybr.app/api';
  constructor(
    private http: HttpClient
  ) { }

  verifyloggedInUsers(payload: any): Observable<any> {
    console.log('call in service', payload);
    return this.http.post<any>(this.apibaseUrl + '/auth/signin', payload);
  }
}
