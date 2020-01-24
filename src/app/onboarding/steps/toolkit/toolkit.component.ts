import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolkitComponent implements OnInit {
  @Input()stepper: any;
  @Output()outputToParent = new EventEmitter<number>();
  toolkitForm: FormGroup;
  userId = localStorage.getItem('userid');
  commercialChecked = false;
  boutiqueChecked = false;
  constructor(
    private formbuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.toolkitForm = this.formbuilder.group({
      commercialgymValue: [],
      boutiqueValue: [],
      homeStuffItem: []
    });
    this.store.dispatch(new stepActions.GetToolKit(this.userId));
    const toolkitData  = this.store.select(stepsData.getToolkitData);
    console.log('toolkitData', toolkitData);
    toolkitData.subscribe(currentCustomer => {
      if (currentCustomer.toolkit.equipment) {
        this.toolkitForm.patchValue({
          commercialgymValue  : currentCustomer.toolkit.commercial,
          boutiqueValue       : currentCustomer.toolkit.boutique,
          homeStuffItem       : currentCustomer.toolkit.equipment[0].toString()
        });
        this.commercialChecked  = currentCustomer.toolkit.commercial;
        this.boutiqueChecked    = currentCustomer.toolkit.boutique;
      }
    });
  }

  toolkitSubmit() {
    console.log('submit toolkit', this.toolkitForm.value);
    const toolkit = {
      boutique  : this.toolkitForm.value.boutiqueValue ? this.toolkitForm.value.boutiqueValue : false,
      commercial: this.toolkitForm.value.commercialgymValue ? this.toolkitForm.value.commercialgymValue : false,
      equipment : [Number(this.toolkitForm.value.homeStuffItem)]
    };
    this.store.dispatch(new stepActions.ToolKit(toolkit));
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
}
