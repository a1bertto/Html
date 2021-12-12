//Question 1 - completed on w3school website

/*Question - 2 Write a JavaScript program to compute
 the sum and product of an array of integers*/
 var arr = [1, 2, 3, 4, 5,],
 s = 0,
 p = 1,
 i;
for (i = 0; i < arr.length; i += 1) 
{
 s += arr[i];
 p *= arr[i];
 }
console.log('Sum : '+s + ' Product :  ' +p); 

/*Question 3 - Write a JavaScript function to merge two arrays 
and removes all duplicates elements*/
var array1 = [1, 2, 3];
 var array2 = [2, 30, 1];

  function arrMerge(a,b){
       a = array1;
       b=array2;

     merge_array(a,b);

  }
 
  /* Question 4 - Write a pattern that matches e-mail addresses.
The personal information part contains the following ASCII characters.
 Uppercase (A-Z) and lowercase (a-z) English letters.
 Digits (0-9).
 Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 Character . ( period, dot or full stop) provided that it is not the first or last character and 
it will not come one after the other */


/* Question 5 - Write a JavaScript function to get the values of First and Last name of the following form:
Sample HTML file : html code is on assignment sheet */

function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}


/* Question 6 - Write a JavaScript program to
 remove items from a dropdown list : html code is on assignement sheet*/
function removecolor() {
     var x = document.getElementById("colorSelect");
     x.remove(x.selectedIndex);
  }

/* Question 7 - Write a JavaScript program to 
highlight the bold words of the paragraph, on mouse over a 
certain link.*/
$(document).ready(function(){
     $("p").mouseover(function(){
          if ("p"=="p".bold){
               $("p").css("background-color", "yellow");
          }
       
               }
          )
     }
);

/* Question 8 - Write a JavaScript function to get the month name from a particular date. 
 Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November" 
*/

function getMonthName(dt){
     monthNamelist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return monthNamelist[dt.getMonth()];
   };
   console.log(month_name(new Date("10/11/2009")));
   console.log(month_name(new Date("11/13/2014")));


/* Question 9 - Write a JavaScript function 
to test whether a date is a weekend. Go to the editor
*/

var isWeekend =  function(date1){
     var dt = new Date(date1);
      
     if(dt.getDay() == 6 || dt.getDay() == 0)
        {
         return "weekend";
         } 
 }

 /* Question 10 - Write a JavaScript program to 
 display the reading status (i.e. display book name, author name 
and reading status) of the following books. - To be completed
 */

/* Question 11 - . Write a JavaScript program to display the reading status (i.e. display book name, author name 
and reading status) of the following books */
function currentTime() {
     var date = new Date(); 
     var hour = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();
   }

// Question 12 - Write a JavaScript program to sort an array of JavaScript objects.
 

var library = [ 
     {
     title: 'The Road Ahead',
     author: 'Bill Gates',
     libraryID: 1254
     },
     {
     title: 'Walter Isaacson',
     author: 'Steve Jobs',
     libraryID: 4264
     },
     {
     title: 'Mockingjay: The Final Book of The Hunger Games',
     author: 'Suzanne Collins',
     libraryID: 3245
     }]