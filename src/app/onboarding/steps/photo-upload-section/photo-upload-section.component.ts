import { Component, OnInit, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { Store, State, select } from '@ngrx/store';
import * as stepActions from '../../steps/state/steps.actions';

@Component({
  selector: 'app-photo-upload-section',
  templateUrl: './photo-upload-section.component.html',
  styleUrls: ['./photo-upload-section.component.scss']
})
export class PhotoUploadSectionComponent implements OnInit {
  srcResult: any;
  fileuploadurl: void;
  @Input()stepper: any;
  constructor(
    private fileuploadService: StepsService,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }


  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.fileuploadurl = event.target.files[0]; // read file as data url
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => { // called once readAsDataURL is completed
        this.srcResult = reader.result;
      };
    }
  }

  uploadProfilePic() {
   // this.fileuploadService.ProfilePhotoUpload(this.fileuploadurl);
    this.store.dispatch(new stepActions.ProfilePicUpload(this.fileuploadurl));
    this.stepper.next();
  }
}
