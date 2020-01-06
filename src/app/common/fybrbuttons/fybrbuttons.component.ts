import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fybrbuttons',
  templateUrl: './fybrbuttons.component.html',
  styleUrls: ['./fybrbuttons.component.scss']
})
export class FybrbuttonsComponent implements OnInit {
  @Input() buttonConfig: any;
  @Input() disable: any;
  @Output() loginBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Output() fbloginBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onloginBtnClick() {
    this.loginBtnClickEmt.emit('LOGIN');
  }

  onfbloginBtnClick() {
    this.fbloginBtnClickEmt.emit('FBLOGIN');
  }

}
