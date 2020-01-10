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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { stepReducer } from '../state/steps.reducers';
import { StepEffect } from '../state/steps.effects';
import { HttpClientModule, HTTP_INTERCEPTORS,/*  */ } from '@angular/common/http';
import { PassInterceptor } from 'src/app/pass.interceptor';

const welcomeRoute: Routes = [
  {path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(welcomeRoute),
    StoreModule.forFeature('steps', stepReducer),
    EffectsModule.forRoot([StepEffect]),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FybrbuttonsModule,
    MatStepperModule,
    HttpClientModule
  ],
  exports: [ WelcomeComponent ],
  providers: [ HttpClientModule,
    // PassInterceptor,
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: PassInterceptor,
    //     multi: true
    //   }
     ]
})
export class WelcomeModule { }
