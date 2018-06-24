import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
 
user = this.navParams.get('user');
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {

    
  }

}
