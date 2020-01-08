import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, tap, switchMap } from "rxjs/operators";

import { LoginService } from "../login.service";
import * as loginActions from "../state/login.actions";
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
  
  @Effect()
  loginUsers$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginUsers>(
      loginActions.LoginActionTypes.LOGIN
    ),
    map((action: loginActions.LoginUsers) => action.payload),
    switchMap((users: any) =>
      this.loginService.verifyloggedInUsers(users).pipe(
        map(
          (loginuserdata: any) =>
            new loginActions.LoginUsersSuccess(loginuserdata)
        ),
        catchError(err => of(new loginActions.LoginUsersFail(err)))
      )
    )
  );
  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginUsersSuccess>(loginActions.LoginActionTypes.LOGIN_USERS_SUCCESS),
    tap((user: any) => {
     localStorage.setItem('token', user.payload.access_token);
      this.router.navigate(['/steps']);
    })
  );

  @Effect({ dispatch: false })
  loginFailure$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginUsersFail>(loginActions.LoginActionTypes.LOGIN_USERS_FAIL)
  );
}