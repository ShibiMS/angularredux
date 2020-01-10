import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourfoodComponent } from './yourfood.component';

describe('YourfoodComponent', () => {
  let component: YourfoodComponent;
  let fixture: ComponentFixture<YourfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
