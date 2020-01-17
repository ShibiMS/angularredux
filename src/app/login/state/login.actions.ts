import { Action } from "@ngrx/store";

export enum LoginActionTypes {
  LOGIN = "LOGIN", 
  LOGIN_USERS_SUCCESS = "Login Users Success",
  LOGIN_USERS_FAIL = "Login Users Fail",

}

export class LoginUsers implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: any) {}
}
export class LoginUsersSuccess implements Action {
    readonly type = LoginActionTypes.LOGIN_USERS_SUCCESS;  
    constructor(public payload: any) {}
  }
  
  export class LoginUsersFail implements Action {
    readonly type = LoginActionTypes.LOGIN_USERS_FAIL;  
    constructor(public payload: any) {}
  }
export type Action = 
| LoginUsers
| LoginUsersSuccess
| LoginUsersFail;
  
 