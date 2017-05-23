import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from './person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private persons: Person[] = [];
  twitter: string = '@nicobytes'; 

  constructor(public navCtrl: NavController) {

    let person1 = new Person('nicolas',1);
    console.log('person1:Age',person1.getAge());//1
    person1.setAge(23);
    console.log('person1:Age',person1.getAge());//23
    person1.setAge(2);
    console.log('person1:Age',person1.getAge());//23
    console.log('person1:Name',person1.getName());//nicolas
    console.log('person1:Single',person1.getIsSingle());//true
    let person2 = new Person('true',22, false);
    console.log('person2:Age',person2.getAge());//true
    console.log('person2:Name',person2.getName());//22
    console.log('person2:Single',person2.getIsSingle());//false

    this.persons.push(person1);
    this.persons.push(person2);
    console.log(this.persons);
  }

  showAlert(name: string){
    alert('Hola '+ name);
  }

  updateTwitter( event ){
    this.twitter = event.target.value;
  }

}
