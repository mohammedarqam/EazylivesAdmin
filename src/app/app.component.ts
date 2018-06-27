import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";
  activePage: any;


  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform,) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: "HomePage", icon: "home" },
      { title: 'Users List', component: "ListPage", icon: "ios-person" },
      { title: 'FunctionHalls List', component: "FunctionHallListPage", icon: "ios-pin"  },
      { title: 'Deal Banners', component: "BannersPage", icon: "md-images" },
      { title: 'Vendors', component: "VendorsPage", icon: "ios-people" },


    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
/*    firebase.auth().signOut().then(() => {
      this.nav.setRoot(MainLoginPage);
    }).catch((error) => {
      console.log(error.message);
    });
  */
 this.nav.setRoot("MainLoginPage");
 
}

}
