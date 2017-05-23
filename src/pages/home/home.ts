import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from './person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let person1 = new Person('nicolas',1);
    console.log(person1.getAge());
    console.log(person1.getName());
    let person2 = new Person('true',22);
    console.log(person2.getAge());
  }

}
