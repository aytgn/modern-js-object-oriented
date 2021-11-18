// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  this.age = this.calculateAge();
}

// console.log(this)//window object; bcs its run in chrome window!
const brad = new Person("Brad", "9-10-1981");
const john = new Person("John", 20);

console.log(brad);
console.log(john);
