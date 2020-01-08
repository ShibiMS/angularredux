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

@NgModule({
  declarations: [GenderSelectionComponent],
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
  exports: [GenderSelectionComponent]

})
export class GenderSelectionModule { }
