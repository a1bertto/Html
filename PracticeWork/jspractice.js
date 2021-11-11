console.log("hello");
let message;
console.log(message);
message="just like kobe";
console.log(message);
theNumber= 15;
theNumber=true;
console.log(theNumber);
let pos={a:10, city:"newyork"};
pos.a+=10;
console.log(pos);

myObject= {a:10};

copyOfMyObject = myObject;
copyOfMyObject.a=12;
console.log(myObject);
console.log(copyOfMyObject);

//for loop
var iterateArray = (arr)=> {
     for (i=0; i<arr.length;i++){
          console.log(i);
     }
}

// for each 
array.forEach(function (element) {

     element = element * 100;
 
     console.log(`element -  ${element}`);
 
   });