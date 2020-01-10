import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessGoalComponent } from './fitness-goal.component';

describe('FitnessGoalComponent', () => {
  let component: FitnessGoalComponent;
  let fixture: ComponentFixture<FitnessGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
