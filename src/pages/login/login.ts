import {Component,NgModule} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { AuthProvider } from '../../providers/auth/auth';
import { FormsModule }  from '@angular/forms';
//import{Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,public athAuthProvider:AuthProvider) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(HomePage);
  }

  // login and go to home page

//loginfb(){
  //this.facebook.login(['email','public_profile']).then ((response: FacebookLoginResponse)=>{
//    this.facebookapi
  //})
//}

login(email,password) {
this.athAuthProvider.login(email,password).subscribe(
res=>{localStorage.setItem('token' , res['token']);
localStorage.setItem('user', JSON.stringify(res['data']))
  console.log(res);

 console.log(JSON.parse(JSON.stringify(res)).success)

 if(JSON.parse(JSON.stringify(res)).success) {
this.nav.setRoot(HomePage);

} else {

  alert('okkkkk')
}

})

}
  }
