import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutsComponent implements OnInit {
  @Input() stepper: any;
  @Output()outputToParent = new EventEmitter<number>();
  workOutForm: FormGroup;
  userId = localStorage.getItem('userid');
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
    this.store.dispatch(new stepActions.GetWorkOutLevel(this.userId));
    const WorkoutData  = this.store.select(stepsData.getworkoutData);
    console.log('WorkoutDATA', WorkoutData);
    WorkoutData.subscribe(currentCustomer => {
      console.log('activitylevelDatacurrentCustomer', currentCustomer);
      if (currentCustomer) {
        this.workOutForm.patchValue({
          workoutlevel: currentCustomer.workoutPerWeek
        });
      }
    });
  }

  workOutSubmit() {
    console.log('workout value', this.workOutForm.value.workoutlevel);
    const workoutstep = {
      workoutPerWeek: this.workOutForm.value.workoutlevel
    };
    this.store.dispatch(new stepActions.WorkOutLevel(workoutstep));
    this.stepper.next();
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
