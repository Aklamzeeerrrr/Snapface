import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit",
      createDate: new Date(),
      snaps: 0,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location:'Paris',
    },
    {
      id: 2,
      title: "Aklam",
      description: "Mon idependance financiere",
      createDate: new Date(),
      snaps: 0,
      imageUrl:'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg'
    },
  ];

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found !');
    }else{
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
