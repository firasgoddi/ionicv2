import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
  profil:any;
  id:any;
  first_name:string;
  last_name:string;
  email:string;
  phone:string;
  user:any ;
  constructor(public navCtrl: NavController,public profileProvider:ProfileProvider) {

console.log(localStorage.getItem("user"));
this.user=JSON.parse(localStorage.getItem("user"));

this.first_name=this.user.first_name;
console.log(this.first_name);
this.last_name=this.user.last_name;
this.email=this.user.email;
this.phone=this.user.phone;




  }
  modifier(id,profil){
    this.profil={
     'first_name':firstname,
     'last_name':lastname,
     'email':email,
     'phone':phone,

   }
   console.log(this.comment);
   this.profileProvider.modifier(this.id,this.profil).then(data=>{
     console.log(data);

   })
  }

}
