import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { HomePageRoutingModule } from './home-routing.module';
import { from } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyD9ELgQ9SxK1BRmqPGy_UdR1q1L41VgbI4' }),
  ],
  declarations: [HomePage, GoogleMapComponent]
})
export class HomePageModule {}
