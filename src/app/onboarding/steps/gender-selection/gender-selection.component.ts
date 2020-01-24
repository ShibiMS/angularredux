import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store, State, select } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-gender-selection',
  templateUrl: './gender-selection.component.html',
  styleUrls: ['./gender-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenderSelectionComponent implements OnInit {
  @Input()  stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  genderForm: any;
  userId = localStorage.getItem('userid');
  firstName: any;
  constructor(
    private genderstepService: StepsService,
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.genderForm = this.formBuilder.group({
      genderoptions: ['', Validators.required]});
    this.store.dispatch(new stepActions.GET_GenderSelection(this.userId));
    const gender  = this.store.select(stepsData.getFirstName);
    console.log('gender', gender);
    gender.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.firstName = currentCustomer.firstName;
        this.genderForm.patchValue({
          genderoptions: currentCustomer.gender,
        });
      }
    });

  }

  genderSubmit() {
    const genderstep: any = {
      gender: this.genderForm.value.genderoptions
    };
    console.log('gender dispatch', this.genderForm.value);
    this.store.dispatch(new stepActions.GenderSelection(genderstep));
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);

  }
}
