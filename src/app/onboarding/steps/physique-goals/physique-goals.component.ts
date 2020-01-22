import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-physique-goals',
  templateUrl: './physique-goals.component.html',
  styleUrls: ['./physique-goals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhysiqueGoalsComponent implements OnInit {
  @Input() stepper: any;
  physiqueForm: FormGroup;
  userId = localStorage.getItem('userid');
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.physiqueForm = this.formBuilder.group({
      physiquechoice : ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GetPhysiqueGoal(this.userId));
    const physiquegoalData  = this.store.select(stepsData.getPhysiquegoal);
    console.log('physique goal', physiquegoalData);
    physiquegoalData.subscribe(currentCustomer => {
      console.log('PGcurrentCustomer', currentCustomer);
      if (currentCustomer) {
        this.physiqueForm.patchValue({
          weightChoose: currentCustomer.id
        });
      }
    });
  }

  physiqueGoalSubmit() {
    const physicGoalstep = {
      physicGoal: this.physiqueForm.value.physiquechoice
    };
    this.store.dispatch(new stepActions.PhysiqueGoal(physicGoalstep));
    this.stepper.next();
  }

}
