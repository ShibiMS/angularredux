import { Component, OnInit, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-weight-selection',
  templateUrl: './weight-selection.component.html',
  styleUrls: ['./weight-selection.component.scss']
})
export class WeightSelectionComponent implements OnInit {
  @Input()stepper: any;
  selectedValue: string;
  weights: any = [
    { weight: '5.5' },
    { weight: '6.2' },
    { weight: '5.4' }
  ];
  weightForm: any;
  userId = localStorage.getItem('userid');
  constructor(
    private store: Store<any>,
    private weightstepstepService: StepsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.weightForm = this.formBuilder.group({
      weightoptions: ['', Validators.required],
      weightmeasure: ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GetWeightSelection(this.userId));
    const weightData  = this.store.select(stepsData.getWeight);
    console.log('getWeight', weightData);
    weightData.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.weightForm.patchValue({
          weightoptions: currentCustomer.weight,
          weightmeasure: currentCustomer.weightMeasure
        });
      }
    });
  }

  weightSubmit() {
    const wtstep: any = {
      weight: this.weightForm.value.weightoptions,
      weightMeasure: this.weightForm.value.weightmeasure
    };
    console.log('weight dispatch', this.weightForm.value);
    this.store.dispatch(new stepActions.WeightSelection(wtstep));
   // this.weightstepstepService.step5weightSubmit(wtstep);
    this.stepper.next();
  }
}
