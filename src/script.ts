const country = "I love Bangladesh";

console.log(country);

let myName = "Osman";

myName = "35";
console.log(myName);

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(3, 4));
//array
let fruits = ["apple", "banaba", "orange"];
fruits.push("jackfruit");
fruits.push(4); // can not push a different type of value
console.log(fruits);

//declaring type explicitly
let a: number;
let b: string;
//union type
let s: number | string;
a = 25;
b = "Rana";
a = "a";
b = 36;

//array
let c: number[] = [];
let d: string[] = [];

let z: (number | string)[] = [];

//object
let g: object;
let v: {
  name: string;
  age: number;
  isAdult: true;
};
