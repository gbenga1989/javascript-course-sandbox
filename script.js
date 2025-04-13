
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
  // function getRandom(arr){
  //   const randomIndex = Math.floor(Math.random() * arr.length);

  //   const item = arr[randomIndex]

  //   console.log(item);
  // }

  // getRandom([ ])


  // 4.Global and fuunction scope- scope refers to the current area/context of an area of code

  // alert('hello')
  // const x = 100;
  // console.log(x, 'in global');

  // function run(){
  //  console.log(window.innerHeight);
  //  console.log(x, 'in function');
  // }

  // run();

  // if(true){
  //   console.log(x, 'in block');
  // }

  // function add(){
  //   const y = 50;
  //   console.log(y);
  // }

  // add();
  // (local sope refers to the scope i am in)

  // 5. Block scope
  // const x = 100; 

// (this is a block)
  // if(true){
  //   const y = 200;
  //   console.log(x + y);
  // }

  // // console.log( x + y);

  // for(let i = 0; i <= 10; i++){
  //   console.log(i);
  // }

  // // console.log(i);

  // if (true){
  //   const a = 500;
  //   let b = 600;
  //   var c = 700;
  // }

  // console.log(c);

  // 6.Nested sequence
  // function first(){

  //   const x = 100;
    
  //   function second(){
  //     const y = 200;
  //     console.log( x + y);
  //   }
  //   second();
  // }

  // first();

  // if (true){
  //   const x = 100;

  //   if (x === 100){
  //     const y = 200;
  //     console.log(x + y);
  //   }
  // }

  // 7.Declare function
  // function addDollarSign(value){
  //   return '$' + value;
  // }
  // console.log(addDollarSign(100));
  // // function expression
  // const addPlusSign = function (value) {
  //   return '+' + value;
  // }

  // console.log(addPlusSign(200));

  // 8.Arrow functions
  // function add(a,b){
  //   return a + b;
  // }

  // arrow function
  // const add = (a,b) => {
  //   return a + b;
  // };

  // // implicit return
  // const subtract = (a,b) => a-b;

  // const double = (a) => a * 2;
  
  // // returning an object
  // const createObj = () => ({
  //   name: 'Brad'
  // })

  // const numbers = [1,2,3,4,5,6,7,8,9,10];
  // numbers.forEach(function (n) {
  //   console.log(n);
  // });

  // // arrow function in a call back
  // numbers.forEach((n) => console.log(n));

  // console.log(add(1,2));
  // console.log(subtract(10,2));
  // console.log(double(10));
  // console.log(createObj(10));

  // 9.Immeidately invoked function

  // 10.Function challenges
  // 1.
  // function getCelsius(f){
  //   const celsius = ((f - 32) * 5) /9;
  //   return celsius
  // }

  // const getCelsius = (f) => ((f - 32) * 5) /9;
  // console.log(`The temperature is ${getCelsius(52)} \xB0C`);

  // 2.Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

//   function minMax(arr){
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
    

//     return{
//       min,
//       max,
//     };

//   }
  
  
//  console.log(minMax([1,2,3,4,5,32,56])); 

//  challenge 3:Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`

//   console.log(output, );
// })(20,5);

// 11.Execution context- is a special environment created to handle to transformation and execution of code



// 05. LOGIC AND CONTROL FLOW

// 2. if statement
// if(true){
//   console.log('this is true');
// }

// if(false){
//   console.log('This is not true');
// }

// const x = 35;
// const y = 50;

// if(x > y){
//   console.log(`${x} is greater than ${y}`);
// }

// if(x === y){
//   console.log(`${x} is equal to ${y}`);
// } else{
//   console.log(`${x} is not equal to ${y}`);
// }

// if (x  !==y ){
//   const z = 20;
//   console.log(`${z} is 20`);
// }

// // shorthand if
// if(x > y) console.log(`${x} is greater than ${y}`)
//  else
//   console.log('this in not so very true');

// 3. else if

// const d = new Date(10, 30, 2022, 6, 0, 0);
// const hour = d.getHours();


// if(hour < 12){
//   console.log('Good morning');
// } else if(hour < 18){
// console.log('Good afternoon');
// }
//  else{
//   console.log('Good night');
// }

// // nested if
// if(hour < 12){
//   console.log('Good morning');

//   if (hour === 6){
//     console.log('Wake up');
//   }
// }

// else if(hour < 18){
// console.log('Good afternoon');
// }
//  else{
//   console.log('Good night');

//   if (hour >= 20){
//     console.log('zzzzzzzzz!');
//   }
// }

// if (hour >= 7 && hour < 15){
//   console.log('It is work time!');
// }

// if (hour === 6 || hour === 20){
//   console.log('Brush your teeth');
// }

// 4.switches
// const d = new Date(2022, 1, 10, 8, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// switch(month){
//   case 1:
//     console.log('It is january');
//     break;
//   case 2:
//     console.log('It is feburary');
//     break;
//   case 3:
//     console.log('It is march');
//     break;
  
//   default:
//     console.log('it ins not jan, feb or march');

// }

// switch(true){
//   case hour < 12:
//     console.log('Good morning');
//     break;
//   case hour < 18:
//     console.log('Good afternoon');
//     break;
//   default:
//     console.log('Good night');
// }

// 4. challenge: Create a function called calculator that takes three parameters: num1, num2 and operator. The operator can be +, -, * or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

// function calculator(num1, num2, operator){
//   let result;

//   switch(operator){
//     case '+':
//       result = num1 + num2;
//       break
//     case '-':
//       result = num1 - num2;
//       break
//     case '*':
//       result = num1 * num2;
//       break
//     case '/':
//       result = num1 / num2;
//       break
//     default:
//       result = 'invalid operator';
//   }

//   console.log(result);
//   return result;
// }

// calculator(5, 2, '/');




// 6.Truthy or falsy value
// const email = 'test@test.com';

// if (email){
//   console.log('you passed in an email');
// }
// (when we pass something to an if statement, it converts/coerced to a boolean - a string with any value is a boolean)

// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// const x = '';

// if (x){
//   console.log('This is truthy');
// } else {
//   console.log('this is falsy');
// }

// console.log(Boolean(x));

// // truthy and falsy cavaets
// const children = 0;

// if (!isNaN(children)){
//   console.log(`you have ${children} children`);
// } else {
//   console.log('please enter number of children');
// }

// // checking for empty arrays
// const posts = ['post one'];

// if(posts.length > 0){
//   console.log('list posts');
// } else {
//   console.log('No posts to list');
// }

// // checking for empty objects
// const user = {
//   name: 'Brad'
// };

// if (Object.keys(user).length > 0){
//   console.log('list user');
// } else {
//   console.log('no user');
// }

// // loose equality (==)
// console.log(false == 0);
// console.log('' == 0);
// console.log(null == undefined);



// 7. Logical operators
// console.log(10 < 20 && 30>15 && 40 >30);
// console.log(10 >20 || 30 < 15);

// // && - will return the first falsy value or the last value
// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;

// console.log(a);

// const posts = ['post one', 'post two']

// posts.length > 0 && console.log(posts[0]);

// // || -will return the first truthy value or the last value
// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;


// console.log(b);

// //  ?? - Returns the right side operand when the left is either null or undefined

// let c;

// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// c = 0 ?? 30;

// console.log(c);



// 8.Logical assignment
// ||= assigns the right side value only if the left is a falsy value.

// let a = false;

// if (!a){
//   a = 20;
// }

// a = a || 10;

// a ||=10;

// console.log(a);

// // &&= assigns the right side value only if the left is a truthy value.
// let b = 10;

// if (b){
//   b = 20;
// }

// b = b && 20;

// b &&= 20;

// console.log(b);

// // ??= assigns the right side value only if the left is null or undefined.

// let c = false;

// if (c === null || c === undefined){
//   c = 20;
// }

// c = c ?? 20;
// console.log(c);



// 9. Tenary operators
// const age = 17;

// // using an if statement
// if(age >= 18){
//   console.log('you can vote');
// } else {
//   console.log('you can not vote');
// }

// // using a tenary operator
// age >= 18 ? console.log('you can vote'): console.log('you can not vote');


// // assigning a conditional value to a variable
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? 'you can vote' : 'you can not vote';
// console.log(canVote);
// console.log(canVote2);


// // multiple statements
// const auth = true;
// let redirect;

// if (auth){
//    alert('welcome to the dashboard');
//     redirect = '/dashboard';
// } else{
//   alert('Access denied');
//   redirect = '/login'
// }

// const redirect = auth ? (alert('welcome to the dashboard'), '/dashboard') : (alert('Access denied'), '/login')

// console.log(redirect);

// auth ? console.log('welcome to the dahboard') : null;

// auth  && console.log('welcome to the dahboard');




// 6.LOOPS AND HIGH ORDER ARRAY METHODS
// A loop is a control structure that provides a way to do iteration in programming and iteration is a process you repeat somethig until a condition is met or not

// for (let i = 0; i <= 10 ; i++) {
//   if(i === 7){
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number' + i);
//   }
// }

// nest loops
// for (let i =1; i <= 10; i++){
//    console.log('Number' + i);

//    for (let j =1; j<= 10; j++ ){
//     console.log(`${i} * ${j} = ${i * j}`);
//    }
// }

// loop through an array
// const names = ['brad', 'sam', 'sara', 'john', 'tim' ];

// for (let i = 0; i < names.length; i++){
//   if( i ===2){
//     console.log(names[i] + 'is the best');
//   } else {
//     console.log(names[i]);
//   }
//   console.log(names[i]);
// }

// 3.break and continue statement
// for (let i = 0; i <= 20; i++){
//   if (i === 15) {
//     console.log('breaking....');
//     break;
//   }
//   console.log(i);
// }

// // continue
// for(let i = 0; i <= 20; i++){
//   if (i===13){
//     console.log('skipping 13...');
//     continue;
//   }
//   console.log(i);
// }


// 4.while and do loops
// let i = 21;

// while (i <= 20){
//   console.log('numbeer' + i);
//   i++;
// }

// loop over array
// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// nesting while loops
// while (i <= 5){
//   console.log('number' + i);

//   let j = 1;
//   while (j <= 5){
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// do while loop
// do{
//   console.log('number' + i);
//   i++;
// } while (i <= 20);

// challenge:
// For multiples of three print "Fizz" instead of the number
// For multiples of five print "Buzz"
// For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++){
//   if(i % 3 ===0 && i % 5 === 0) {
//     console.log('Fizzbuzz');
//   }
  
//   else if (i % 3 === 0){
//     console.log('fizz');
//   } else if(i % 5 === 0){
//     console.log('Buzz');
//   } else{
//       console.log(i);
//   }
// }


// while loop

// let j = 1;

// while (j <= 100){
//   if(j % 15 === 0) {
//     console.log('Fizzbuzz');
//   }
  
//   else if (j % 3 === 0){
//     console.log('fizz');
//   } else if(j % 5 === 0){
//     console.log('Buzz');
//   } else{
//       console.log(j);
//   }

// j++;
// }

// 6. for of loop
//  const items = ['book', 'table', 'chair', 'kite'];

//  for( let i = 0; i < items.length; i++){
//   console.log(items[i]);
//  }


// loop through arrays
//  const items = ['book', 'table', 'chair', 'kite'];
//  const users = [
//   {name: 'Brad'},
//   {name: 'kate'},
//   {name: 'steve'},
//  ];

//  for( const item of items){
//   console.log(item);
//  }

// for(const user of users){
//   console.log(user.name);
// }

// // loop over strign
// const str = 'hello world';
// for(const letter of str){
//   console.log(letter);
// }

// loop over maps
// const map = new Map();
// map.set('name', 'john');
// map.set('age', 30)

// for (const[key, value] of map){
//   console.log(key, value);
// }

// 7.for in loop
// const colorObj ={
//   color1:'red',
//   color2:'blue',
//   color3:'orange',
//   color4:'green',
// };

// for (const key in colorObj){
//   console.log(key, colorObj[key]);
// }

// const colorArr = ['red', 'green', 'blue', 'yellow'];

// for(const key in colorArr){
//   console.log(colorArr[key]);
// }


// 8.array for each
// const socials = ['twitter', 'linkedin', 'facebook', 'insta'];

// console.log(socials);

// socials.forEach(function (item){
//   console.log(item);

// })

// socials.forEach( (item, index, arr) => console.log(`${index} - ${item}`, arr));

// function logsocials(social){
//   console.log(social);
// }

// socials.forEach(logsocials);

// const socialObjs = [
//   {name: 'twitter', url:'https://twitter.com'},
//   {name: 'facebook', url:'https://facebook.com'},
//   {name: 'linkedin', url:'https://linkedin.com'},
//   {name: 'instagram', url:'https://instagram.com'}
// ]

// socialObjs.forEach((item) => console.log(item.url));

// 9. array.filter
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter (function (number){
//   return number % 2 ===0;
// })

// short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// same with foreach
// let evenNumbers = [];
// numbers.forEach(number => {
//   if (number % 2 === 0){
//     evenNumbers.push(number)
//   }
// });

// console.log(evenNumbers);

// 10.array.map
// const numbers = [1,2,3,4,5];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// // same with foreach
// const doubledNumbers2 = [];

// numbers.forEach((number) => {
//   doubledNumbers2.push(number *2);

// });

// console.log(doubledNumbers2);

// 11.array reduce
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const sum = numbers.reduce(function(accumulator, currentValue){
//  return accumulator + currentValue;
// }, 0);

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 10)

// console.log(sum2);

// // using a for loop
// const sum3 = () =>  {
//   let acc = 0;
//   for(const cur of numbers){
//     acc += cur;


//   }
//   return acc;
// }

// // console.log(sum3());

// const cart = [
//   {id: 1, name: 'product 1', price: 130},
//   {id: 2, name: 'product 2', price: 150},
//   {id: 3, name: 'product 3', price: 175},
// ]

// const total = cart.reduce (function (acc, product){
//   return acc + product.price
// }, 0);

// console.log(total);

// 12.challenge: Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have their first and last name

// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-1111',
//     age: 30,
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-2222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-3333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'Sara@gmail.com',
//     phone: '444-444-4444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@gmail.com',
//     phone: '555-555-5555',
//     age: 23,
//   },
// ];

// const youngPeople = people
// .filter ((person) => person.age <= 25)
// .map((person) => ({
//   name: person.firstName + ' ' + person.lastName,
//   email: person.email,
// }))


// console.log(youngPeople);


// challenge 2: Add all of the positive numbers in the array.

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const numbers2 = [1,2,3,4,5,6,7,8,9,10];

// const positiveSum = numbers
// .filter((number) => number > 0)
// .reduce((acc, cur) => acc + cur, 0)

// console.log(positiveSum);


// challenge 3: Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.

// const words = ['coder', 'programmer', 'developer'];

// const cWords = words.map((word) => {
//   return word[0]. toUpperCase() + word.slice(1);
// })

// console.log(cWords);




// 07. THE DOCUMENT OBJECT MODEL

// console.dir(document.body);

// console.log(document.body.innerText);

// console.log(document.links[0]);

// document.body.innerHTML = '<h1> hello world </h1>';

// document.write('hello from js')

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1> hello from main </h1>'

document.querySelector('#main h1, 1,2,3,4,5,6 ').innerText = 'Hello';