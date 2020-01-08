import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightSelectionComponent } from './weight-selection.component';

describe('WeightSelectionComponent', () => {
  let component: WeightSelectionComponent;
  let fixture: ComponentFixture<WeightSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
