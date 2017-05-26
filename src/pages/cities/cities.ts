import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CitiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {

  rockbands: any[] = [];
  today: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rockbands.push({
      title: 'Nirvana',
      img: 'http://www.informabtl.com/wp-content/uploads/2017/02/nirvana-with-the-lights-out-cover.jpg',
      text: 'sfkjhsadf sdjfhasdkf',
      people: 4,
      albums: 12,
      fans: 23476
    });
    this.rockbands.push({
      title: 'Los prisioneros',
      img: 'http://static.t13.cl/images/sizes/1200x675/1443301910-prisioneros.jpg',
      text: 'sfkjhsadf sdjfhasdkf',
      people: 24,
      albums: 2323,
      fans: 23476
    });
    this.rockbands.push({
      title: 'Cafe tacuba',
      img: 'http://gruporivas.com.mx/wp-content/uploads/2016/03/cafe-tacvba-auditorio-banamex-13-diciembre.jpg',
      text: 'sfkjhsadf sdjfhasdkf',
      people: 34,
      albums: 3242,
      fans: 23476
    });
    console.log(this.rockbands);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesPage');
  }

  goToUsersPage(){
    this.navCtrl.push('UsersPage');
  }

  goToPeetsPage(){
    this.navCtrl.push('PeetsPage');
  }

}
