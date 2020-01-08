import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-selection',
  templateUrl: './age-selection.component.html',
  styleUrls: ['./age-selection.component.scss']
})
export class AgeSelectionComponent implements OnInit {
  selectedValue: string;
  years: any = [
    { year: '1986' },
    { year: '1985' },
    { year: '1984' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
