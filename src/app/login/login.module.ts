import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { loginReducer } from "./state/login.reducer";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FybrbuttonsModule } from '../common/fybrbuttons/fybrbuttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const loginRoute : Routes = [{path:"",component:LoginComponent}]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    StoreModule.forFeature('login', loginReducer),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FybrbuttonsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
