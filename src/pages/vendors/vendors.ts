import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';





@IonicPage()
@Component({
  selector: 'page-vendors',
  templateUrl: 'vendors.html',
})
export class VendorsPage {

  uVerified :boolean = true;
  Verified: boolean = true;
  vendorRef = firebase.database().ref("Vendors/");
  public unverifiedV: Array<any> = [];
  public verifiedV: Array<any> = [];

  constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
    private menuCtrl: MenuController,
  public toastCtrl: ToastController,
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);

    this.getVendors();
  }

  tUV() {
    this.uVerified = !this.uVerified;
  }

  tV() {
    this.Verified = !this.Verified;
  }



  getVendors(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.vendorRef.once('value', itemSnapshot => {
      this.unverifiedV = [];
      this.verifiedV = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        
        if (itemSnap.val().Verified) {
          this.verifiedV.push(temp);
        }else{
          this.unverifiedV.push(temp);
        }

        return false;
      });
    }).then(()=>{
      loading.dismiss();
    })  ;
  }


  deleteConfirm(key) {
    let confirm = this.alertCtrl.create({
      title: 'Reject this Vendor ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Reject',
          handler: () => {
            this.rejectVendor(key);
          }
        }
      ]
    });
    confirm.present();
  }


  rejectVendor(key){
    this.vendorRef.child(key).remove().then(()=>{
      this.getVendors();
      this.presentToast("Vendor Rejected");
    }) ;
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();
  }


verifyVendor(vendor){
  let loading = this.loadingCtrl.create({
    content: 'Verifying...'
  });
  loading.present();


  this.vendorRef.child(vendor.key).set({
    Name : vendor.Name,
    Category : vendor.Category,
    Email : vendor.Email,
    Password : vendor.Password,
    Verified : "True"
  }).then(()=>{
    this.getVendors();
    loading.dismiss();
  });
}

}




