import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { StepsService } from '../../steps/steps.service';
import * as stepActions from '../../steps/state/steps.actions';
import { Router } from '@angular/router';

@Injectable()
export class StepEffect {

  @Effect({ dispatch: false })
  welcomeStep$ = this.actions$.pipe(ofType<stepActions.WelcomeStep>(
    stepActions.StepActionTypes.STEP1_WELCOME),
    map((action: stepActions.WelcomeStep) => {
     console.log('Welcome action', action.payload);
     return action.payload;
    }),
    switchMap((welcomeuser: any) =>
      this.stepService.step1WelcomeSubmit(welcomeuser).pipe(
        map(
          (welcomeuserdata: any) => {
            console.log('welcomeuserdata', welcomeuserdata);
            return new stepActions.WelcomeStepSuccess(welcomeuserdata);
          }
      ),
      catchError(err => {
        console.log(err);
        return of(new stepActions.WelcomeStepFail(err));})
      )
    )
  );

  @Effect({ dispatch: false })
  welcomeStepSuccess$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.WelcomeStepSuccess>(stepActions.StepActionTypes.STEP1_WELCOME_SUCCESS),
      tap((user: any) => {})
  );

  @Effect({ dispatch: false })
  welcomeStepFailure$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.WelcomeStepFail>(stepActions.StepActionTypes.STEP1_WELCOME_FAIL)
  );


  // ****Get welcome data****/

  @Effect()
  getWelcomeData$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GET_WelcomeStep>(
      stepActions.StepActionTypes.STEP1_GETWELCOME
    ),
    mergeMap((action: stepActions.GET_WelcomeStep) =>
      this.stepService.GETstep1WelcomeSubmit(action).pipe(
        map(
          (user: any) =>
            new stepActions.GET_WelcomeStepSuccess(user)
        ),
        catchError(err => of(new stepActions.GET_WelcomeStepFail(err)))
      )
    )
  );

  // ***Get***/

  @Effect({ dispatch: false })
  genderStep$ = this.actions$.pipe(ofType<stepActions.GenderSelection>(
    stepActions.StepActionTypes.STEP2_GENDER_SELECTION),
    map((action: stepActions.GenderSelection) => {
     console.log('gender action', action.payload);
     return action.payload;
    }),
    switchMap((gender: any) =>
      this.stepService.step2GenderSubmit(gender).pipe(
        map(
          (genderuserdata: any) => {
            console.log('genderuserdata', genderuserdata);
            return new stepActions.GenderSelectionSuccess(genderuserdata);
          }
      ),
      catchError(err => {
        console.log(err);
        return of(new stepActions.GenderSelectionFail(err));})
      )
    )
  );

  @Effect({ dispatch: false })
  genderStepSuccess$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.GenderSelectionSuccess>(stepActions.StepActionTypes.STEP2_GENDER_SELECTION_SUCCESS),
      tap((user: any) => {})
  );

  @Effect({ dispatch: false })
  genderStepFailure$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.GenderSelectionFail>(stepActions.StepActionTypes.STEP2_GENDER_SELECTION_FAIL)
  );

  @Effect()
  getGenderData$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GET_GenderSelection>(
      stepActions.StepActionTypes.STEP1_GETWELCOME
    ),
    mergeMap((action: stepActions.GET_GenderSelection) =>
      this.stepService.GetGenderSelection(action).pipe(
        map(
          (user: any) =>
            new stepActions.GET_GenderSelectionSuccess(user)
        ),
        catchError(err => of(new stepActions.GET_GenderSelectionFail(err)))
      )
    )
  );

 /****STEP 3*****/

 @Effect({ dispatch: false })
  AgeStep$ = this.actions$.pipe(ofType<stepActions.AgeSelection>(
    stepActions.StepActionTypes.STEP3_AGE_SELECTION),
    map((action: stepActions.AgeSelection) => {
     console.log('Age action', action.payload);
     return action.payload;
    }),
    switchMap((age: any) =>
      this.stepService.step3AgeSubmit(age).pipe(
        map(
          (ageuserdata: any) => {
            console.log('ageuserdata', ageuserdata);
            return new stepActions.GenderSelectionSuccess(ageuserdata);
          }
      ),
      catchError(err => {
        console.log(err);
        return of(new stepActions.GenderSelectionFail(err));
      })
      )
    )
  );

  @Effect({ dispatch: false })
  ageStepSuccess$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.GenderSelectionSuccess>(stepActions.StepActionTypes.STEP2_GENDER_SELECTION_SUCCESS),
      tap((user: any) => {})
  );

  @Effect({ dispatch: false })
  ageStepFailure$: Observable<Action> = this.actions$.pipe(
      ofType<stepActions.GenderSelectionFail>(stepActions.StepActionTypes.STEP2_GENDER_SELECTION_FAIL)
  );

  @Effect()
  getAgeData$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetAgeSelection>(
      stepActions.StepActionTypes.STEP3_GET_AGE_SELECTION
    ),
    mergeMap((action: stepActions.GetAgeSelection) =>
      this.stepService.GetAgeSelection(action).pipe(
        map(
          (user: any) =>
            new stepActions.GetAgeSelectionSuccess(user)
        ),
        catchError(err => of(new stepActions.GetAgeSelectionFail(err)))
      )
    )
  );

  /****STEP 4*****/

 @Effect({ dispatch: false })
 heightStep$ = this.actions$.pipe(ofType<stepActions.HeightSelection>(
   stepActions.StepActionTypes.STEP4_Height_SELECTION),
   map((action: stepActions.HeightSelection) => {
    console.log('Height action', action.payload);
    return action.payload;
   }),
   switchMap((height: any) =>
     this.stepService.step4heightSubmit(height).pipe(
       map(
         (heightuserdata: any) => {
           console.log('heightuserdata', heightuserdata);
           return new stepActions.HeightSelectionSuccess(heightuserdata);
         }
     ),
     catchError(err => {
       console.log(err);
       return of(new stepActions.HeightSelectionFail(err));
     })
     )
   )
 );

 @Effect({ dispatch: false })
 heightStepSuccess$: Observable<Action> = this.actions$.pipe(
     ofType<stepActions.HeightSelectionSuccess>(stepActions.StepActionTypes.STEP4_Height_SELECTION_SUCCESS),
     tap((user: any) => {})
 );

 @Effect({ dispatch: false })
 heightStepFailure$: Observable<Action> = this.actions$.pipe(
     ofType<stepActions.HeightSelectionFail>(stepActions.StepActionTypes.STEP4_Height_SELECTION_FAIL)
 );


 @Effect()
  getHeightData$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetHeightSelection>(
      stepActions.StepActionTypes.STEP4_GET_Height_SELECTION
    ),
    mergeMap((action: stepActions.GetHeightSelection) =>
      this.stepService.GetHeightSelection(action).pipe(
        map(
          (user: any) =>
            new stepActions.GetHeightSelectionSuccess(user)
        ),
        catchError(err => of(new stepActions.GetHeightSelectionFail(err)))
      )
    )
  );



/****STEP 5*****/

@Effect({ dispatch: false })
weightStep$ = this.actions$.pipe(ofType<stepActions.WeightSelection>(
  stepActions.StepActionTypes.STEP5_Weight_SELECTION),
  map((action: stepActions.WeightSelection) => {
   console.log('Weight action', action.payload);
   return action.payload;
  }),
  switchMap((weight: any) =>
    this.stepService.step5weightSubmit(weight).pipe(
      map(
        (weightuserdata: any) => {
          console.log('weightuserdata', weightuserdata);
          return new stepActions.WeightSelectionSuccess(weightuserdata);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.WeightSelectionFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
weightStepSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WeightSelectionSuccess>(stepActions.StepActionTypes.STEP5_Weight_SELECTION_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
weightStepFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WeightSelectionFail>(stepActions.StepActionTypes.STEP5_Weight_SELECTION_FAIL)
);

@Effect()
getWeightData$: Observable<Action> = this.actions$.pipe(
  ofType<stepActions.GetWeightSelection>(
    stepActions.StepActionTypes.STEP5_GET_Weight_SELECTION
  ),
  mergeMap((action: stepActions.GetWeightSelection) =>
    this.stepService.GetWeightSelection(action).pipe(
      map(
        (user: any) =>
          new stepActions.GetWeightSelectionSuccess(user)
      ),
      catchError(err => of(new stepActions.GetWeightSelectionFail(err)))
    )
  )
);

/****STEP 7*****/

@Effect({ dispatch: false })
progressStep$ = this.actions$.pipe(ofType<stepActions.ProgressSelection>(
  stepActions.StepActionTypes.STEP7_Progress_SELECTION),
  map((action: stepActions.ProgressSelection) => {
   console.log('progress action', action.payload);
   return action.payload;
  }),
  switchMap((progress: any) =>
    this.stepService.step7ProgressSubmit(progress).pipe(
      map(
        (progressuserdata: any) => {
          console.log('progressuserdata', progressuserdata);
          return new stepActions.ProgressSelectionSuccess(progressuserdata);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.ProgressSelectionFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
progressStepSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ProgressSelectionSuccess>(stepActions.StepActionTypes.STEP7_Progress_SELECTION_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
progressStepFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ProgressSelectionFail>(stepActions.StepActionTypes.STEP7_Progress_SELECTION_FAIL)
);

@Effect()
getProgressData$: Observable<Action> = this.actions$.pipe(
  ofType<stepActions.GetProgressSelection>(
    stepActions.StepActionTypes.STEP7_GET_Progress_SELECTION
  ),
  mergeMap((action: stepActions.GetProgressSelection) =>
    this.stepService.GetProgressSelection(action).pipe(
      map(
        (user: any) =>
          new stepActions.GetProgressSelectionSuccess(user)
      ),
      catchError(err => of(new stepActions.GetProgressSelectionFail(err)))
    )
  )
);
  /****STEP 8*****/

@Effect()
ProfilePicStep$ = this.actions$.pipe(ofType<stepActions.ProfilePicUpload>(
  stepActions.StepActionTypes.STEP8_Profile_Upload),
  map((action: stepActions.ProfilePicUpload) => {
   console.log('Profile Pic Upload', action.payload);
   return action.payload;
  }),
  switchMap((progress: any) =>
    this.stepService.ProfilePhotoUpload(progress).pipe(
      map(
        (profilepicdata: any) => {
          console.log('profilepicdata', profilepicdata);
          return new stepActions.ProfilePicUploadSuccess(profilepicdata);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.ProfilePicUploadFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
ProfilePicSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ProfilePicUploadSuccess>(stepActions.StepActionTypes.STEP8_Profile_Upload_SUCCESS),
    tap((profiledata: any) => {
      console.log('ProfilePic Success', profiledata);
      this.stepService.ProfilePhotoSaveDB(profiledata).pipe(
        map(
          (profilepicdata: any) => {
            console.log('profilepicdata', profilepicdata);
          }
      ),
      catchError(err => {
        console.log(err);
        return err;
      })
      );
    })
);

@Effect({ dispatch: false })
ProfilePicFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ProfilePicUploadFail>(stepActions.StepActionTypes.STEP8_Profile_Upload_FAIL)
);

// @Effect()
// getProfilePicStep$ = this.actions$.pipe(ofType<stepActions.GetProfilePicUpload>(
//   stepActions.StepActionTypes.STEP8_GET_Profile_Upload),
//   map((action: stepActions.GetProfilePicUpload) => {
//    console.log('Profile Pic Upload', action.payload);
//    return action.payload;
//   }),
//   switchMap((progress: any) =>
//     this.stepService.GetProfilePhotoUpload(progress).pipe(
//       map(
//         (profilepicdata: any) => {
//           console.log('profilepicdata', profilepicdata);
//           return new stepActions.GetProfilePicUploadSuccess(profilepicdata);
//         }
//     ),
//     catchError(err => {
//       console.log(err);
//       return of(new stepActions.GetProfilePicUploadFail(err));
//     })
//     )
//   )
// );

/****STEP 9*****/

@Effect({ dispatch: false })
BodyMeasureStep$ = this.actions$.pipe(ofType<stepActions.BodyMeasure>(
  stepActions.StepActionTypes.STEP9_BodyMeasure),
  map((action: stepActions.BodyMeasure) => {
   console.log('Body Measure action', action.payload);
   return action.payload;
  }),
  switchMap((measures: any) =>
    this.stepService.step9_BodyMeasureSubmit(measures).pipe(
      map(
        (measureuserData: any) => {
          console.log('Body Measure Data', measureuserData);
          return new stepActions.BodyMeasureSuccess(measureuserData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.BodyMeasureFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
BodyMeasureSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.BodyMeasureSuccess>(stepActions.StepActionTypes.STEP9_BodyMeasure_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
BodyMeasureFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.BodyMeasureFail>(stepActions.StepActionTypes.STEP9_BodyMeasure_FAIL)
);


@Effect()
GetBodyMeasureStep$ = this.actions$.pipe(ofType<stepActions.GetBodyMeasure>(
  stepActions.StepActionTypes.STEP9_GET_BodyMeasure),
  map((action: stepActions.GetBodyMeasure) => {
   console.log('Get Body Measure action', action.payload);
   return action.payload;
  }),
  switchMap((measures: any) =>
    this.stepService.step9_GetBodyMeasureSubmit(measures).pipe(
      map(
        (measureuserData: any) => {
          return new stepActions.GetBodyMeasureSuccess(measureuserData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetBodyMeasureFail(err));
    })
    )
  )
);

/****STEP 10*****/

@Effect({ dispatch: false })
WeightExtraStep$ = this.actions$.pipe(ofType<stepActions.WeightExtra>(
  stepActions.StepActionTypes.STEP10_WeightExtra),
  map((action: stepActions.WeightExtra) => {
   console.log('Weight Measure action', action.payload);
   return action.payload;
  }),
  switchMap((weight: any) =>
    this.stepService.step10_WeightExtraSubmit(weight).pipe(
      map(
        (weightuserData: any) => {
          console.log('weight Measure Data', weightuserData);
          return new stepActions.WeightExtraSuccess(weightuserData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.WeightExtraFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
WeightExtraSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WeightExtraSuccess>(stepActions.StepActionTypes.STEP10_WeightExtra_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
WeightExtraFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WeightExtraFail>(stepActions.StepActionTypes.STEP10_WeightExtra_FAIL)
);

@Effect()
GetWeightExtraStep$ = this.actions$.pipe(ofType<stepActions.GetWeightExtra>(
  stepActions.StepActionTypes.STEP10_GET_WeightExtra),
  map((action: stepActions.GetWeightExtra) => {
   console.log('Get Weight action', action.payload);
   return action.payload;
  }),
  switchMap((weight: any) =>
    this.stepService.step10_GetWeightExtraSubmit(weight).pipe(
      map(
        (weightuserData: any) => {
          console.log('Get Weight Data', weightuserData);
          return new stepActions.GetWeightExtraSuccess(weightuserData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetWeightExtraFail(err));
    })
    )
  )
);

/****STEP 11*****/

@Effect({ dispatch: false })
physiquegoalStep$ = this.actions$.pipe(ofType<stepActions.PhysiqueGoal>(
  stepActions.StepActionTypes.STEP11_PhysiqueGoal),
  map((action: stepActions.PhysiqueGoal) => {
   console.log('Physique action', action.payload);
   return action.payload;
  }),
  switchMap((PhysiqueGoal: any) =>
    this.stepService.step11_PhysiqueGoalSubmit(PhysiqueGoal).pipe(
      map(
        (PhysiqueGoalData: any) => {
          console.log('Physique Data', PhysiqueGoalData);
          return new stepActions.PhysiqueGoalSuccess(PhysiqueGoalData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.PhysiqueGoalFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
physiquegoalSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PhysiqueGoalSuccess>(stepActions.StepActionTypes.STEP11_PhysiqueGoal_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
physiquegoalFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PhysiqueGoalFail>(stepActions.StepActionTypes.STEP11_PhysiqueGoal_FAIL)
);


@Effect()
getphysiquegoalStep$ = this.actions$.pipe(ofType<stepActions.GetPhysiqueGoal>(
  stepActions.StepActionTypes.STEP11_GET_PhysiqueGoal),
  map((action: stepActions.GetPhysiqueGoal) => {
   console.log('Get Physique action', action.payload);
   return action.payload;
  }),
  switchMap((PhysiqueGoal: any) =>
    this.stepService.step11_GetPhysiqueGoalSubmit(PhysiqueGoal).pipe(
      map(
        (PhysiqueGoalData: any) => {
          console.log('Get Physique Data', PhysiqueGoalData);
          return new stepActions.GetPhysiqueGoalSuccess(PhysiqueGoalData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetPhysiqueGoalFail(err));
    })
    )
  )
);
/****STEP 12*****/

@Effect({ dispatch: false })
activityLevelStep$ = this.actions$.pipe(ofType<stepActions.ActivityLevel>(
  stepActions.StepActionTypes.STEP12_ActivityLevel),
  map((action: stepActions.ActivityLevel) => {
   console.log('Activity Level action', action.payload);
   return action.payload;
  }),
  switchMap((ActivityLevel: any) =>
    this.stepService.step12_ActivityLevelSubmit(ActivityLevel).pipe(
      map(
        (ActivityLevelData: any) => {
          console.log('Activity Level Data', ActivityLevelData);
          return new stepActions.ActivityLevelSuccess(ActivityLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.ActivityLevelFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
activityLevelSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ActivityLevelSuccess>(stepActions.StepActionTypes.STEP12_ActivityLevel_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
activityLevelFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ActivityLevelFail>(stepActions.StepActionTypes.STEP12_ActivityLevel_FAIL)
);


@Effect()
getactivityLevelStep$ = this.actions$.pipe(ofType<stepActions.GetActivityLevel>(
  stepActions.StepActionTypes.STEP12_GET_ActivityLevel),
  map((action: stepActions.GetActivityLevel) => {
   console.log('Get Activity Level action', action.payload);
   return action.payload;
  }),
  switchMap((ActivityLevel: any) =>
    this.stepService.step12_GetActivityLevelSubmit(ActivityLevel).pipe(
      map(
        (ActivityLevelData: any) => {
          console.log('Activity Level Data', ActivityLevelData);
          return new stepActions.GetActivityLevelSuccess(ActivityLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetActivityLevelFail(err));
    })
    )
  )
);

/****STEP 13*****/

@Effect({ dispatch: false })
workoutLevelStep$ = this.actions$.pipe(ofType<stepActions.WorkOutLevel>(
  stepActions.StepActionTypes.STEP13_WorkOuts),
  map((action: stepActions.WorkOutLevel) => {
   console.log('Workout Level action', action.payload);
   return action.payload;
  }),
  switchMap((WorkOutLevel: any) =>
    this.stepService.step13_WorkOutLevel(WorkOutLevel).pipe(
      map(
        (WorkOutLevelData: any) => {
          console.log('WorkOutLevelData', WorkOutLevelData);
          return new stepActions.WorkOutLevelSuccess(WorkOutLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.WorkOutLevelFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
workoutLevelSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WorkOutLevelSuccess>(stepActions.StepActionTypes.STEP13_WorkOuts_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
workoutLevelFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.WorkOutLevelFail>(stepActions.StepActionTypes.STEP13_WorkOuts_FAIL)
);

@Effect()
getworkoutLevelStep$ = this.actions$.pipe(ofType<stepActions.GetWorkOutLevel>(
  stepActions.StepActionTypes.STEP13_GET_WorkOuts),
  map((action: stepActions.GetWorkOutLevel) => {
   console.log('Get Workout Level action', action.payload);
   return action.payload;
  }),
  switchMap((WorkOutLevel: any) =>
    this.stepService.step13_GetWorkOutLevel(WorkOutLevel).pipe(
      map(
        (WorkOutLevelData: any) => {
          console.log('Get WorkOutLevelData', WorkOutLevelData);
          return new stepActions.GetWorkOutLevelSuccess(WorkOutLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetWorkOutLevelFail(err));
    })
    )
  )
);

/****STEP 14*****/

@Effect({ dispatch: false })
fitnessGoalStep$ = this.actions$.pipe(ofType<stepActions.FitnessGoal>(
  stepActions.StepActionTypes.STEP14_FitnessGoal),
  map((action: stepActions.FitnessGoal) => {
   console.log('Fitness Goal action', action.payload);
   return action.payload;
  }),
  switchMap((FitnessGoalLevel: any) =>
    this.stepService.step14_FitnessGoalLevel(FitnessGoalLevel).pipe(
      map(
        (FitnessGoalLevelData: any) => {
          console.log('FitnessGoalLevelData', FitnessGoalLevelData);
          return new stepActions.FitnessGoalSuccess(FitnessGoalLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.FitnessGoalFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
fitnessGoalSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.FitnessGoalSuccess>(stepActions.StepActionTypes.STEP14_FitnessGoal_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
fitnessGoalFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.FitnessGoalFail>(stepActions.StepActionTypes.STEP14_FitnessGoal_FAIL)
);


@Effect()
getfitnessGoalStep$ = this.actions$.pipe(ofType<stepActions.GetFitnessGoal>(
  stepActions.StepActionTypes.STEP14_GET_FitnessGoal),
  map((action: stepActions.GetFitnessGoal) => {
   console.log('Get Fitness Goal action', action.payload);
   return action.payload;
  }),
  switchMap((FitnessGoalLevel: any) =>
    this.stepService.step14_GET_FitnessGoalLevel(FitnessGoalLevel).pipe(
      map(
        (FitnessGoalLevelData: any) => {
          console.log('FitnessGoalLevelData', FitnessGoalLevelData);
          return new stepActions.GetFitnessGoalSuccess(FitnessGoalLevelData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetFitnessGoalFail(err));
    })
    )
  )
);

/****STEP 15*****/

@Effect({ dispatch: false })
toolKitStep$ = this.actions$.pipe(ofType<stepActions.ToolKit>(
  stepActions.StepActionTypes.STEP15_ToolKit),
  map((action: stepActions.ToolKit) => {
   console.log('Fitness Goal action', action.payload);
   return action.payload;
  }),
  switchMap((toolkit: any) =>
    this.stepService.step15_ToolKitSubmit(toolkit).pipe(
      map(
        (toolkitData: any) => {
          console.log('toolkitLevelData', toolkitData);
          return new stepActions.ToolKitSuccess(toolkitData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.ToolKitFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
toolKitSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ToolKitSuccess>(stepActions.StepActionTypes.STEP15_ToolKit_SUCCESS),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
toolKitFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.ToolKitFail>(stepActions.StepActionTypes.STEP15_ToolKit_FAIL)
);

@Effect()
gettoolKitStep$ = this.actions$.pipe(ofType<stepActions.GetToolKit>(
  stepActions.StepActionTypes.STEP15_GET_ToolKit),
  map((action: stepActions.GetToolKit) => {
   console.log('Get toolkit action', action.payload);
   return action.payload;
  }),
  switchMap((toolkit: any) =>
    this.stepService.step15_GET_ToolKitSubmit(toolkit).pipe(
      map(
        (toolkitData: any) => {
          console.log('toolkitLevelData', toolkitData);
          return new stepActions.GetToolKitSuccess(toolkitData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetToolKitFail(err));
    })
    )
  )
);


@Effect()
ActivitiesStep$ = this.actions$.pipe(ofType<stepActions.GetActivities>(
  stepActions.StepActionTypes.Step16_GetActivities),
  map((action: stepActions.GetActivities) => {
   console.log('Get Activities', action.payload);
   return action.payload;
  }),
  switchMap((toolkit: any) =>
    this.stepService.step16_GET_Activities(toolkit).pipe(
      map(
        (activitiesData: any) => {
          console.log('activities Data', activitiesData);
          return new stepActions.GetActivitiesSuccess(activitiesData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetActivitiesFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
getActivitiessuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetActivitiesSuccess>(stepActions.StepActionTypes.Step16_GetActivities_Success),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
getactivitiesFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetActivitiesFail>(stepActions.StepActionTypes.Step16_GetActivities_Fail)
);


@Effect()
postActivitiesStep$ = this.actions$.pipe(ofType<stepActions.PostActivities>(
  stepActions.StepActionTypes.step16_postActivities),
  map((action: stepActions.PostActivities) => {
   console.log('post Activities', action.payload);
   return action.payload;
  }),
  switchMap((postActivityData: any) =>
    this.stepService.Step16_POSTActivities(postActivityData).pipe(
      map(
        (activitiesData: any) => {
          console.log('activities Data', activitiesData);
          return new stepActions.PostActivitySuccess(activitiesData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.PostActivityFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
postActivitiessuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PostActivitySuccess>(stepActions.StepActionTypes.step16_postActivities_Success),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
postactivitiesFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetActivitiesFail>(stepActions.StepActionTypes.step16_postActivities_Fail)
);

@Effect()
getActiveReceipe$ = this.actions$.pipe(ofType<stepActions.GetActiveRecipe>(
  stepActions.StepActionTypes.Step17_GetActivieReceipe),
  map((action: stepActions.GetActiveRecipe) => {
   console.log('Get Activie Recipe', action.payload);
   return action.payload;
  }),
  switchMap((receipe: any) =>
    this.stepService.step17_GET_ActiveReceipe(receipe).pipe(
      map(
        (activeRecipeData: any) => {
          console.log('activeRecipe Data', activeRecipeData);
          return new stepActions.GetActiveRecipeSuccess(activeRecipeData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.GetActiveRecipeFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
getActiveReceipesuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetActiveRecipeSuccess>(stepActions.StepActionTypes.Step17_GetActivieReceipe_Success),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
getactiveReceipeFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetActiveRecipeFail>(stepActions.StepActionTypes.Step17_GetActivieReceipe_Fail)
);


@Effect()
postActiveReceipe$ = this.actions$.pipe(ofType<stepActions.PostActiveRecipe>(
  stepActions.StepActionTypes.Step17_PostActivieReceipe),
  map((action: stepActions.PostActiveRecipe) => {
   console.log('Post Activie Recipe', action.payload);
   return action.payload;
  }),
  switchMap((receipe: any) =>
    this.stepService.Step17_POST_ActiveReceipe(receipe).pipe(
      map(
        (activeRecipeData: any) => {
          console.log('activeRecipe Data', activeRecipeData);
          return new stepActions.PostActiveRecipeSuccess(activeRecipeData);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.PostActiveRecipeFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
postActiveReceipesuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PostActiveRecipeSuccess>(stepActions.StepActionTypes.Step17_PostActivieReceipe_Success),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
postactiveReceipeFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PostActiveRecipeFail>(stepActions.StepActionTypes.Step17_PostActivieReceipe_Fail)
);


// Step 18 //

@Effect()
getDietRestictions$ = this.actions$.pipe(ofType<stepActions.GetDietRestrictions>(
  stepActions.StepActionTypes.Step18_GetDietRestrictions),
  map((action: stepActions.GetDietRestrictions) => {
   console.log('Get Diet Restrictions', action.payload);
   return action.payload;
  }),
  switchMap((receipe: any) =>
    this.stepService.step18_GET_DietRestiction(receipe).pipe(
      map(
        (dietRestiction: any) => {
          return new stepActions.GetDietRestrictionsSuccess(dietRestiction);
        }
    ),
    catchError(err => {
      return of(new stepActions.GetDietRestrictionsFail(err));
    })
    )
  )
);

@Effect({ dispatch: false })
getDietRestrictionSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetDietRestrictionsSuccess>(stepActions.StepActionTypes.Step18_GetDietRestrictionSuccess),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
getDietRestrictionFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetDietRestrictionsFail>(stepActions.StepActionTypes.Step18_GetDietRestictionFail)
);


@Effect()
getDietFoods$ = this.actions$.pipe(ofType<stepActions.GetDietFood>(
  stepActions.StepActionTypes.Step18_GetDietFood),
  map((action: stepActions.GetDietFood) => {
   console.log('Get Diet Food', action.payload);
   return action.payload;
  }),
  switchMap((receipe: any) =>
    this.stepService.step18_GET_DietFood(receipe).pipe(
      map(
        (dietRestiction: any) => {
          return new stepActions.GetDietFoodSuccess(dietRestiction);
        }
    ),
    catchError(err => {
      return of(new stepActions.GetDietFoodFailure(err));
    })
    )
  )
);

@Effect({ dispatch: false })
getDietFoodSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetDietFoodSuccess>(stepActions.StepActionTypes.Step18_GetDietFoodSuccess),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
getDietFoodFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.GetDietFoodFailure>(stepActions.StepActionTypes.step18_GetDietFoodFailure)
);


@Effect()
postDietRestictFood$ = this.actions$.pipe(ofType<stepActions.PostDietaryFood>(
  stepActions.StepActionTypes.Step18_PostDietaryFood),
  map((action: stepActions.PostDietaryFood) => {
   console.log('PostDietaryFood', action.payload);
   return action.payload;
  }),
  switchMap((receipe: any) =>
    this.stepService.Step18_POST_DietaryFood(receipe).pipe(
      map(
        (POSTdIET: any) => {
          console.log('POSTdIET: Data', POSTdIET);
          return new stepActions.PostDietaryFoodSuccess(POSTdIET);
        }
    ),
    catchError(err => {
      console.log(err);
      return of(new stepActions.PostDietaryFoodFailure(err));
    })
    )
  )
);

@Effect({ dispatch: false })
postDietRestictFoodsuccess$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PostDietaryFoodSuccess>(stepActions.StepActionTypes.Step18_PostDietaryFoodSuccess),
    tap((user: any) => {})
);

@Effect({ dispatch: false })
postDietRestictFoodFailure$: Observable<Action> = this.actions$.pipe(
    ofType<stepActions.PostDietaryFoodFailure>(stepActions.StepActionTypes.Step18_PostDietaryFoodFailure)
);


  constructor(
    private actions$: Actions,
    private stepService: StepsService,
    private router: Router
  ) { }
}
