import { Action } from "@ngrx/store";

export enum StepActionTypes {
  
  STEP1_WELCOME         = "STEP1_WELCOME", 
  STEP1_WELCOME_SUCCESS = "STEP1_WELCOME_SUCCESS",
  STEP1_WELCOME_FAIL    = "STEP1_WELCOME_FAIL",
  
  /*****Step 2******/
  
  STEP2_GENDER_SELECTION            = "GENDER SELECTION",
  STEP2_GENDER_SELECTION_SUCCESS    = "GENDER SUCCESS",
  STEP2_GENDER_SELECTION_FAIL        = "GENDER FAIL",

  /*****Step 3******/
  
  STEP3_AGE_SELECTION            = "AGE SELECTION",
  STEP3_AGE_SELECTION_SUCCESS    = "AGE SUCCESS",
  STEP3_AGE_SELECTION_FAIL        = "AGE FAIL",

  /*****Step 4******/
  
  STEP4_Height_SELECTION            = "Height SELECTION",
  STEP4_Height_SELECTION_SUCCESS    = "Height SUCCESS",
  STEP4_Height_SELECTION_FAIL       = "Height FAIL",

  /*****Step 5******/
  
  STEP5_Weight_SELECTION            = "Weight SELECTION",
  STEP5_Weight_SELECTION_SUCCESS    = "Weight SUCCESS",
  STEP5_Weight_SELECTION_FAIL       = "Weight FAIL",

  /*****Step 7******/
  
  STEP7_Progress_SELECTION          = "Progress Selection",
  STEP7_Progress_SELECTION_SUCCESS  = "Progress Success",
  STEP7_Progress_SELECTION_FAIL     = "Progress Fail",

  /*****Step 8******/
  
  STEP8_Profile_Upload          = "Profile picture upload",
  STEP8_Profile_Upload_SUCCESS  = "Profile picture upload success",
  STEP8_Profile_Upload_FAIL     = "Profile picture upload fail",

  /*****Step 9******/
  
  STEP9_BodyMeasure           = "Body Measurement",
  STEP9_BodyMeasure_SUCCESS   = "Body Measurement Success",
  STEP9_BodyMeasure_FAIL      = "Body Measurement Fail",

  /*****Step 10******/
  
  STEP10_WeightExtra           = "Weight Extra Selection",
  STEP10_WeightExtra_SUCCESS   = "Weight Extra Success",
  STEP10_WeightExtra_FAIL      = "Weight Extra Fail",

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

/***** STEP 2 *****/
export class GenderSelection implements Action {
  readonly type = StepActionTypes.STEP2_GENDER_SELECTION;  
  constructor(public payload: any) {}
}

export class GenderSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP2_GENDER_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class GenderSelectionFail implements Action {
  readonly type = StepActionTypes.STEP2_GENDER_SELECTION_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 3****/ 

export class AgeSelection implements Action {
  readonly type = StepActionTypes.STEP3_AGE_SELECTION;  
  constructor(public payload: any) {}
}

export class AgeSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP3_AGE_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class AgeSelectionFail implements Action {
  readonly type = StepActionTypes.STEP3_AGE_SELECTION_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 4 ****/ 

export class HeightSelection implements Action {
  readonly type = StepActionTypes.STEP4_Height_SELECTION;  
  constructor(public payload: any) {}
}
export class HeightSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP4_Height_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class HeightSelectionFail implements Action {
  readonly type = StepActionTypes.STEP4_Height_SELECTION_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 5****/ 

export class WeightSelection implements Action {
  readonly type = StepActionTypes.STEP5_Weight_SELECTION;  
  constructor(public payload: any) {}
}
export class WeightSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP5_Weight_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class WeightSelectionFail implements Action {
  readonly type = StepActionTypes.STEP5_Weight_SELECTION_FAIL;
  constructor(public payload: any) {}
}


/*** STEP 7****/ 

export class ProgressSelection implements Action {
  readonly type = StepActionTypes.STEP7_Progress_SELECTION;  
  constructor(public payload: any) {}
}
export class ProgressSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP7_Progress_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class ProgressSelectionFail implements Action {
  readonly type = StepActionTypes.STEP7_Progress_SELECTION_FAIL;
  constructor(public payload: any) {}
}


/*** STEP 8****/ 

export class ProfilePicUpload implements Action {
  readonly type = StepActionTypes.STEP8_Profile_Upload;  
  constructor(public payload: any) {}
}
export class ProfilePicUploadSuccess implements Action {
  readonly type = StepActionTypes.STEP8_Profile_Upload_SUCCESS;
  constructor(public payload: any) {
    console.log('pic success upload', payload);
  }
}
export class ProfilePicUploadFail implements Action {
  readonly type = StepActionTypes.STEP8_Profile_Upload_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 9****/ 

export class BodyMeasure implements Action {
  readonly type = StepActionTypes.STEP9_BodyMeasure;  
  constructor(public payload: any) {}
}
export class BodyMeasureSuccess implements Action {
  readonly type = StepActionTypes.STEP9_BodyMeasure_SUCCESS;
  constructor(public payload: any) {}
}
export class BodyMeasureFail implements Action {
  readonly type = StepActionTypes.STEP9_BodyMeasure_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 10****/ 

export class WeightExtra implements Action {
  readonly type = StepActionTypes.STEP10_WeightExtra;  
  constructor(public payload: any) {}
}
export class WeightExtraSuccess implements Action {
  readonly type = StepActionTypes.STEP10_WeightExtra_SUCCESS;
  constructor(public payload: any) {}
}
export class WeightExtraFail implements Action {
  readonly type = StepActionTypes.STEP10_WeightExtra_FAIL;
  constructor(public payload: any) {}
}

export type Action = 
| WelcomeStep
| WelcomeStepSuccess
| WelcomeStepFail
| GenderSelection
| GenderSelectionSuccess
| GenderSelectionFail
| AgeSelection
| AgeSelectionSuccess
| AgeSelectionFail
| HeightSelection
| HeightSelectionSuccess
| HeightSelectionFail
| WeightSelection
| WeightSelectionSuccess
| WeightSelectionFail
| ProgressSelection
| ProgressSelectionSuccess
| ProgressSelectionFail
| ProfilePicUpload
| ProfilePicUploadSuccess
| ProfilePicUploadFail
| BodyMeasure
| BodyMeasureSuccess
| BodyMeasureFail
| WeightExtra
| WeightExtraSuccess
| WeightExtraFail
;
  
 