import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepscardComponent } from './stepscard.component';

describe('StepscardComponent', () => {
  let component: StepscardComponent;
  let fixture: ComponentFixture<StepscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
