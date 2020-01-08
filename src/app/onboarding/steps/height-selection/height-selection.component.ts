import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-height-selection',
  templateUrl: './height-selection.component.html',
  styleUrls: ['./height-selection.component.scss']
})
export class HeightSelectionComponent implements OnInit {
  selectedValue: string;
  heights: any = [
    { height: '5.5' },
    { height: '6.2' },
    { height: '5.4' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
