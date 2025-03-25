
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

// arithmetic
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// concatenation
x = 'hello' + ' ' + 'world';

// Exponent
x = 2 ** 3;

// increment
x = 2;
// x = x + 1;
x++;

// decrement
x = x - 1;
x--;

// Assignment operators
x = 10;

x +=5 ;

// comparison operators
x = 2 == 4;
x =2 ===2;

console.log(x);