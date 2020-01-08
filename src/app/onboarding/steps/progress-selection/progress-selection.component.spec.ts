import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSelectionComponent } from './progress-selection.component';

describe('ProgressSelectionComponent', () => {
  let component: ProgressSelectionComponent;
  let fixture: ComponentFixture<ProgressSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
