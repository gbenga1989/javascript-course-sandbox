
// let firstName = 'john';
// let lastName = 'doe';

// console.log(firstName, lastName);

// var age =30;

// console.log(age);


// // reasigning variables
// age = 32;
// console.log(age);

// let score;
// score = 1;
// console.clear(score);

// if (true){
//   score = score + 1
// }


// console.log(score);

// const x =100;

// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);


// const person = {
//   name: 'brad',
// };

// person.name = 'john';
// person.mail = 'ghrnhs@gmail.com'
// console.log(person);


// // declare multiple variables

// let a, b, c;

// const d=10, e=20, f=30;
// console.log(e);


// // primitive data types
// string
// const firstName = 'sam';

// boolean
// const hasKids = true;

// // null
// const aptNumber = null ;


// // undefined 
// let score;

// // symbol
// const id = symbol('id');

// big int
// const n = 900844933829348384n;

// // reference types
// const numbers = [1, 2, 3, 4];
// const person ={
//   name: 'brad',
// }
// function sayHello( ){
//   console.log('Hello');
// }
// const output = sayHello;


// console.log(output, typeof output);



// values are stored on the stack
// const name = 'john';
// const age = 30;

// // referendce values are stored on the heap
// const person = {
//   name: 'brad',
//   age: 40
// };

// let newName = name;
// newName ='jonathan';

// let newPerson = person;
// newPerson.name = 'bradley';

// console.log( name, newName);
// console.log(person, newPerson);

// TYPE CONVERSION
// let amount = 'hello';

//convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);


//convert number to string
// amount = amount.toString();
// amount = String(amount);


//convert string to decimal
// amount = parseFloat(amount);

// convert number to boolean
// amount = Boolean(amount);

// console.log(amount, typeof amount);


// OPERATORS

// // arithmetic
// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // concatenation
// x = 'hello' + ' ' + 'world';

// // Exponent
// x = 2 ** 3;

// // increment
// x = 2;
// // x = x + 1;
// x++;

// // decrement
// x = x - 1;
// x--;

// // Assignment operators
// x = 10;

// x +=5 ;

// // comparison operators
// x = 2 == 4;
// x =2 ===2;

// x = 2 != 2;
// x = 2 !== 2;

// console.log(x);


// TYPE COERCION

// let x;

// x = 5 + Number('5');
// x = 5 * '5';
// x = 5 + null;

// x = 5 + undefined;

// console.log(x, typeof x);


// WORKING WITH STRINGS

// let x;

// const name = 'john';
// const age = 31;


// x = 'hello, my name is ' + name + 'i am ' + age + 'years old today'


// // template literals

// x = `Hello, my name is ${name} and i am ${age} years old tomorrow`;

// string properties and methods
// const s = new String ('hello world');
// x = typeof s;

// x = s.length;

// // access value by keys
// x = s[1];

// x = s.__proto__;

// x = s.toUpperCase();
// x = s.toLowerCase();

// x = s.charAt(0);

// x = s.indexOf('d');

// x = s.substring(0, 4)

// x = s.slice(-11, -6)

// x = s.trim(-11, -6)


// x = '             hello world'

// x= x.trim();

// x = s.replace('world', 'john');

// x = s.includes('hello');

// x = s.valueOf();

// x = s.split('');

// console.log(x);


// const myString = 'developer';

// let myNewString;

// // solution 1
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);


// console.log(myNewString);

// WORKING WITH NEW STRINGS

// let x;
// const num = new Number(5.453);

// x = num.toString();

// x = num.toString().length;

// x =num.toFixed(2);

// x=num.toPrecision(3);

// x=num.toExponential(2);

// x = num.toLocaleString('en-us');

// console.log(x);

// MATH OBJECT
let x;

x = Math.sqrt(9)

x = Math.abs(5)

x = Math.pow(2,3, 4)

x = Math.min(4, 5, 3)

x = Math.random();

x = Math.floor(Math.random() * 100 + 1, 2, 3, 4); 1, 21, 3, 4, 5, 6, 7, 8, 9, 10

console.log(x);
{10, 9, 8, 1}