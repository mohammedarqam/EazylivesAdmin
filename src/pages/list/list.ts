import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  userRef = firebase.database().ref("Users/");
  public users: Array<any> = [];
  totUsers: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userRef.once('value', itemSnapshot => {
      this.users = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.users.push(temp);
        this.totUsers = this.users.length;

        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }





}

