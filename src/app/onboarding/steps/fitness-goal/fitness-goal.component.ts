import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-fitness-goal',
  templateUrl: './fitness-goal.component.html',
  styleUrls: ['./fitness-goal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FitnessGoalComponent implements OnInit {
  @Input() stepper: any;
  fitnessGoalForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.fitnessGoalForm = this.formbuilder.group({
      fitnessGoalValue: []
    })
  }

  fitnessGoalSubmit() {
    const fitnessgoalstep = {
      fitnessgoal: [this.fitnessGoalForm.value.fitnessGoalValue]
    };
    this.store.dispatch(new stepActions.FitnessGoal(fitnessgoalstep));
  }
}
