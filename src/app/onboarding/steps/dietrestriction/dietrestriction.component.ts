import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dietrestriction',
  templateUrl: './dietrestriction.component.html',
  styleUrls: ['./dietrestriction.component.scss']
})
export class DietrestrictionComponent implements OnInit {

  @Output()outputToParent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  dietrestrictSubmit() {
    this.outputToParent.emit(5);
  }
}
