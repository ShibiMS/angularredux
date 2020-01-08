import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMeasurementComponent } from './body-measurement.component';
import { MatFormFieldModule, MatStepperModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BodyMeasurementComponent],
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
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [BodyMeasurementComponent]  
})
export class BodyMeasurementModule { }
