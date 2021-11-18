class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = dob;
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}  `;
  }
  getMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x, y) {
    //dont need instance to work!
    return x + y;
  }
}
const marry = new Person("Marry", "Jane", "03-04-1995");
marry.getMarried("Smith");

console.log(marry);
console.log(marry.greeting());
console.log(Person.addNumbers(1, 3)); //no marry, no shit just do it
