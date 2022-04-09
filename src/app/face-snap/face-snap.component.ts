import { Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  implements OnInit{
  @Input() faceSnap! : FaceSnap;
  buttonTextt! : string;

  constructor(private faceSnapsService : FaceSnapsService,
              private router: Router) {
  }

  ngOnInit() {
    this.buttonTextt = 'Oh Snap!';
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}

