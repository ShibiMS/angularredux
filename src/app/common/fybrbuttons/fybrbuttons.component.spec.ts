import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FybrbuttonsComponent } from './fybrbuttons.component';

describe('FybrbuttonsComponent', () => {
  let component: FybrbuttonsComponent;
  let fixture: ComponentFixture<FybrbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FybrbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FybrbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
