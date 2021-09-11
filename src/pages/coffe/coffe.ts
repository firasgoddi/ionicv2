import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ AjoutPage } from '../ajoutoffre/ajout';
import { FormsModule }  from '@angular/forms';
import { ListcoffeeProvider } from '../../providers/listcoffee/listcoffee';
@Component({
  selector: 'page-coffe',
  templateUrl: 'coffe.html'
})
export class CoffePage {
id:any ;
coffes:any;
coffe:any ;
nom:any;
thumbup:any;
thumbdown:any;
phones:any;
opening:any;
closing:any;
	establish:any;
  constructor(public navCtrl: NavController, public navParams :NavParams,public listcoffee:ListcoffeeProvider) {

this.id=this.navParams.get('id');
console.log(this.id);
this.getall();
  }

nextpage(){
  this.navCtrl.push(AjoutPage);
}
coffeelike(){

  this.listcoffee.coffeelike(this.id).then(data=>{
    console.log(data);
this.getall();

  })
}
coffeedislike(){
//console.log(id)
  this.listcoffee.coffeedislike(this.id).then(data=>{
    console.log(data);
this.getall();

  })

}
getall(){
  this.listcoffee.getall(this.id).then( val => {
    console.log(val);
    this.coffe=val[0];

this.nom=val[0].name;
this.thumbup=val[0].thumb_up;
this.thumbdown=val[0].thumb_down;
this.phones=val[0].phone;
this.opening=val[0].opening_hour;
this.closing=val[0].closing_hour;
this.establish=val[0].established;

console.log(val[0].name);
console.log(val[0].thumb_up);
console.log(val[0].phone);

  })
}
}
