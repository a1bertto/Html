function f3() {

     console.log("f3 called from f1");
   
   }
   
   
   
   function f2() {
   
     console.log("f2 called from f1...");
   
     f3();
   
   }
   
   
   
   function f1() {
   
     console.log("f1 called...");
   
     f2();
   
   }
   
   
   
   f1();

   // synchronous


   console.log("Start execution");

const user = getUserDetails(1);

window.alert(user);

//console.log(user);

const repo = getUserRepository(user.username);

//console.log(repo);

window.alert(repo);

console.log("Execution completed...");

   function getUserDetails(userId) {

     console.log("Waiting user details are being fetched from Database....");
   
     console.log("Database task completed...");
   
     let user = { id: userId, username: "john@github.com" };
   
     return user;
   
   }
   
   
   
   function getUserRepository(name) {
   
     console.log("Waiting repository details are being fetched from Database....");
   
     console.log("Database task completed...");
   
     return ["HTMLRepo", "JSRepo", "AngularRepo"];
   
   }