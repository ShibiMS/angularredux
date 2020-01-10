import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import {
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ActivitiesComponent],
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
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  exports: [ActivitiesComponent],
})
export class ActivitiesModule { }
