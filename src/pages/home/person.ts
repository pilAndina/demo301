export class Person{
  
  constructor(
    private name:string,
    private age:number,
    private isSingle: boolean = true
  ){}

  getAge(){
    return this.age;
  }

  getName(){
    return this.name;
  }

  getIsSingle(){
    return this.isSingle;
  }

  setAge(age: number){
    if(age >= 18){
      this.age = age;
      this.getState();
    }
  }

  private getState(){
    return 'Hola';
  }

}