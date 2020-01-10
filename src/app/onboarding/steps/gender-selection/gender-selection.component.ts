import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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
    private formBuilder:  FormBuilder
  ) { }

  ngOnInit() {
    this.genderForm = this.formBuilder.group({
      genderoptions: ['', Validators.required]});
  }
  
  genderSubmit(){
    const genderstep: any = {
      gender: this.genderForm.value.genderoptions
    };
    console.log('123', this.genderForm.value);
    // this.store.dispatch(new stepActions.WelcomeStep(welcomestep));
    this.genderstepService.step1GenderSubmit(genderstep);
    this.stepper.next(); 
  }

}
