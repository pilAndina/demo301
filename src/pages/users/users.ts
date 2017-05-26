import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  rockband: any=  {
    title: 'Nirvana',
    img: 'http://www.informabtl.com/wp-content/uploads/2017/02/nirvana-with-the-lights-out-cover.jpg',
    text: 'sfkjhsadf sdjfhasdkf',
    people: 4,
    albums: 12,
    fans: 23476
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToHeroesPage(){
    this.navCtrl.push('HeroesPage');
  }

}
