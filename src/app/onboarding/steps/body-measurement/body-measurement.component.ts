import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-measurement',
  templateUrl: './body-measurement.component.html',
  styleUrls: ['./body-measurement.component.scss']
})
export class BodyMeasurementComponent implements OnInit {
  bodymeasureForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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

}
