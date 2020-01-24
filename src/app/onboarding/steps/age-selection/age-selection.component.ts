import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-age-selection',
  templateUrl: './age-selection.component.html',
  styleUrls: ['./age-selection.component.scss']
})
export class AgeSelectionComponent implements OnInit {
  selectedValue: string;
  years: any = [
    { year: '1986' },
    { year: '1987' },
    { year: '1988' }
  ];
  userId = localStorage.getItem('userid');
  ageForm: any;
  @Input()stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  constructor(
    private store: Store<any>,
    private agestepstepService: StepsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ageForm = this.formBuilder.group({
      ageoptions: ['', Validators.required]});

    this.store.dispatch(new stepActions.GetAgeSelection(this.userId));

    const yearOfBirth  = this.store.select(stepsData.getAge);
    yearOfBirth.subscribe(currentCustomer => {
        if (currentCustomer) {
          this.ageForm.patchValue({
            ageoptions: currentCustomer.age,
          });
        }
      });

  }
  ageSubmit() {
    const agestep: any = {
      yearOfBirth: this.ageForm.value.ageoptions
    };
    console.log('Age dispatch', this.ageForm.value);
    this.store.dispatch(new stepActions.AgeSelection(agestep));
    // this.agestepstepService.step3AgeSubmit(agestep);
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
}
