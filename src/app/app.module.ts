import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from './login/login.module';
import { FybrbuttonsModule } from './common/fybrbuttons/fybrbuttons.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LoginModule,
    FybrbuttonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
