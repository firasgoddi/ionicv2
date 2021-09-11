import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OffersProvider } from '../../providers/offers/offers';
import {CommentPage} from '../comments/comment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  offres:any;
  text:string;
  id:string;
  thumb_down:number;
  thumb_up:number;
  constructor(public navCtrl: NavController,public splashScreen: SplashScreen,public offreProvider:OffersProvider) {

this.getalloffers() ;
  }
  getalloffers(){
    this.offreProvider.getalloffers().then(data=>{

  this.offres =(data['data'][0][0]['offres']);
    })
  }
  pagecomment(id){
    this.navCtrl.push(CommentPage , {'id': id});
  }


modifierlike(id){

  this.offreProvider.modifierlike(id).then(data=>{
    console.log(data);
    this.getalloffers();

  })

}
modifierdislike(id){
console.log(id)
  this.offreProvider.modifierdislike(id).then(data=>{
    console.log(data);
    this.getalloffers();

  })

}






}
