import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsCoverComponent } from './basics-cover.component';
import { MatFormFieldModule, MatStepperModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BasicsCoverComponent],
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
  exports: [BasicsCoverComponent]
})
export class BasicsCoverModule { }
