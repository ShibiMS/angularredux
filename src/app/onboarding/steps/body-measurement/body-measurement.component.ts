import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
@Component({
  selector: 'app-body-measurement',
  templateUrl: './body-measurement.component.html',
  styleUrls: ['./body-measurement.component.scss']
})
export class BodyMeasurementComponent implements OnInit {
  bodymeasureForm: FormGroup;
  @Input()stepper: any;
  measurechecked: string;
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
