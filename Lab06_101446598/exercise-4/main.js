"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer("Alice", "Brown", 30);
customer.greet(); // Expected output: "Hello, Alice Brown!"
customer.getAge(); // Expected output: "Alice is 30 years old."
