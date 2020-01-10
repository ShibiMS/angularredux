import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { StepsService } from '../../steps/steps.service';
import * as stepActions from '../../steps/state/steps.actions';
import { Router } from '@angular/router';

@Injectable()
export class StepEffect {
  constructor(
    private actions$: Actions,
    private stepService: StepsService,
    private router: Router
  ) {}
  
  @Effect()
  step1Welcome$: Observable<Action> = this.actions$.pipe(ofType<stepActions.WelcomeStep>(
      stepActions.StepActionTypes.STEP1_WELCOME
    ),
    map((action: stepActions.WelcomeStep) => action.payload),
    switchMap((users: any) =>
      this.stepService.step1WelcomeSubmit(users)
    )
  );
//   @Effect({ dispatch: false })
//   StepSuccess$: Observable<Action> = this.actions$.pipe(
//     ofType<StepActions.StepUsersSuccess>(StepActions.StepActionTypes.Step_USERS_SUCCESS),
//     tap((user: any) => {
//      localStorage.setItem('token', user.payload.access_token);
//       this.router.navigate(['/steps']);
//     })
//   );

//   @Effect({ dispatch: false })
//   StepFailure$: Observable<Action> = this.actions$.pipe(
//     ofType<StepActions.StepUsersFail>(StepActions.StepActionTypes.Step_USERS_FAIL)
//   );
}