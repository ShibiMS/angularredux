import { Action } from "@ngrx/store";

export enum StepActionTypes {
  STEP1_WELCOME         = "STEP1_WELCOME", 
  STEP1_WELCOME_SUCCESS = "STEP1_WELCOME_SUCCESS",
  STEP1_WELCOME_FAIL    = "STEP1_WELCOME_FAIL"
}

export class WelcomeStep implements Action {  
  readonly type = StepActionTypes.STEP1_WELCOME;
  constructor(public payload: any) {}
}
export class WelcomeStepSuccess implements Action {
    readonly type = StepActionTypes.STEP1_WELCOME_SUCCESS;  
    constructor(public payload: any) {}
  }
  
export class WelcomeStepFail implements Action {
    readonly type = StepActionTypes.STEP1_WELCOME_FAIL;  
    constructor(public payload: any) {}
  }
export type Action = 
| WelcomeStep
| WelcomeStepSuccess
| WelcomeStepFail;
  
 