import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private apibaseUrl = 'https://apidev.fybr.app/api';
  private imageurl  = 'https://fybrs3dev.s3.amazonaws.com';
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
    // return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step1`,
    //  postData, this.httpOptions).subscribe(res => {
    //   console.log('res', res);
    // });
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step1`,
     postData, this.httpOptions);
  }

  step2GenderSubmit(payload: any){
    console.log('call in service2', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      gender : payload.gender,
      accessToken: this.accessToken
    };
    // return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step2`,
    //  postData, this.httpOptions).subscribe(res => {
    //   console.log('res', res);
    // });
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step2`,
     postData, this.httpOptions);
  }

  step3AgeSubmit(payload: any){
    console.log('call in service2', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      yearOfBirth : payload.yearOfBirth,
      accessToken: this.accessToken
    };
    // return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step3`,
    //  postData, this.httpOptions).subscribe(res => {
    //   console.log('res', res);
    // });
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step3`,
     postData, this.httpOptions);
  }
  step4heightSubmit(payload: any) {
    console.log('step4 height service', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      height: {
        height: payload.height,
        heightMeasure: 'cm'
      },
      accessToken: this.accessToken
    };
    // return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step4`,
    //  postData, this.httpOptions).subscribe(res => {
    //   console.log('res', res);
    // });
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step4`,
     postData, this.httpOptions);
  }
  step5weightSubmit(payload: any) {
    console.log('step5 service', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      weight: {
        weight: payload.weight,
        weightMeasure: 'cm'
      },
      accessToken: this.accessToken
    };
    // return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step5`,
    //  postData, this.httpOptions).subscribe(res => {
    //   console.log('res', res);
    // });
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step5`,
     postData, this.httpOptions);
  }

  step7ProgressSubmit(payload: any) {
    console.log('step7 service', payload);
    this.httpOptions = {
      headers: this.headersobject
    };
    const postData = {
      userId : this.userId,
      bodyMeasurementBy : payload.bodyMeasurementBy,
      accessToken: this.accessToken
    };
    return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step7`,
     postData, this.httpOptions);
  }

//  ProfilePhotoUpload(payload: any) {
//   console.log('ProfilePhotoUpload', payload);
//   this.httpOptions = {
//     headers: this.headersobject
//   };
//   const formData: FormData = new FormData();
//   formData.append('file', payload, payload.name);
//   formData.append('bucketName', 'fybrs3dev');
//   return this.http.post<any>(this.apibaseUrl + `/s3/uploadFile`,
//   formData).subscribe(res => {
//         console.log('resupload', res);
//         const postData = {
//           userId : this.userId,
//           accessToken: this.accessToken,
//           type: 'media',
//           image: {
//             path: this.imageurl + '/' + res.fileKey,
//             pathType: 'image/video'
//           }
//         };
//         this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step8`,
//         postData, this.httpOptions).subscribe( res1 => {
//           console.log('save db', res1);
//         });
//       });
//  }

ProfilePhotoUpload(payload: any) {
  console.log('ProfilePhotoUpload', payload);
  const formData: FormData = new FormData();
  formData.append('file', payload, payload.name);
  formData.append('bucketName', 'fybrs3dev');
  return this.http.post<any>(this.apibaseUrl + `/s3/uploadFile`, formData);
 }
 ProfilePhotoSaveDB(payload: any) {
  console.log('ProfilePhotoSaveDB', payload);
  this.httpOptions = {
      headers: this.headersobject
    };
  const postData = {
    userId : this.userId,
    accessToken: this.accessToken,
    type: 'media',
    image: {
      path: this.imageurl + '/' + payload.fileKey,
      pathType: 'image/video'
    }
  };
  return  this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step8`,
        postData, this.httpOptions);
 }

 step9_BodyMeasureSubmit(payload: any) {
  console.log('step9 service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId      : this.userId,
    accessToken : this.accessToken,
    type        : payload.type,
    measure     : payload.measure
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step9`,
   postData, this.httpOptions);
}

step10_WeightExtraSubmit(payload: any) {
  console.log('step10 service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId      : this.userId,
    accessToken : this.accessToken,
    bodyTypeId  : payload.bodyTypeId,
    bodyType    : payload.bodyType
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step10`,
   postData, this.httpOptions);
}

step11_PhysiqueGoalSubmit(payload: any) {
  console.log('step11 service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId      : Number(this.userId),
    accessToken : this.accessToken,
    physicGoal  : Number(payload.physicGoal)
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step11`,
   postData, this.httpOptions);
}

step12_ActivityLevelSubmit(payload: any) {
  console.log('step12 service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId         : Number(this.userId),
    accessToken    : this.accessToken,
    activityLevel  : Number(payload.activityLevel)
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step12`,
   postData, this.httpOptions);
}

step13_WorkOutLevel(payload: any) {
  console.log('Workout service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId         : Number(this.userId),
    accessToken     : this.accessToken,
    workoutPerWeek  : payload.workoutPerWeek
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step13`,
   postData, this.httpOptions);
}

step14_FitnessGoalLevel(payload: any) {
  console.log('FitnessGoalLevel service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId       : Number(this.userId),
    accessToken  : this.accessToken,
    fitnessgoal  : payload.fitnessgoal
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step14`,
   postData, this.httpOptions);
}
step15_ToolKitSubmit(payload: any){
  console.log('ToolKitSubmit service', payload);
  this.httpOptions = {
    headers: this.headersobject
  };
  const postData = {
    userId       : Number(this.userId),
    accessToken  : this.accessToken,
    boutique     : payload.boutique,
    commercial   : payload.commercial,
    equipment    : payload.equipment
  };
  return this.http.post<any>(this.apibaseUrl + `/onboarding/remotePostOnboardingData/step15`,
   postData, this.httpOptions);
}

}

