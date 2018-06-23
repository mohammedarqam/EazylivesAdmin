import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Validators,FormGroup, FormBuilder } from '@angular/forms';




@IonicPage()
@Component({
  selector: 'page-add-function-hall',
  templateUrl: 'add-function-hall.html',
})
export class AddFunctionHallPage {

  functionHallRef = firebase.database().ref("FunctionHalls/");

  private functionHall : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder : FormBuilder) {

    this.functionHall = this.formBuilder.group({
      name: ['', Validators.required],
      rent: ['', Validators.required],
      capacity:['', Validators.required],
      address: ['', Validators.required],
      cName: ['', Validators.required],
      cNum: ['', Validators.required],
      cEmail : ['',Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFunctionHallPage');
  }

addFunctionHall(){
  this.functionHallRef.push(this.functionHall.value).then(()=>{
    this.navCtrl.pop();
  });
}



}
