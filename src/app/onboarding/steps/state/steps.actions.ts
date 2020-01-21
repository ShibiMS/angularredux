import { Action } from "@ngrx/store";

export enum StepActionTypes {
  
  STEP1_WELCOME         = "STEP1_WELCOME", 
  STEP1_WELCOME_SUCCESS = "STEP1_WELCOME_SUCCESS",
  STEP1_WELCOME_FAIL    = "STEP1_WELCOME_FAIL",
  
  /***Get Welcome***/

  STEP1_GETWELCOME         = "STEP1 GET WELCOME", 
  STEP1_GETWELCOME_SUCCESS = "STEP1 GET WELCOME SUCCESS",
  STEP1_GETWELCOME_FAIL    = "STEP1 GET WELCOME FAIL",

  /***Get Welcome***/

  /*****Step 2******/
  
  STEP2_GENDER_SELECTION          = "GENDER SELECTION",
  STEP2_GENDER_SELECTION_SUCCESS  = "GENDER SUCCESS",
  STEP2_GENDER_SELECTION_FAIL     = "GENDER FAIL",

  // **** Get Gender ****/

  STEP2_GET_GENDER_SELECTION          = "GET GENDER SELECTION",
  STEP2_GET_GENDER_SELECTION_SUCCESS  = "GET GENDER SUCCESS",
  STEP2_GET_GENDER_SELECTION_FAIL     = "GET GENDER FAIL", 

  // **** Get Gender ****/


  /*****Step 3******/
  
  STEP3_AGE_SELECTION             = "AGE SELECTION",
  STEP3_AGE_SELECTION_SUCCESS     = "AGE SUCCESS",
  STEP3_AGE_SELECTION_FAIL        = "AGE FAIL",

  STEP3_GET_AGE_SELECTION         = "GET AGE SELECTION",
  STEP3_GET_AGE_SELECTION_SUCCESS = "GET AGE SUCCESS",
  STEP3_GET_AGE_SELECTION_FAIL    = "GET AGE FAIL",

  /*****Step 4******/
  
  STEP4_Height_SELECTION            = "Height SELECTION",
  STEP4_Height_SELECTION_SUCCESS    = "Height SUCCESS",
  STEP4_Height_SELECTION_FAIL       = "Height FAIL",

  STEP4_GET_Height_SELECTION         = "GET Height SELECTION",
  STEP4_GET_Height_SELECTION_SUCCESS = "GET Height SUCCESS",
  STEP4_GET_Height_SELECTION_FAIL    = "GET Height FAIL",

  /*****Step 5******/
  
  STEP5_Weight_SELECTION            = "Weight SELECTION",
  STEP5_Weight_SELECTION_SUCCESS    = "Weight SUCCESS",
  STEP5_Weight_SELECTION_FAIL       = "Weight FAIL",

  STEP5_GET_Weight_SELECTION         = "Get Weight Selection",
  STEP5_GET_Weight_SELECTION_SUCCESS = "Get Weight Success",
  STEP5_GET_Weight_SELECTION_FAIL    = "Get Weight Fail",

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
  
  STEP10_WeightExtra          = "Weight Extra Selection",
  STEP10_WeightExtra_SUCCESS  = "Weight Extra Success",
  STEP10_WeightExtra_FAIL     = "Weight Extra Fail",

  /*****Step 11******/
  
  STEP11_PhysiqueGoal         = "Physique Goal Selection",
  STEP11_PhysiqueGoal_SUCCESS = "Physique Goal Success",
  STEP11_PhysiqueGoal_FAIL    = "Physique Goal Fail",


  /*****Step 12******/
  
  STEP12_ActivityLevel          = "Activity Level",
  STEP12_ActivityLevel_SUCCESS  = "Activity Level Success",
  STEP12_ActivityLevel_FAIL     = "Activity Level Fail",

  /*****Step 13******/
  
  STEP13_WorkOuts          = "WorkOuts",
  STEP13_WorkOuts_SUCCESS  = "WorkOuts Success",
  STEP13_WorkOuts_FAIL     = "WorkOuts Fail",

  /*****Step 14******/
  
  STEP14_FitnessGoal          = "FitnessGoal",
  STEP14_FitnessGoal_SUCCESS  = "FitnessGoal Success",
  STEP14_FitnessGoal_FAIL     = "FitnessGoal Fail",

  /*****Step 15******/
  
  STEP15_ToolKit          = "ToolKit",
  STEP15_ToolKit_SUCCESS  = "ToolKit Success",
  STEP15_ToolKit_FAIL     = "ToolKit Fail",
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

/***GET Data***/
export class GET_WelcomeStep implements Action {  
  readonly type = StepActionTypes.STEP1_GETWELCOME;
  constructor(public payload: any) {}  
}
export class GET_WelcomeStepSuccess implements Action {
    readonly type = StepActionTypes.STEP1_GETWELCOME_SUCCESS;  
    constructor(public payload: any) {}
}
  
export class GET_WelcomeStepFail implements Action {
    readonly type = StepActionTypes.STEP1_GETWELCOME_FAIL;  
    constructor(public payload: any) {}
}
/***GET Data***/


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

// ***** Get Gender ******/

export class GET_GenderSelection implements Action {
  readonly type = StepActionTypes.STEP2_GET_GENDER_SELECTION;  
  constructor(public payload: any) {}
}

export class GET_GenderSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP2_GET_GENDER_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class GET_GenderSelectionFail implements Action {
  readonly type = StepActionTypes.STEP2_GET_GENDER_SELECTION_FAIL;
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

export class GetAgeSelection implements Action {
  readonly type = StepActionTypes.STEP3_GET_AGE_SELECTION;  
  constructor(public payload: any) {}
}

export class GetAgeSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP3_GET_AGE_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class GetAgeSelectionFail implements Action {
  readonly type = StepActionTypes.STEP3_GET_AGE_SELECTION_FAIL;
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

export class GetHeightSelection implements Action {
  readonly type = StepActionTypes.STEP4_GET_Height_SELECTION;  
  constructor(public payload: any) {}
}
export class GetHeightSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP4_GET_Height_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class GetHeightSelectionFail implements Action {
  readonly type = StepActionTypes.STEP4_GET_Height_SELECTION_FAIL;
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

export class GetWeightSelection implements Action {
  readonly type = StepActionTypes.STEP5_GET_Weight_SELECTION;  
  constructor(public payload: any) {}
}
export class GetWeightSelectionSuccess implements Action {
  readonly type = StepActionTypes.STEP5_GET_Weight_SELECTION_SUCCESS;
  constructor(public payload: any) {}
}
export class GetWeightSelectionFail implements Action {
  readonly type = StepActionTypes.STEP5_GET_Weight_SELECTION_FAIL;
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

/*** STEP 11****/ 

export class PhysiqueGoal implements Action {
  readonly type = StepActionTypes.STEP11_PhysiqueGoal;  
  constructor(public payload: any) {}
}
export class PhysiqueGoalSuccess implements Action {
  readonly type = StepActionTypes.STEP11_PhysiqueGoal_SUCCESS;
  constructor(public payload: any) {}
}
export class PhysiqueGoalFail implements Action {
  readonly type = StepActionTypes.STEP11_PhysiqueGoal_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 12****/ 

export class ActivityLevel implements Action {
  readonly type = StepActionTypes.STEP12_ActivityLevel;  
  constructor(public payload: any) {}
}
export class ActivityLevelSuccess implements Action {
  readonly type = StepActionTypes.STEP12_ActivityLevel_SUCCESS;
  constructor(public payload: any) {}
}
export class ActivityLevelFail implements Action {
  readonly type = StepActionTypes.STEP12_ActivityLevel_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 13****/ 

export class WorkOutLevel implements Action {
  readonly type = StepActionTypes.STEP13_WorkOuts;  
  constructor(public payload: any) {}
}
export class WorkOutLevelSuccess implements Action {
  readonly type = StepActionTypes.STEP13_WorkOuts_SUCCESS;
  constructor(public payload: any) {}
}
export class WorkOutLevelFail implements Action {
  readonly type = StepActionTypes.STEP13_WorkOuts_FAIL;
  constructor(public payload: any) {}
}


/*** STEP 14****/ 

export class FitnessGoal implements Action {
  readonly type = StepActionTypes.STEP14_FitnessGoal;  
  constructor(public payload: any) {}
}
export class FitnessGoalSuccess implements Action {
  readonly type = StepActionTypes.STEP14_FitnessGoal_SUCCESS;
  constructor(public payload: any) {}
}
export class FitnessGoalFail implements Action {
  readonly type = StepActionTypes.STEP14_FitnessGoal_FAIL;
  constructor(public payload: any) {}
}

/*** STEP 15****/ 

export class ToolKit implements Action {
  readonly type = StepActionTypes.STEP15_ToolKit;  
  constructor(public payload: any) {}
}
export class ToolKitSuccess implements Action {
  readonly type = StepActionTypes.STEP15_ToolKit_SUCCESS;
  constructor(public payload: any) {}
}
export class ToolKitFail implements Action {
  readonly type = StepActionTypes.STEP15_ToolKit_FAIL;
  constructor(public payload: any) {}
}

export type Action = 
| WelcomeStep
| WelcomeStepSuccess
| WelcomeStepFail
| GET_WelcomeStep
| GET_WelcomeStepSuccess
| GET_WelcomeStepFail
| GenderSelection
| GenderSelectionSuccess
| GenderSelectionFail
| GET_GenderSelection
| GET_GenderSelectionSuccess
| GET_GenderSelectionFail
| AgeSelection
| AgeSelectionSuccess
| AgeSelectionFail
| GetAgeSelection
| GetAgeSelectionSuccess
| GetAgeSelectionFail
| HeightSelection
| HeightSelectionSuccess
| HeightSelectionFail
| GetHeightSelection
| GetHeightSelectionSuccess
| GetHeightSelectionFail
| WeightSelection
| WeightSelectionSuccess
| WeightSelectionFail
| GetWeightSelection
| GetWeightSelectionSuccess
| GetWeightSelectionFail
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
| PhysiqueGoal
| PhysiqueGoalSuccess
| PhysiqueGoalFail
| ActivityLevel
| ActivityLevelSuccess
| ActivityLevelFail
| WorkOutLevel
| WorkOutLevelSuccess
| WorkOutLevelFail
| FitnessGoal
| FitnessGoalSuccess
| FitnessGoalFail
| ToolKit
| ToolKitSuccess
| ToolKitFail
;
  
 