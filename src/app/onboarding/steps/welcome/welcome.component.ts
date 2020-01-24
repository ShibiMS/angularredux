import { Component, OnInit, ViewEncapsulation, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as stepActions from '../../steps/state/steps.actions';
import { StepsService } from '../steps.service';
import { MatStepper } from '@angular/material/stepper';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  welcomeForm: any;
  @Input()stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  userId = localStorage.getItem('userid');
  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private welcomestepService: StepsService
  ) { }

  ngOnInit() {
    this.welcomeForm = this.formBuilder.group({
      firstName: ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GET_WelcomeStep(this.userId));

    const firstname  = this.store.select(stepsData.getFirstName);
    firstname.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.welcomeForm.patchValue({
          firstName: currentCustomer.firstName,
        });
      }
    });
  }

  welcomeSubmit() {
    const welcomestep: any = {
      firstName: this.welcomeForm.value.firstName
    };
    console.log('Welcome dispatch', this.welcomeForm.value);
    this.store.dispatch(new stepActions.WelcomeStep(welcomestep));
   // this.welcomestepService.step1WelcomeSubmit(welcomestep);
    this.stepper.next();
    this.outputToParent.emit(5);
  }

}
