import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import moment from 'moment';
import * as firebase from 'firebase';
import { BannersPage } from '../banners/banners';


@IonicPage()
@Component({
  selector: 'page-add-banners',
  templateUrl: 'add-banners.html',
})
export class AddBannersPage {

  order: string;
  img1: any;
  img2: any;
  url: any;

  bannerRef = firebase.database().ref("Banners");


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, ) {
  }



  UploadPic() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();


    firebase.storage().ref("Banners/" + this.order).put(this.img2).then((Upic) => {
      this.url = Upic.downloadURL;
      this.sendPost();
    }).then(() => {
      this.presentToast();
      this.img1 = null;
      this.order = null;
    }).then(() => {
      loading.dismiss();
    });
  }

  sendPost() {
    this.bannerRef.push({
      PostTime: moment().format("DD/MMM-HH:mm"),
      Image: this.url,
    }).then(() => {
      this.navCtrl.setRoot(BannersPage);
    });

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Posted',
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();


  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.img2 = file;
  }


removeImage(){
  this.img1=null;
}

}
