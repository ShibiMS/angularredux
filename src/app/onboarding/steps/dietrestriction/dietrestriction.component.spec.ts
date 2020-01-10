import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietrestrictionComponent } from './dietrestriction.component';

describe('DietrestrictionComponent', () => {
  let component: DietrestrictionComponent;
  let fixture: ComponentFixture<DietrestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietrestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietrestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
