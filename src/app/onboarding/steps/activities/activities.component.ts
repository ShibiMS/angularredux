import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';
import * as stepsData from '../../steps/state/steps.reducers';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit {
  @Input() stepper: any;
  @Output() outputToParent = new EventEmitter<number>();
  userId = localStorage.getItem('userid');
  allActivities: any;
  activitiesForm: any;
  array       = [];
  finalArray  = [];
  obj: any;
  selected = -1;
  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.activitiesForm = this.formBuilder.group({
      activityoptions: ['', Validators.required]
    });

    this.store.dispatch(new stepActions.GetActivities(this.userId));
    const activities = this.store.select(stepsData.getActivitiesData);
    activities.subscribe(Customeractivity => {
      if (Customeractivity) {
        this.allActivities = Customeractivity.getActivities;
        console.log('all activity', this.allActivities);
      }
    });
  }
  stepsToback() {
    this.stepper.previous();
    this.outputToParent.emit(-5);
  }
  skipTonext() {
    this.stepper.next();
    this.outputToParent.emit(5);
  }

  creatorLikeClicked(workoutId, workoutTypeId, creatorLike) {
     let duplicate;
     let indexval;
     this.obj = {
      workoutId,
      workoutTypeId,
      creatorLike,
    };
     this.array.push(this.obj);
     const dups = [];
     this.array.map((el) => {
      duplicate = dups.find(item => item.workoutId === el.workoutId && item.workoutTypeId === el.workoutTypeId);
      if (duplicate) {
        indexval = dups.findIndex(index => index.workoutId === workoutId && index.workoutTypeId === workoutTypeId);        
        if (indexval !== -1) {
          dups[indexval].creatorLike = creatorLike;
        }
      } else {
        dups.push(el);
      }
    });
     this.finalArray = dups;
  }
  activitySubmit() {
    this.outputToParent.emit(5);
    this.store.dispatch(new stepActions.PostActivities(this.finalArray));
    this.stepper.next();
  }
}
