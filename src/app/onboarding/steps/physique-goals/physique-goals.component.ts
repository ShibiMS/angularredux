import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
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
  @Output()outputToParent = new EventEmitter<number>();
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
      if (currentCustomer) {
      console.log('PGcurrentCustomer', currentCustomer);
      let physicalgoalData;
      if (currentCustomer.physicalgoal) {
        physicalgoalData = currentCustomer.physicalgoal.filter( item => item.status === true);
        console.log('physical goal', physicalgoalData[0].id);
        this.physiqueForm.patchValue({
          physiquechoice: physicalgoalData[0].id.toString()
        });
      }
      }
    });
  }

  physiqueGoalSubmit() {
    const physicGoalstep = {
      physicGoal: this.physiqueForm.value.physiquechoice
    };
    this.store.dispatch(new stepActions.PhysiqueGoal(physicGoalstep));
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
}
