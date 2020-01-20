import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-activity-level',
  templateUrl: './activity-level.component.html',
  styleUrls: ['./activity-level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityLevelComponent implements OnInit {
  @Input() stepper: any;
  activityLevelform: FormGroup;
  value: number = 50;
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
      sliderValue: ['']
    });
  }

  activityFormSubmit() {
    console.log('this.activityLevelform.value.sliderValue', this.activityLevelform.value.sliderValue);
    const activityLevelstep = {
      activityLevel: this.activityLevelform.value.sliderValue
    };
    this.store.dispatch(new stepActions.ActivityLevel(activityLevelstep));
    this.stepper.next();
  }

}
