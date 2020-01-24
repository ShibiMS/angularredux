import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  @Input() stepper: any;
  @Output()outputToParent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  activitySubmit() {
    this.outputToParent.emit(5);
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
}
