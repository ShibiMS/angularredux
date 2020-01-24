import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-activity-level',
  templateUrl: './activity-level.component.html',
  styleUrls: ['./activity-level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityLevelComponent implements OnInit {
  @Input() stepper: any;
  @Output()outputToParent = new EventEmitter<number>();
  activityLevelform: FormGroup;
  value = 50;
  userId = localStorage.getItem('userid');
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: 'Only when necessary' },
      { value: 50, legend: 'a moderate amount' },
      { value: 100, legend: 'I only stop to sleep' }
    ]
  };
  constructor(
    private formbuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.activityLevelform = this.formbuilder.group({
      sliderValue: [0]
    });
    this.store.dispatch(new stepActions.GetActivityLevel(this.userId));
    const activitylevelData  = this.store.select(stepsData.getactivitylevel);
    console.log('activitylevelData', activitylevelData);
    activitylevelData.subscribe(currentCustomer => {
      console.log('activitylevelDatacurrentCustomer', currentCustomer);
      if (currentCustomer) {
        this.value = currentCustomer.activitylevel;
        console.log(' this.value',  this.value);
     }
    });
  }

  activityFormSubmit() {
    console.log('this.activityLevelform.value.sliderValue', this.activityLevelform.value);
    const activityLevelstep = {
      activityLevel: this.activityLevelform.value.sliderValue
    };
    this.store.dispatch(new stepActions.ActivityLevel(activityLevelstep));
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
}
