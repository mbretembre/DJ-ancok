import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string=""
  password: string=""
  cpass: string=""
  constructor(
    public auth: AngularFireAuth, 
    public navCtrl: NavController,
    public alert: AlertController,
    public user: UserService,
    public afs: AngularFirestore,
  ){ }

  ngOnInit() {
  }

  
  async signup(){
    const {email, password, cpass}= this
    if (password !== cpass){
      this.showAlert("Error!", "Password don't match")
    }
    else{
      try{
        const res =await this.auth.createUserWithEmailAndPassword(email,password)
        console.log(res)
        this.afs.doc(`users/${res.user.uid}`).set({
          email
        })
        this.user.setUser({
          email,
          uid: res.user.uid
        })
        this.showAlert("Success!", "Account created")
        this.navCtrl.navigateRoot('/signin')
      }
      catch(err){
        this.showAlert("Error!", err.message)
        console.dir(err)
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
