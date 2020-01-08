import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-selection',
  templateUrl: './weight-selection.component.html',
  styleUrls: ['./weight-selection.component.scss']
})
export class WeightSelectionComponent implements OnInit {
  selectedValue: string;
  weights: any = [
    { weight: '5.5' },
    { weight: '6.2' },
    { weight: '5.4' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
