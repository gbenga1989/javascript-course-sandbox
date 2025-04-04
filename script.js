
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
// let x;

// x = Math.sqrt(9)

// x = Math.abs(5)

// x = Math.pow(2,3, 4)

// x = Math.min(4, 5, 3)

// x = Math.random();

// x = Math.floor(Math.random() * 100 + 1, 2, 3, 4); 

// console.log(x);

// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);


// // get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);


// // get the product

// const product = x * y;
// const productOutput = `${x} * ${y} = ${product}`;
// console.log(productOutput);

// dates and times
// let d;

// d = new Date();

// d =d.toString()

// d =new Date (2021, 0, 12, 30);

// d = new Date('2021-07-10');



// Method on date object

// let x;
// let d = new Date();

// x = d.toString();
// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear()

// console.log(x);







// 4/2/20205
// FUNCTIONS, SCOPE AND EXECUTION CONTEXT

// 2.Basics
// A function is a way to group code to run together and can use anywhere

// function sayHello(){
//   console.log('hello world');
// }

// this is called invoking/calling a function
// sayHello();

// defining/declaring a function
// function add (num1, num2){
//   console.log(num1 + num2);
// }

// (when you pass in parameters/values to a function, it is known as passing arguements)
// add(5, 10);

// function subtract(num1, num2){
//   return num1 - num2;
// }

// const result = subtract(10, 2)
// console.log(result);


// 3. More on parameters

// function registerUser(user = `Rot`) {
//   // if (!user){
//   //   user = 'Bot'
//   // }
//   return user  + ` is registered`;
// }

// console.log(registerUser ());

// rest parameters
// function sum (...numbers){
//   let total = 0;

//   for (const num of numbers){
//     total += num;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 100 ));

// objects as param
// function loginUser(user){
//   return `The user  ${user.name} with the id of ${user.id} is logge in`
// }

// const user = {
//   id:1,
//   name:'john',
// };
// console.log(loginUser(user));

  // arrays as params
  // the rest operator(...) turns everything that i have into an array
  function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex]

    console.log(item);
  }

  getRandom([1, 2, 3, 4,5,6, 7 ])
