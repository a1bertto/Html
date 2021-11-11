var str = "john";
console.log("Welcome to javascript from js",str);
console.log("Welcome to javascript from js"+ str);

var message = `Welcome  to JavaScript ${str}`;
console.log(message);
console.log(typeof str + typeof message);
// Array type - object in JS []

var names = ["a", "b", "c", "d"];

console.log("names type - " + typeof names);

// object types - Object Notation

// Reference type variable
var person = { name: "john", age: 34, active: true };

// numeric expression -> result is NaN (Not a Number)

num1 = num1 * 10;

console.log("expression result - " + num1);



num1 = { a: 10, b: 20 };

console.log("num1-" + num1);

console.log("object details - " + num1.a + "  " + num1.b);



num1 = "hello"; // string object

// uppercase

console.log("hello in uppercase - " + num1.toUpperCase());



num1 = 10; // number

// Raise a runtime error -> TypeError

console.log("hello in uppercase - " + num1.toUpperCase());

console.log("person type  - " + typeof person);

function add(num1, num2) {

     console.log("num1 -" + num1 + "num2 -" + num2);
   
     // block of code - expressions, control structures (if and for)
   
     // return value - optional   return value can be a prmitive, object or function
   
     return num1 + num2;
   
   }
   
   
   
   // invoke the function
   
   var result = add(10, 20);
   
   console.log("Result is - " + result);
   
   
   
   // invoke the function
   
   var result = add(10);
   
   console.log("Result is - " + result);
   
   
   
   var result = add(10, 20, 30);
   
   console.log("Result is - " + result);
   
   
   
   var result = add();
   
   console.log("Result is - " + result);

   // way 2 - functions as variables

// writing anonymous function

var x = 10;

var x = function (num1, num2) {

  return num1 + num2;

};



// invoking the function

console.log("x - " + x);

var result = x(10, 20);

console.log(" x- " + result);

var result = x(10);

console.log(" x- " + result);


// way 3 - ES6 style - anonymous functiuon// arrow function -> make easier to read, concise// var y = (param1, param2...) => {  function body  }// arrow functions - you can skip { block }..if there is only 1 statementvar y = (num1, num2) => {  console.log("within arrow function");  return num1 * num2;};console.log("sum of two numbers - " + y(200, 400));console.log("sum of two numbers - " + y(20.89, 40.56));console.log("sum of two numbers - " + y("hello ", "world"));console.log("sum of two numbers - " + y("hello ", 100)); // str + number = strvar z = (num1, num2) => {  return num1 + num2;};console.log(z(100, 200));var z1 = (num1, num2) => num1 + num2;console.log(z1(100, 200));

//string concat
function createStringObject() {

  // string objects

  let string1 = "A string primitive";

  const string2 = "Also a string primitive";

  string1 = "hello";

  //string2 = "world";

  console.log(`string1 - ${string1} and string 2- ${string2}`);

  console.log(string1.concat(" : ", string2));

}



createStringObject();

// string1 object declared with let - is available only within the function

//console.log(`string1 - ${string1} and string 2- ${string2}`);

function upperCaseString(str) {

  console.log(`str - ${str}`);

  // creates a new object pointed by str

  str = str.toUpperCase();

  console.log(`str - ${str} `);

}



upperCaseString("hello");

//button display
<button onclick="todayDate()">Display Date</button>