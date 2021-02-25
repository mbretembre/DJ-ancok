import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeoService } from '../geo.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';

declare var google:any;

// const directionsService = new google.maps.DirectionsService();
// const directionsRenderer = new google.maps.DirectionsRenderer();



@Component({
  selector: 'apgmp',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
@NgModule({
  imports: [
     AgmCoreModule
   ]
 })


export class GoogleMapComponent implements OnInit {
  lat:number;
  lng:number;
  crdTmp:any[];
  ltTmp:number;
  lgTmp:number;
  started:any;
  ended:any;
  data:any[];
  loadedData:any[];
  latData:number[];
  lngData:number[];
  coords: any;
  markers:any;
  directionsDisplay: any;
  directionsService: any;
  doIt:boolean=false;
  

  constructor(
    private geo:GeoService,
    private afs:AngularFirestore,
    ) {}



  ngOnInit() {
    this.getUserLocation()
    this.afs.collection(`locations`).valueChanges().subscribe(res=> {
      this.data=res;
    });

    const map = new google.maps.Map(document.getElementById("map") as HTMLElement,
      {
        center: this.coords,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId
      }
    ); 

  }
  
  public getUserLocation(){
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
      this.coords=position.coords;
      // this.geo.getLocations(500, [this.lat, this.lng])
    });
    }
  }
  
  setRoute(a,b) {
    // const ended=document.getElementById("end")
    // console.log(this.lat, this.lng,a,b)
    
    this.started=new google.maps.LatLng(this.lat,this.lng)
    this.ended=new google.maps.LatLng(a,b)
    this.doIt=true;

    // console.log(started,ended)
    // window.alert(started + ended)
    // let directionsService=new google.maps.DirectionsService()
    // let directionsDisplay=new google.maps.DirectionsRenderer()
    // directionsService.route({

    //   origin: { lat: this.lat, lng: this.lng },
    //   destination: { lat: a, lng: b },
      
    //   travelMode: 'DRIVING'
    // }, (res, status) => {
    //   console.log(res)
    //   if (status === 'OK') {
    //     directionsDisplay.setDirections(res);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });
  }

}

// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
// }




// function initMap(): void {
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer();

//   directionsRenderer.setMap(Map);

//   const onChangeHandler = function () {
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//   };
//   (document.getElementById("start") as HTMLElement).addEventListener(
//     "change",
//     onChangeHandler
//   );
//   (document.getElementById("end") as HTMLElement).addEventListener(
//     "change",
//     onChangeHandler
//   );
// }

