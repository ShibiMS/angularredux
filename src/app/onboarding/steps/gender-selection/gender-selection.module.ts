import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { GenderSelectionComponent } from './gender-selection.component';
import { RouterModule } from '@angular/router';
import { stepReducer } from '../state/steps.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StepEffect } from '../state/steps.effects';

@NgModule({
  declarations: [GenderSelectionComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('stepreducer', stepReducer),
    EffectsModule.forRoot([StepEffect]),
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
  exports: [GenderSelectionComponent]

})
export class GenderSelectionModule { }
