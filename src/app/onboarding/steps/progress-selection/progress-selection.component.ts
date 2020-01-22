import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-progress-selection',
  templateUrl: './progress-selection.component.html',
  styleUrls: ['./progress-selection.component.scss']
})
export class ProgressSelectionComponent implements OnInit {
  @Input()stepper: any;
  progressForm: any;
  userId = localStorage.getItem('userid');
  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.progressForm = this.formBuilder.group({
      progresschoice : ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GetProgressSelection(this.userId));
    const progressData  = this.store.select(stepsData.getProgressSelection);
    console.log('progressData', progressData);
    progressData.subscribe(currentCustomer => {
      console.log('currentCustomer', currentCustomer);
      if (currentCustomer) {
        this.progressForm.patchValue({
          progresschoice: currentCustomer.bodyMeasurementBy.toString()
        });
      }
    });
  }
  progressSubmit() {
    const progressStep = {
                            bodyMeasurementBy : this.progressForm.value.progresschoice
                         };
    this.store.dispatch(new stepActions.ProgressSelection(progressStep));
    this.stepper.next();
  }
}
