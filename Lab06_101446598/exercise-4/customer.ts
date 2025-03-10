export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this._age = age;
    }
  
    greet(): void {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  
    getAge(): void {
      console.log(`${this.firstName} is ${this._age} years old.`);
    }
  }
  