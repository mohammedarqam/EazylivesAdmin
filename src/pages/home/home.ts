import { Component } from '@angular/core';
import { NavController,LoadingController, MenuController } from 'ionic-angular';
import { AddFunctionHallPage } from '../add-function-hall/add-function-hall';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
  }
  ionViewDidEnter() {
  }


addFunction(){
  this.navCtrl.push(AddFunctionHallPage);
}




}
