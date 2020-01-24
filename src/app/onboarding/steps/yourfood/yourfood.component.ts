import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yourfood',
  templateUrl: './yourfood.component.html',
  styleUrls: ['./yourfood.component.scss']
})
export class YourfoodComponent implements OnInit {

  @Output()outputToParent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  yourFoodSubmit() {
    this.outputToParent.emit(5);
  }

}
