import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';
import * as _ from 'lodash';

@Component({
  selector: 'app-dietrestriction',
  templateUrl: './dietrestriction.component.html',
  styleUrls: ['./dietrestriction.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DietrestrictionComponent implements OnInit {

  userId = localStorage.getItem('userid');
  @Output() outputToParent = new EventEmitter<number>();
  dietRestriction: any;
  dietFood: any;
  grouppedDietArrayArray: any;
  isDisabled = true;
  restictId: any = [];
  foodId: any = [];
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
        this.dietRestriction.forEach(element => {
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
             this.DietrestrictCheckedbasedon(element.id);
          }
        });
        console.log('this.dietRestriction', this.dietRestriction);

      }
    });
    DietFoods.subscribe(DietFood => {
      if (DietFood.getDietFood) {
        this.dietFood = DietFood.getDietFood;
        this.dietFood.forEach(element => {
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
        console.log('this.dietFood', this.dietFood);
      }
    });

  }

  DietrestrictChecked(Id, event, index) {
    if (event.checked === true) {
      this.restictId.push(Id);
      if (this.dietFood) {
        this.dietFood.forEach(element => {
            if (element.DietaryRestrictionId === Id) {
              element.selectFood = true;
            }
        });
      }
    } else {
      this.restictId = this.restictId.filter(item => item !== Id);
      this.dietFood.forEach(element => {
        if (element.DietaryRestrictionId === Id) {
          element.selectFood = false;
        }
    });
    }
    /*if (this.dietFood) {
      this.dietFood.forEach(element => {
        if (event.checked === true) {
          if (element.DietaryRestrictionId === Id) {
            element.selectFood = true;
          } else {
            // element.selectFood = false;
          }
        } else {
          if (element.DietaryRestrictionId === Id) {
            element.selectFood = false;
          }
          //element.selectFood = false;
        }
      });
    }*/
    console.log('iD', this.restictId);


    this.dietRestriction = this.dietRestriction.map(element => {
      if (element.id === Id) {
        element.selected = !element.selected;
        console.log('element.selected', element.selected);
        if (element.selected === true) {
          this.dietFood = this.dietFood.map(elementnew => {
            console.log('element.selected', elementnew.selectFood);
            if (elementnew.DietaryRestrictionFoodId === Id) {
              elementnew.selectFood = !elementnew.selectFood;
            }
            return element;
          });
        }
      }
      return element;
    });
    console.log('this.dietRestrictionqqqq', this.dietRestriction);

  }

  restrictFooditem(fId, rId, event) {
    if (event.checked === true) {
      this.foodId.push({
        dietaryRestrictionId: rId,
        restrictionFoodId: fId
      });
    } else {
      this.foodId = this.foodId.filter(item =>
        item.dietaryRestrictionId !== fId);
    }
    console.log('Food array', this.foodId);

    this.dietFood = this.dietFood.map(element => {
      console.log('element.selected', element.selectFood);
      if (element.DietaryRestrictionFoodId === fId) {
        element.selectFood = !element.selectFood;
      }
      return element;
    });
  }

  dietrestrictSubmit() {
    this.outputToParent.emit(5);
    const dietFood = this.foodId;
    this.store.dispatch(new stepActions.PostDietaryFood(dietFood));
  }

  DietrestrictCheckedbasedon(Id) {
      console.log('Id', Id);
      if (this.dietFood) {
      this.dietFood.forEach(element => {
          if (element.DietaryRestrictionId === Id) {
            element.selectFoodcondition = true;
          } else {
            element.selectFoodcondition = false;
          }
      });
    }
  }

}
