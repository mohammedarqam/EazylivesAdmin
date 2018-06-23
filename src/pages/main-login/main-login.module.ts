import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainLoginPage } from './main-login';

@NgModule({
  declarations: [
    MainLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(MainLoginPage),
  ],
})
export class MainLoginPageModule {}
