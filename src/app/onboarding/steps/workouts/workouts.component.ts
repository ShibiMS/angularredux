import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutsComponent implements OnInit {
  @Input() stepper: any;
  workOutForm: FormGroup
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
  constructor(
    private formbuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.workOutForm = this.formbuilder.group({
      workoutlevel: [3]
    });
  }

  workOutSubmit() {
    console.log('workout value', this.workOutForm.value.workoutlevel);
    const workoutstep = {
      workoutPerWeek: this.workOutForm.value.workoutlevel
    };
    this.store.dispatch(new stepActions.WorkOutLevel(workoutstep));
    this.stepper.next();
  }

}
