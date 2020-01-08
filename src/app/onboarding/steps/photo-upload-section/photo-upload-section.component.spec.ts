import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadSectionComponent } from './photo-upload-section.component';

describe('PhotoUploadSectionComponent', () => {
  let component: PhotoUploadSectionComponent;
  let fixture: ComponentFixture<PhotoUploadSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploadSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
