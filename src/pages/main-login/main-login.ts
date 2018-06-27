import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-main-login',
  templateUrl: 'main-login.html',
})
export class MainLoginPage {

  user : string;
  pass :string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainLoginPage');
  }

gtHome(){
  this.navCtrl.setRoot("HomePage")
}


}
