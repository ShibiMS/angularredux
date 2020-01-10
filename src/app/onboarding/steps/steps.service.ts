import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private apibaseUrl = 'https://apidev.fybr.app/api';
  constructor(
    private http: HttpClient
  ) { }
    accessToken: any = localStorage.getItem('token');
    userId: any = localStorage.getItem('userid');
    headersobject: any = new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization: 'Bearer ' + this.accessToken,
    });
    httpOptions: any;

  step1WelcomeSubmit(payload: any) {
    console.log('call in service', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      firstName : payload.firstName,
      accessToken: this.accessToken
    };
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step1`,
     postData, this.httpOptions).subscribe(res => {
      console.log('res', res);
    });
  }

  step1GenderSubmit(payload: any){
    console.log('call in service2', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      gender : payload.gender,
      accessToken: this.accessToken
    };
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step2`,
     postData, this.httpOptions).subscribe(res => {
      console.log('res', res);
    });
  }

  step1AgeSubmit(payload: any){
    console.log('call in service2', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      yearOfBirth : payload.yearOfBirth,
      accessToken: this.accessToken
    };
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step3`,
     postData, this.httpOptions).subscribe(res => {
      console.log('res', res);
    });
  }
}

