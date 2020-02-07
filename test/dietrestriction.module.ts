import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietrestrictionComponent } from './dietrestriction.component';
import { MatFormFieldModule, MatStepperModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [DietrestrictionComponent],
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
    Ng5SliderModule,
    MatCheckboxModule
  ],
  exports: [DietrestrictionComponent]
})
export class DietrestrictionModule { }
