//Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
//Prototype
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}
//Inherit prototype
Customer.prototype = Object.create(Person.prototype);

//Create a customer
const customer1 = new Customer("Tom", "Smith", "555-555", "Standard");

console.log(customer1);
console.log(customer1.greeting()); // not a function, bcs not inheriting prototype of person, IF not Customer.prototype = Object.create(Person.prototype)
