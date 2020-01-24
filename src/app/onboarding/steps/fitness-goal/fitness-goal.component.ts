import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-fitness-goal',
  templateUrl: './fitness-goal.component.html',
  styleUrls: ['./fitness-goal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FitnessGoalComponent implements OnInit {
  @Input() stepper: any;
  @Output()outputToParent = new EventEmitter<number>();
  fitnessGoalForm: FormGroup;
  userId = localStorage.getItem('userid');
  constructor(
    private formbuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.fitnessGoalForm = this.formbuilder.group({
      fitnessGoalValue: []
    });
    this.store.dispatch(new stepActions.GetFitnessGoal(this.userId));
    const fitnessgoalData  = this.store.select(stepsData.getactivitylevel);
    console.log('fitnessgoalData', fitnessgoalData);
    fitnessgoalData.subscribe(currentCustomer => {
      console.log('fitnessgoalData cc', currentCustomer);
      if (currentCustomer) {
        let fitnessgoal;
        if (currentCustomer.fitnessGoal) {
          console.log('fitnesssssss');
          fitnessgoal = currentCustomer.fitnessGoal.filter( item => item.status === true);
          console.log('fitness goal', fitnessgoal[0].id);
          this.fitnessGoalForm.patchValue({
            fitnessGoalValue: fitnessgoal[0].id.toString()
          });
        }
      }
    });
  }

  fitnessGoalSubmit() {
    const fitnessgoalstep = {
      fitnessgoal: [Number(this.fitnessGoalForm.value.fitnessGoalValue)]
    };
    this.store.dispatch(new stepActions.FitnessGoal(fitnessgoalstep));
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
}
