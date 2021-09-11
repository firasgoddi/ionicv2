import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Component, ElementRef ,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;

  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }
  ionViewDidLoad(){
     this.loadMap();
   }
     loadMap(){

   this.geolocation.getCurrentPosition().then((position) => {

     let latLng = new google.maps.LatLng(35.836862 ,10.590777);

     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }

     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }, (err) => {
     console.log(err);
   });

 }

}
