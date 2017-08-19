import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { DashBoardPage } from '../../pages/dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.navCtrl = navCtrl;
    this.events = events;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    openPage(page){
    this.navCtrl.setRoot(DashBoardPage);
  }
    
  

}
