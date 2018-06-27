import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-function-hall-list',
  templateUrl: 'function-hall-list.html',
})
export class FunctionHallListPage {

  functionRef = firebase.database().ref("FunctionHalls/");
  public functions: Array<any> = [];
  totFunctions: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.functionRef.once('value', itemSnapshot => {
      this.functions = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.functions.push(temp);
        this.totFunctions = this.functions.length;

        return false;
      });
    }).then(()=>{
      loading.dismiss();
    })  ;
  }

newFunction(){
  this.navCtrl.push("AddFunctionHallPage");
}



}



