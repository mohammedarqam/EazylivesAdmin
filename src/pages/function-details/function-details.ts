import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-function-details',
  templateUrl: 'function-details.html',
})
export class FunctionDetailsPage {

  function =  this.navParams.get("function"); 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FunctionDetailsPage');
  }

}
