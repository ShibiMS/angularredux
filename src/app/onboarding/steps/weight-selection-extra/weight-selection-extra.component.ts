import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-weight-selection-extra',
  templateUrl: './weight-selection-extra.component.html',
  styleUrls: ['./weight-selection-extra.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeightSelectionExtraComponent implements OnInit {
  @Input()stepper: any;
  weightSelectionForm: FormGroup;
  bodyType: any;
  userId = localStorage.getItem('userid');
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.weightSelectionForm = this.formBuilder.group({
      weightChoose: ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GetWeightExtra(this.userId));
    const WeightExtraData  = this.store.select(stepsData.getWeightExtra);
    console.log('weightSelectionForm', WeightExtraData);
    WeightExtraData.subscribe(currentCustomer => {
      console.log('currentCustomer', currentCustomer);
      if (currentCustomer) {
        this.weightSelectionForm.patchValue({
          weightChoose: currentCustomer.id
        });
      }
    });
  }

  weightselectionSubmit() {

    if (this.weightSelectionForm.value.weightChoose === 1) {
      this.bodyType = 'Entomorph';
    } else if (this.weightSelectionForm.value.weightChoose === 2) {
      this.bodyType = 'Mesomorph';
    } else {
      this.bodyType = 'Ectomorph';
    }

    const weightSelection = {
        bodyTypeId : this.weightSelectionForm.value.weightChoose,
        bodyType : this.bodyType
      };

    this.store.dispatch(new stepActions.WeightExtra(weightSelection));
    this.stepper.next();
  }

}
