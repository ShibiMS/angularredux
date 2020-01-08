import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeSelectionComponent } from './age-selection.component';

describe('AgeSelectionComponent', () => {
  let component: AgeSelectionComponent;
  let fixture: ComponentFixture<AgeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
