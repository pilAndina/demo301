import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'pil-rockband',
  templateUrl: 'rockband.html'
})
export class RockbandComponent {

  @Input() rockband: any = {};

  constructor(
    private navCtrl: NavController
  ) {}

  showAlert(){
    alert('Hola '+ this.rockband.title);
  }

  goToEventsPage(){
    this.navCtrl.push('EventsPage');
  }

}
