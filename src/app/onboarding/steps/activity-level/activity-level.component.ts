import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-activity-level',
  templateUrl: './activity-level.component.html',
  styleUrls: ['./activity-level.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ActivityLevelComponent implements OnInit {
  value: number = 50;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: 'Only when necessary' },
      { value: 50, legend: 'a moderate amount' },
      { value: 100, legend: 'I only stop to sleep' }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
