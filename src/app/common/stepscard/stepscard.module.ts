import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepscardComponent } from './stepscard.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatStepperModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeModule } from 'src/app/onboarding/steps/welcome/welcome.module';
import { WelcomeComponent } from 'src/app/onboarding/steps/welcome/welcome.component';



@NgModule({
  declarations: [StepscardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatStepperModule,
    WelcomeModule
  ],
  exports: [StepscardComponent]
})
export class StepscardModule { }
