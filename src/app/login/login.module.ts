import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { loginReducer } from './state/login.reducer';
import { LoginEffect } from './state/login.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FybrbuttonsModule } from '../common/fybrbuttons/fybrbuttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StepsModule } from '../onboarding/steps/steps.module'

const loginRoute: Routes = [
  {path: '', component: LoginComponent}
 
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forRoot([LoginEffect]),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FybrbuttonsModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule
  ],
  providers: [ HttpClientModule ]
})
export class LoginModule { }
