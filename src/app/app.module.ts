import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from './login/login.module';
import { FybrbuttonsModule } from './common/fybrbuttons/fybrbuttons.module';
import { StoreModule } from '@ngrx/store';
import { StepsModule } from './onboarding/steps/steps.module';
import { loginReducer } from './login/state/login.reducer';
import { LoginEffect } from './login/state/login.effects';
import { EffectsModule } from '@ngrx/effects';
import { StepEffect } from './onboarding/steps/state/steps.effects';
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forRoot([LoginEffect, StepEffect]),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LoginModule,
    StepsModule,
    FybrbuttonsModule
  ],
  providers: [StepsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
