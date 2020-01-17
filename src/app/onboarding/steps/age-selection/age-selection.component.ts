import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

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
  ageForm: any;
  @Input()stepper: any;
  constructor(
    private store : Store<any>,
    private agestepstepService: StepsService,
    private formBuilder:  FormBuilder
  ) { }

  ngOnInit() {
    this.ageForm = this.formBuilder.group({
      ageoptions: ['', Validators.required]});
  }
  ageSubmit(){
    const agestep: any = {
      yearOfBirth: this.ageForm.value.ageoptions
    };
    console.log('Age dispatch', this.ageForm.value);
    this.store.dispatch(new stepActions.AgeSelection(agestep));
    // this.agestepstepService.step3AgeSubmit(agestep);
    this.stepper.next();
  }

}
