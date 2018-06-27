import { Component } from '@angular/core';
import { NavController,LoadingController, MenuController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userRef = firebase.database().ref("Users/");
  public users: Array<any> = [];
  totUsers: number = 0;

  functionRef = firebase.database().ref("FunctionHalls/");
  public functions: Array<any> = [];
  totFunctions: number = 0;

  vendorRef = firebase.database().ref("Vendors/");
  public vendors: Array<any> = [];
  totVendors: number = 0;

  constructor(
  public navCtrl: NavController, 
  public loadingCtrl: LoadingController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
  }

ionViewDidEnter() {
  this.getNumbers();
}

getNumbers(){
  //Loading
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();

  //getUsers
  this.userRef.once('value', itemSnapshot => {
    this.users = [];
    itemSnapshot.forEach(itemSnap => {
      this.users.push(itemSnap.val());
      this.totUsers = this.users.length;
      return false;
    });
  });  
  //getVenues
  this.functionRef.once('value', itemSnapshot => {
    this.functions = [];
    itemSnapshot.forEach(itemSnap => {
      this.functions.push(itemSnap.val());
      this.totFunctions = this.functions.length;
      return false;
    });
  });
  //getVendors
  this.vendorRef.once('value', itemSnapshot => {
    this.vendors = [];
    itemSnapshot.forEach(itemSnap => {
      this.vendors.push(itemSnap.val());
      this.totVendors = this.vendors.length;
      return false;
    });
  }).then(()=>{
    loading.dismiss();
});

}


}
