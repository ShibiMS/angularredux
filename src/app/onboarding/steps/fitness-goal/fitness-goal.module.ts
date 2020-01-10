import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessGoalComponent } from './fitness-goal.component';
import {
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatFormFieldModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [FitnessGoalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule
  ],
  exports: [FitnessGoalComponent],

})
export class FitnessGoalModule { }
