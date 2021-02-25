import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  email: string=""
  password: string=""
  constructor(   
    public alert: AlertController,
    public auth: AngularFireAuth, 
    public navCtrl: NavController,
    public db:AngularFireDatabase,
    public user:UserService,

  ){ }
  
  async signin(){
    const{email, password}=this
    try{
        const res =await this.auth.signInWithEmailAndPassword(email,password)

        if(res.user){
          this.user.setUser({
            email,
            uid: res.user.uid
          })
        }
        
        this.navCtrl.navigateRoot('/home')
    }catch(err){
      console.dir(err)
      if(err.code === "auth/wrong-password"){
        this.showAlert("Error!", "Please check your password")        
      }
      else{
        this.showAlert("Error!", "Please check your email")
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons:["OK"]
    })
    await alert.present()
  }

}
