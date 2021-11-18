//string
const name1 = "Jeff";
const name2 = new String("Jeff");
console.log(name2);
// name2.foo = "bar";
console.log(name2);
console.log(typeof name1); //string
console.log(typeof name2); //object (not primitive anymore)
if (name2 === "Jeff") {
  //type is not string
  console.log("yes");
}
if (name2 == "Jeff") {
  console.log("yesss");
}
//number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); //nut primitive value 5 object!
//function
const getSum1 = function (x, y) {
  return x + y;
};
console.log(getSum1(1, 1));
const getSum2 = new Function("x", "y", "return x+y");
console.log(getSum2(1, 2));
//object
const john1 = { name: "John" };
const john2 = new Object({ name: "Johny" });
console.log(john1);
console.log(john2);
//arrays
const array1 = [1, 2, 3];
const array2 = new Array(1, 2, 3);
console.log(array1, typeof array1);
console.log(array2, typeof array2);
//regular expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
console.log(re1);
console.log(re2);
