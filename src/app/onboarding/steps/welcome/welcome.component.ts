import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as stepActions from '../../steps/state/steps.actions';
import { StepsService } from '../steps.service';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  welcomeForm: any;
  @Input()stepper: any;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private welcomestepService: StepsService
  ) { }

  ngOnInit() {
    this.welcomeForm = this.formBuilder.group({
      firstName: ['', Validators.required]});
  }

  welcomeSubmit() {
    const welcomestep: any = {
      userId: '',
      accessToken: '',
      firstName: this.welcomeForm.value.firstName
    };
    console.log('123', this.welcomeForm.value);
    // this.store.dispatch(new stepActions.WelcomeStep(welcomestep));
    this.welcomestepService.step1WelcomeSubmit(welcomestep);
    this.stepper.next();

  }

}
