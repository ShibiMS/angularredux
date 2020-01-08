import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiqueGoalsComponent } from './physique-goals.component';

describe('PhysiqueGoalsComponent', () => {
  let component: PhysiqueGoalsComponent;
  let fixture: ComponentFixture<PhysiqueGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiqueGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiqueGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
