import {Component,OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap;
  buttonTextt! : string;

  constructor(private faceSnapsService : FaceSnapsService,
              private router : ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonTextt = 'Oh Snap!';
    const faceSnapId = +this.router.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.buttonTextt === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonTextt = 'Oops, unSnap!';
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonTextt = 'Oh Snap!';
    }
  }
}
