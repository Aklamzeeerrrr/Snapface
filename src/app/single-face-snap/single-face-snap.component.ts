import {Component,OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$! : Observable<FaceSnap>
  buttonTextt! : string;

  constructor(private faceSnapsService : FaceSnapsService,
              private router : ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonTextt = 'Oh Snap!';
    const faceSnapId = +this.router.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number){
    if(this.buttonTextt === 'Oh Snap!'){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() =>
          this.buttonTextt = 'Oops, unSnap!')
      );
    }else{
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() =>
          this.buttonTextt = 'Oh Snap!'
        )
      );
    }
  }
}
