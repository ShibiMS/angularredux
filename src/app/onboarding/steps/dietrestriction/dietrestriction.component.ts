import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';
import * as _ from 'lodash';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-dietrestriction',
  templateUrl: './dietrestriction.component.html',
  styleUrls: ['./dietrestriction.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DietrestrictionComponent implements OnInit {

  userId = localStorage.getItem('userid');
  @Input()stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  dietRestriction: any;
  dietFood: any;
  grouppedDietArrayArray: any;
  isDisabled = true;
  restictId: any = [];
  foodId: any = [];
  // alterFoodState;
  disableState: any = [];
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {

    this.store.dispatch(new stepActions.GetDietRestrictions(this.userId));
    this.store.dispatch(new stepActions.GetDietFood(this.userId));
    const DietRestictions = this.store.select(stepsData.getDietRestriction);
    const DietFoods = this.store.select(stepsData.getDietFood);
    DietRestictions.subscribe(currentCustomer => {
      if (currentCustomer.getDietRestriction) {
        this.dietRestriction = currentCustomer.getDietRestriction;
        this.dietRestriction.map((element, index) => {
          console.log('element.selected', element.selected);
          if (element.name === 'Dairy free') {
            element.SelectedIcon = 'dairy-free.svg';
            element.UnselectedIcon = 'dairy-free copy.svg';
          } else if (element.name === ' Glueten free') {
            element.SelectedIcon = 'gluten free.svg';
            element.UnselectedIcon = 'gluten free copy.svg';
          } else if (element.name === 'Paleo') {
            element.SelectedIcon = 'paleo.svg';
            element.UnselectedIcon = 'paleo copy.svg';
          } else if (element.name === ' Vegan') {
            element.SelectedIcon = 'vegan.svg';
            element.UnselectedIcon = 'vegan copy.svg';
          } else if (element.name === ' Vegetarian') {
            element.SelectedIcon = 'vegetarian.svg';
            element.UnselectedIcon = 'vegetarian copy.svg';
          } else if (element.name === ' Pescetarian') {
            element.SelectedIcon = 'pescetarian.svg';
            element.UnselectedIcon = 'pescetarian copy.svg';
          }
          if (element.selected === true) {
            this.DietrestrictCheckedbasedon(element.id, index);
            console.log('element.selected==', element.selected);
            // const checkedstate = { checked : true };
            // this.DietrestrictChecked(element.id, checkedstate, '');
          }
        });
        console.log('this.dietRestriction', this.dietRestriction);
      }
    });
    DietFoods.subscribe(DietFood => {
      if (DietFood.getDietFood) {
        this.dietFood = DietFood.getDietFood;
        this.dietFood.map(element => {
          if (element.DietaryRestrictionFoodName === 'Beef') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Chicken') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Salmon') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Other fish') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Pork') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Shellfish') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Eggs') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'tofu') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Oats') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Potatoes') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Corn') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Pasta') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Rice') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Quinoa') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Sweet Potatoes') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Garlic') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Onions') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Nightshades') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Sea Food') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          } else if (element.DietaryRestrictionFoodName === 'Fish') {
            element.SelectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + '.svg';
            element.UnselectedIcon = element.DietaryRestrictionFoodName.toLowerCase() + ' copy.svg';
          }
        });

        this.grouppedDietArrayArray = _.groupBy(this.dietFood, 'DietaryRestrictionId');

        console.log('grouppedArray', this.grouppedDietArrayArray);
        // console.log('this.dietFood', this.dietFood);
      }
    });

  }

  DietrestrictChecked(dietrestrict, event, index1) {
    const index = 0;
    this.grouppedDietArrayArray = _.groupBy(this.dietFood, 'DietaryRestrictionId');
    if (event.checked === true) {
      this.disableState[index1] = true;
      this.restictId.push(dietrestrict.id);
      if (this.grouppedDietArrayArray) {
        if (this.grouppedDietArrayArray[dietrestrict.id][index].DietaryRestrictionId === dietrestrict.id) {
          this.grouppedDietArrayArray[dietrestrict.id][index].selectFood = false;
          this.grouppedDietArrayArray[dietrestrict.id][index].selectFoodcondition = false;
        } else {
          this.grouppedDietArrayArray[dietrestrict.id][index].selectFood = true;
          this.grouppedDietArrayArray[dietrestrict.id][index].selectFoodcondition = true;
        }
      }
    } else {
      this.disableState[index1] = false;
      if (this.grouppedDietArrayArray[dietrestrict.id][index].DietaryRestrictionId === dietrestrict.id) {
        this.grouppedDietArrayArray[dietrestrict.id].map(element => {
          element.selectFood          = false;
          element.selectFoodcondition = false;
        });
      } else {
        this.grouppedDietArrayArray[dietrestrict.id][index].selectFood = true;
        this.grouppedDietArrayArray[dietrestrict.id][index].selectFoodcondition = true;
      }
    }
  }

  restrictFooditem(itemFood, event) {
    if (event.checked === true) {
      itemFood.selectFoodcondition = true;
      itemFood.selectFood = true;
      this.foodId.push({
        dietaryRestrictionId: itemFood.DietaryRestrictionId,
        restrictionFoodId: itemFood.DietaryRestrictionFoodId
      });
    } else {
      itemFood.selectFoodcondition = false;
      itemFood.selectFood = false;
      this.foodId = this.foodId.filter(item =>
        item.dietaryRestrictionId !== itemFood.DietaryRestrictionFoodId);
    }
    console.log('Food array', this.foodId);

    // this.dietFood = this.dietFood.map(element => {
    //   console.log('element.selected', element.selectFood);
    //   if (element.DietaryRestrictionFoodId === itemFood.DietaryRestrictionFoodId) {
    //     element.selectFood = !element.selectFood;
    //   }
    //   return element;
    // });
  }

  dietrestrictSubmit() {
    this.outputToParent.emit(5);
    const dietFood = this.foodId;
    this.store.dispatch(new stepActions.PostDietaryFood(dietFood));
  }

  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }
  DietrestrictCheckedbasedon(Id, ind) {
    console.log('Id', Id);
    if (this.dietFood) {
      this.dietFood.map(element => {
        if (element.DietaryRestrictionId === Id) {
          if (element.selectFood === true) {
            this.disableState[ind] = true;
          }

          if (element.selectFood === false && element.DietaryRestrictionSeleted === false) {
            element.selectFoodcondition = false;
          } else if (element.selectFood === false && element.DietaryRestrictionSeleted === true) {
            element.selectFoodcondition = false;
          } else {
            element.selectFoodcondition = true;
          }
        } else {
          element.selectFoodcondition = true;
        }
      });
    }
    console.log('Diet Food', this.dietFood);

  }

}
