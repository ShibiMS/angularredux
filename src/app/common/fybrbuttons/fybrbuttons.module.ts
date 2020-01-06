import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FybrbuttonsComponent } from './fybrbuttons.component';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FybrbuttonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports:[FybrbuttonsComponent]
})
export class FybrbuttonsModule { }
