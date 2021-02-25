import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../environments/environment'
import { FirebaseApp } from '@angular/fire';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeoFire } from 'geofire';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import * as geofire from 'geofirestore';

// firebase.initializeApp(environment.firebaseConfig);
// const db = firebase.firestore();
// const GeoFirestore = geofirestore.initializeApp(db);
// const geocollection = GeoFirestore.collection('locations');

@Injectable({ providedIn: 'root' })


export class GeoService {
  dbRef:any;
  geoFire: any;
  point: Observable<any>;
  isl:boolean;
  lplcs:Array<any>=[];
  hits = new BehaviorSubject([])

// Create a Firestore reference
// const firestore = firebase.firestore();

// Create a GeoFirestore reference
// const GeoFirestore = geofirestore.initializeApp(firestore);

// Create a GeoCollection reference
// const geocollection = GeoFirestore.collection('locations');

  constructor(
    private db: AngularFireDatabase) {
    // var dRef = firebase.database().ref("locations");
    this.dbRef = this.db.list(`locations`);
    // this.geoFire = new GeoFire(this.dbRef.$ref);
  }
  

  // Add a GeoDocument to a GeoCollection
  addLocation(name:string, coords:Array<number>){
    // geocollection.add({
    // Nama: name,
    // // The coordinates field must be a GeoPoint!
    // coordinates: new firebase.firestore.GeoPoint(coords[0],coords[1])
    // })
  }
  
getLocations(rad: number, coords:Array<number>){
  // // Create a GeoQuery based on a location
  // const query = geocollection.near({ center: new firebase.firestore.GeoPoint(coords[0],coords[1]), radius: rad });

  // // Get query (as Promise)
  // query.get()
  //   .then((res) => {
  //     // All GeoDocument returned by GeoQuery, like the GeoDocument added above
  //     console.log(res.docs)
  // });
}

setLocation(key:string, coords:Array<number>){
  this.geoFire.set(key, coords)
    .then(_ => console.log('location updated'))
    .catch(err => console.log(err))
}




//   getLocations(radius: number, coords:Array<number>){
//     this.geoFire.query({ center:coords, radius:radius })
  // .on('key_entered', (key, location, distance) =>{
  //   let hit = {
  //     location: location,
  //     distance: distance
  //   }
  //   let currentHits = this.hits.value
  //   currentHits.push(hit)
  //   this.hits.next(currentHits)
  // })
//   }
}