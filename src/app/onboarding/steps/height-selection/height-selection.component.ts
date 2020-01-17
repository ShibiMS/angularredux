import { Component, OnInit, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-height-selection',
  templateUrl: './height-selection.component.html',
  styleUrls: ['./height-selection.component.scss']
})
export class HeightSelectionComponent implements OnInit {
  @Input()stepper: any;
  selectedValue: string;
  heights: any = [
    { height: '5.5' },
    { height: '6.2' },
    { height: '5.4' }
  ];
  heightForm: any;
  constructor(
    private store: Store<any>,
    private heightstepstepService: StepsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.heightForm = this.formBuilder.group({
      heightoptions: ['', Validators.required]});
  }
  heightSubmit(){
      const htstep: any = {
        height: this.heightForm.value.heightoptions
      };
      console.log('height dispatch', this.heightForm.value);
      this.store.dispatch(new stepActions.HeightSelection(htstep));
      // this.heightstepstepService.step4heightSubmit(htstep);
      this.stepper.next();
  }
}
