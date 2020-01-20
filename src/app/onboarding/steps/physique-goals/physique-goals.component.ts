import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
@Component({
  selector: 'app-physique-goals',
  templateUrl: './physique-goals.component.html',
  styleUrls: ['./physique-goals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhysiqueGoalsComponent implements OnInit {
  @Input() stepper: any;
  physiqueForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.physiqueForm = this.formBuilder.group({
      physiquechoice : ['', Validators.required]
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
