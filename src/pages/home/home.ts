import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from './person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Person[] = [];
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
    let person2 = new Person('andrea',22, false);
    console.log('person2:Age',person2.getAge());//true
    console.log('person2:Name',person2.getName());//22
    console.log('person2:Single',person2.getIsSingle());//false

    this.persons.push(person1);
    this.persons.push(person2);
    this.persons.push(new Person('Nicolas',45, false));
    this.persons.push(new Person('Marcela',34, true));
    this.persons.push(new Person('vladimir',64, true));
    console.log(this.persons);
  }

  showAlert(name: string){
    alert('Hola '+ name);
  }

  removePerson(){
    this.persons.splice(0,1);
  }

  updateTwitter( event ){
    this.twitter = event.target.value;
  }

  addPerson(){
    // let name = prompt('Digite el nombre');
    // let age = prompt('Digite la edad');
    let newPerson = new Person('nicolas', 22);
    this.persons.push(newPerson);
  }

}
