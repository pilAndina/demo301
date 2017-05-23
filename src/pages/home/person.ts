export class Person{

  name: string;
  age: number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  getAge(){
    return this.age;
  }

  getName(){
    return this.name;
  }

}