import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolkitComponent } from './toolkit.component';
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
  declarations: [ToolkitComponent],
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
  exports: [ToolkitComponent]
})
export class ToolkitModule { }
