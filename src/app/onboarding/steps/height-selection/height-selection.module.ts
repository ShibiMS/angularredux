import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightSelectionComponent } from './height-selection.component';
import { MatFormFieldModule, MatStepperModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeightSelectionComponent],
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
    MatSelectModule
  ],
  exports: [HeightSelectionComponent]
})
export class HeightSelectionModule { }
