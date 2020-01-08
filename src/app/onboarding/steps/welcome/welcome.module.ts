import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../../../login/state/login.reducer';
import { LoginEffect } from '../../../login/state/login.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatStepperModule } from '@angular/material';
import { WelcomeComponent } from './welcome.component';
import { EffectsModule } from '@ngrx/effects';
import { FybrbuttonsModule } from 'src/app/common/fybrbuttons/fybrbuttons.module';

const welcomeRoute: Routes = [
  {path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(welcomeRoute),
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FybrbuttonsModule,
    MatStepperModule
    // StoreModule.forFeature('login', loginReducer),
    // EffectsModule.forRoot([LoginEffect]),
  ],
  exports: [ WelcomeComponent ]
})
export class WelcomeModule { }
