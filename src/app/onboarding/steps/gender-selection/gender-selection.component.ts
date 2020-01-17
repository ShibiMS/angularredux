import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store, State, select } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-gender-selection',
  templateUrl: './gender-selection.component.html',
  styleUrls: ['./gender-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenderSelectionComponent implements OnInit {
  @Input()stepper: any;
  genderForm: any;
  constructor(
    private genderstepService: StepsService,
    private formBuilder:  FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.genderForm = this.formBuilder.group({
      genderoptions: ['', Validators.required]});
  }
  
  genderSubmit(){
    const genderstep: any = {
      gender: this.genderForm.value.genderoptions
    };
    console.log('gender dispatch', this.genderForm.value);
    this.store.dispatch(new stepActions.GenderSelection(genderstep));
    // this.genderstepService.step2GenderSubmit(genderstep);
    this.stepper.next(); 
  }

}
