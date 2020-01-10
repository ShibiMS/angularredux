import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLevelComponent } from './activity-level.component';
import { MatFormFieldModule, MatStepperModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [ActivityLevelComponent],
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
    Ng5SliderModule
  ],
  exports: [ActivityLevelComponent],

})
export class ActivityLevelModule { }
