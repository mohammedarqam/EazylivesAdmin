import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AddFunctionHallPage } from '../pages/add-function-hall/add-function-hall';
import { FunctionHallListPage } from '../pages/function-hall-list/function-hall-list';
import { BannersPage } from '../pages/banners/banners';
import { MainLoginPage } from '../pages/main-login/main-login';
import { AddBannersPage } from '../pages/add-banners/add-banners';
import { VendorsPage } from '../pages/vendors/vendors';


firebase.initializeApp({
  apiKey: "AIzaSyDRiZU7VAD2QXJ90hPzA6r4HPss_kY4QDU",
  authDomain: "esupplier-codebro.firebaseapp.com",
  databaseURL: "https://esupplier-codebro.firebaseio.com",
  projectId: "esupplier-codebro",
  storageBucket: "esupplier-codebro.appspot.com",
  messagingSenderId: "457078122816"

});


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddFunctionHallPage,
    FunctionHallListPage,
    MainLoginPage,
    BannersPage,
    AddBannersPage,
    VendorsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddFunctionHallPage,
    FunctionHallListPage,
    MainLoginPage,
    BannersPage,
    AddBannersPage,
    VendorsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
