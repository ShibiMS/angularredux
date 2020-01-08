import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightSelectionExtraComponent } from './weight-selection-extra.component';

describe('WeightSelectionExtraComponent', () => {
  let component: WeightSelectionExtraComponent;
  let fixture: ComponentFixture<WeightSelectionExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightSelectionExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightSelectionExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
