import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AgmDirectionModule } from 'agm-direction';
const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data:any[];
  public loadedData:any[];

  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;

  constructor(
    private auth:AngularFireAuth,
    private router:Router,
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private gmap: GoogleMapComponent,
    public agmDir:AgmDirectionModule,
  ) {}

  ngOnInit(){
    // this.afs.collection(`locations`).valueChanges().subscribe(res => {
    //   this.data=res;
    //   this.loadedData=res;
    // }); 
  }

  // initializeItems():void{
  //   this.users=this.loadedUsers;
  // }

  // filterList(evt){
  //   this.initializeItems();

  //   const searchTerm = evt.srcElemet.value;

  //   if(!searchTerm){
  //     return;
  //   }

  //   this.users=this.users.filter(crntUsers =>{
  //     if (crntUsers.userName && searchTerm){
  //       if (crntUsers.userName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
  //         return true;
  //       }
  //       return false;
  //     }
  //   });
  // }
}