import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepsService } from '../steps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log('123', this.ageForm.value);
    // this.store.dispatch(new stepActions.WelcomeStep(welcomestep));
    this.agestepstepService.step1AgeSubmit(agestep);
    this.stepper.next();
  }

}
