import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolkitComponent implements OnInit {
  @Input() stepper: any;
  toolkitForm: FormGroup;
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
  }

  toolkitSubmit() {
    console.log('submit toolkit', this.toolkitForm.value);
    const toolkit = {
      boutique  : this.toolkitForm.value.boutiqueValue ? this.toolkitForm.value.boutiqueValue : false,
      commercial: this.toolkitForm.value.commercialgymValue ? this.toolkitForm.value.commercialgymValue : false,
      equipment : [this.toolkitForm.value.homeStuffItem]
    };
    this.store.dispatch(new stepActions.ToolKit(toolkit));
    this.stepper.next();
  }

}
