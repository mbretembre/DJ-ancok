import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GoogleMapComponent } from './google-map/google-map.component';
import  firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { AgmDirectionModule } from 'agm-direction'
export const firebaseConfig=environment.firebaseConfig;

import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { UserService } from './user.service';
import { GeoService } from './geo.service';
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AgmDirectionModule,
    // UserService,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService, GeoService, GoogleMapComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
