import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsCoverComponent } from './basics-cover.component';

describe('BasicsCoverComponent', () => {
  let component: BasicsCoverComponent;
  let fixture: ComponentFixture<BasicsCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
