import { Component, OnInit } from '@angular/core';
import { Store, State, select } from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as loginActions from "./state/login.actions"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
    ) { }

  loginmessage = '';
  loginBtnConfig = {
    text: 'LOG IN',
    action: 'login'
  };

  fbloginBtnConfig = {
    action: 'fblogin',
    text: 'log in with facebook',
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClickEventReceived(event: string) {
    this.loginmessage = event;
    if (this.loginmessage === 'LOGIN') {
      console.log(this.loginForm.value);
      const userlogin: any = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        userType: 1
      };
      console.log(userlogin, 'userlogin');
      this.store.dispatch(new loginActions.LoginUsers(userlogin));
     // this.loginForm.reset();
    } else {
      this.store.dispatch({type: 'FBLOGIN'});
    }

  }
}
