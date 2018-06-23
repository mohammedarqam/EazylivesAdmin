import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';
import { AddBannersPage } from '../add-banners/add-banners';



@IonicPage()
@Component({
  selector: 'page-banners',
  templateUrl: 'banners.html',
})
export class BannersPage {

  public banners: Array<any> = [];


  bannerRef = firebase.database().ref("Banners");


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController, ) {
  }

  ionViewDidLoad() {
    this.getBanners();
  }














  getBanners() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.bannerRef.once('value', itemSnapshot => {
      this.banners = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.banners.push(temp);
        return false;
      });
    }).then(() => {
      loading.dismiss();
    });
  }
















  gtAddBanner(){
    this.navCtrl.push(AddBannersPage);
  }



  deleteBanner(key) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Banner ?',
      message: 'This banner cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(key);
          }
        }
      ]
    });
    confirm.present();
  }



  delete(key) {
    this.bannerRef.child(key).remove().then(() => {
      this.getBanners();
      this.presentToast();
    });
  }




  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Banner Deleted',
      duration: 4000,
    });
    toast.present();
  }

}
