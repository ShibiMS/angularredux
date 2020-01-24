import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-height-selection',
  templateUrl: './height-selection.component.html',
  styleUrls: ['./height-selection.component.scss']
})
export class HeightSelectionComponent implements OnInit {
  @Input()stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  selectedValue: string;
  selectedValue1: string;
  heights: any = [
    { height: '5.5' },
    { height: '6.2' },
    { height: '5.4' }
  ];
  heightForm: any;
  userId = localStorage.getItem('userid');
  constructor(
    private store: Store<any>,
    private heightstepstepService: StepsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.heightForm = this.formBuilder.group({
      heightoptions: ['', Validators.required],
      heightmeasure: ['', Validators.required]
    });

    this.store.dispatch(new stepActions.GetHeightSelection(this.userId));
    const heightData  = this.store.select(stepsData.getHeight);
    console.log('getHeight', heightData);
    heightData.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.heightForm.patchValue({
          heightoptions: currentCustomer.height,
          heightmeasure: currentCustomer.heightMeasure
        });
      }
    });

  }
  heightSubmit() {
      const htstep: any = {
        height: this.heightForm.value.heightoptions,
        heightMeasure: this.heightForm.value.heightmeasure
      };
      console.log('height dispatch', this.heightForm.value);
      this.store.dispatch(new stepActions.HeightSelection(htstep));
      this.stepper.next();
      this.outputToParent.emit(5);
  }

  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }


}
