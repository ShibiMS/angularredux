import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { WelcomeModule } from './welcome/welcome.module';
import { Routes, RouterModule } from '@angular/router';
import {
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StepscardModule } from 'src/app/common/stepscard/stepscard.module';
import { GenderSelectionModule } from './gender-selection/gender-selection.module';
import { AgeSelectionModule } from './age-selection/age-selection.module';
import { HeightSelectionModule } from './height-selection/height-selection.module';
import { WeightSelectionModule } from './weight-selection/weight-selection.module';
import { BasicsCoverModule } from './basics-cover/basics-cover.module';
import { ProgressSelectionModule } from './progress-selection/progress-selection.module';
import { PhotoUploadSectionModule } from './photo-upload-section/photo-upload-section.module';
import { BodyMeasurementModule } from './body-measurement/body-measurement.module';
import { WeightSelectionExtraModule } from './weight-selection-extra/weight-selection-extra.module';
import { PhysiqueGoalsModule } from './physique-goals/physique-goals.module';
import { ActivityLevelModule } from './activity-level/activity-level.module';

const stepRoute: Routes = [
  { path: 'steps', component: StepsComponent },
];
@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(stepRoute),
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatCardModule,
    StepscardModule,
    WelcomeModule,
    GenderSelectionModule,
    AgeSelectionModule,
    HeightSelectionModule,
    WeightSelectionModule,
    BasicsCoverModule,
    ProgressSelectionModule,
    PhotoUploadSectionModule,
    BodyMeasurementModule,
    WeightSelectionExtraModule,
    PhysiqueGoalsModule,
    ActivityLevelModule
  ]
})
export class StepsModule { }
