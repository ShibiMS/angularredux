import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, State, select } from "@ngrx/store";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  loginBtnConfig = {
    text: 'LOG IN',
    action: 'login'
  };
  constructor() { }

  ngOnInit() {
  }

  onClickEventReceived(event: string) {
   
  }

  
}
