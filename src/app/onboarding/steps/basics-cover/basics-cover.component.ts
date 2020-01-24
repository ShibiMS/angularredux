import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-basics-cover',
  templateUrl: './basics-cover.component.html',
  styleUrls: ['./basics-cover.component.scss']
})
export class BasicsCoverComponent implements OnInit {
  @Input() stepper: any;
  @Output() outputToParent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  basicCoversubmit() {
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
