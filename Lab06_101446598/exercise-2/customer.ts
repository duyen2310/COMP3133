class Customer {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greeter(): void {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
    
  }

let customer = new Customer("Mia", "T");
customer.greeter();  

  