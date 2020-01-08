import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit { 
  mode = 'determinate';
  value = 5;
  bufferValue = 1;
  constructor() {}

  ngOnInit() {
  }

}
