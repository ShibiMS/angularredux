import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-body-measurement',
  templateUrl: './body-measurement.component.html',
  styleUrls: ['./body-measurement.component.scss']
})
export class BodyMeasurementComponent implements OnInit {
  bodymeasureForm: FormGroup;
  @Input()stepper: any;
  measurechecked: string;
  togglechecked = true;
  userId = localStorage.getItem('userid');
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.bodymeasureForm = this.formBuilder.group({
      chest: ['', Validators.required],
      waist: ['', Validators.required],
      hips: ['', Validators.required],
      thigh: ['', Validators.required],
      calf: ['', Validators.required],
      bicep: ['', Validators.required]
    });
    this.store.dispatch(new stepActions.GetBodyMeasure(this.userId));
    const bodyMeasureData  = this.store.select(stepsData.getBodyMeasurements);
    bodyMeasureData.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.bodymeasureForm.patchValue({
          chest :  currentCustomer.Measure.chest,
          waist :  currentCustomer.Measure.waist,
          hips  :  currentCustomer.Measure.hips,
          thigh :  currentCustomer.Measure.thigh,
          calf  :  currentCustomer.Measure.calf,
          bicep :  currentCustomer.Measure.bicep
        });
        if (currentCustomer.Measure.measureType === 'inch') {
          this.togglechecked = true;
        } else {
          this.togglechecked = false;
        }
      }
    });
  }

  onChangeMeasurement(value) {
    if (value.checked === true) {
      this.measurechecked = 'inch';
    } else {
      this.measurechecked = 'meter';
    }
  }

  bodyMeasureSubmit() {
  const measureStep: any = {
    type: 'measure',
    measure : {
                calf  : this.bodymeasureForm.value.calf,
                hips  : this.bodymeasureForm.value.hips,
                bicep : this.bodymeasureForm.value.bicep,
                chest : this.bodymeasureForm.value.chest,
                thigh : this.bodymeasureForm.value.thigh,
                waist : this.bodymeasureForm.value.waist,
                measureType: this.measurechecked
              }
  };
  this.store.dispatch(new stepActions.BodyMeasure(measureStep));
  this.stepper.next();
  }
}
