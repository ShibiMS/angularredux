import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      this.store.dispatch({type: 'LOGIN', loginData: this.loginForm.value});
    } else {
      this.store.dispatch({type: 'FBLOGIN'});
    }

  }
}
