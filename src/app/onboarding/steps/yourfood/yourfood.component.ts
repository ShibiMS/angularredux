import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-yourfood',
  templateUrl: './yourfood.component.html',
  styleUrls: ['./yourfood.component.scss']
})
export class YourfoodComponent implements OnInit {
  userId = localStorage.getItem('userid');
  @Output()outputToParent = new EventEmitter<number>();
  @Input() stepper: any;
  allActiveRecipe: any = [];
  foodSelectForm: any;
  allfoodId = [];
  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
   this.foodSelectForm = this.formBuilder.group({
      foodOptions: ['']
    });
   this.store.dispatch(new stepActions.GetActiveRecipe(this.userId));
   const activeRecipe = this.store.select(stepsData.getActiveRecipe);
   activeRecipe.subscribe(Customeractivity => {
      if (Customeractivity.getActiveReceipe) {
        this.allActiveRecipe = Customeractivity.getActiveReceipe;
        this.allActiveRecipe.forEach(element => {
          if (element.name === 'Breakfast') {
            element.selectedIcon    = 'breakfast-selected.svg';
            element.unselectedIcon  = 'breakfast.svg';
          } else if ( element.name === 'Snack1' ) {
            element.selectedIcon    = 'treat-selected.svg';
            element.unselectedIcon  = 'treat.svg';
          } else if ( element.name === 'Snack2' ) {
            element.selectedIcon    = 'snack-selected.svg';
            element.unselectedIcon  = 'snack.svg';
          } else if ( element.name === 'Lunch') {
            element.selectedIcon    = 'lunch-selected.svg';
            element.unselectedIcon  = 'lunch.svg';
          } else if ( element.name === 'Dinner' ) {
            element.selectedIcon    = 'dinner-selected.svg';
            element.unselectedIcon  = 'dinner.svg';
          }

        });

      }
    });

  }
  foodSelect(event, foodId, index) {
    if (event.checked === true) {
      this.allfoodId.push(foodId.toString());
    } else {
      this.allfoodId.splice(index, 1);
    }
  }
  yourFoodSubmit() {
    const foodobj = {
      foodLike : this.allfoodId
    };
    this.store.dispatch(new stepActions.PostActiveRecipe(foodobj));
    this.outputToParent.emit(5);
    this.stepper.next();
  }

}
