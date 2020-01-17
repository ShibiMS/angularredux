import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-progress-selection',
  templateUrl: './progress-selection.component.html',
  styleUrls: ['./progress-selection.component.scss']
})
export class ProgressSelectionComponent implements OnInit {
  @Input()stepper: any;
  progressForm: any;
  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.progressForm = this.formBuilder.group({
      progresschoice : ['', Validators.required]
    })
  }
  progressSubmit(){
    const progressStep = {
                            bodyMeasurementBy : this.progressForm.value.progresschoice
                         };
    this.store.dispatch(new stepActions.ProgressSelection(progressStep));
    this.stepper.next();
  }
}
