import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutsComponent implements OnInit {
  value: number = 4;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 3, legend: '3'},
      {value: 4, legend: '4'},
      {value: 5, legend: '5'},
      {value: 6, legend: '6'},
      {value: 7, legend: '7'},
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
