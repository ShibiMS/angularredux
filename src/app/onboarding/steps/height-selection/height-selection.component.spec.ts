import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightSelectionComponent } from './height-selection.component';

describe('HeightSelectionComponent', () => {
  let component: HeightSelectionComponent;
  let fixture: ComponentFixture<HeightSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
