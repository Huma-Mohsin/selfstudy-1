//sorting: sorting is all about sorting something alphabetically.
//sorting can be applied on srings by using.sort() method.
let city:string[]=['karachi','multan','sialkot','abbotabad','islamabad'];
console.log("sorting alphabetical order:",city.sort());//both shows  sorting array.
//console.log(city);//shows sorting array

//if we want to do backward alphabetical sorting so we use localeCompare() method.
//In JavaScript, we cannot directly subtract strings like b - a to sort them in reverse alphabetical order. The subtraction operator (-) is meant for numerical values, not strings.
console.log("sorting backward alphabetical order:",city.sort((a,b)=>b.localeCompare(a)));//shows from z to a alphabetically order.

//we can do sorting on numbers also.

//i.e ascending order as:-
let digits:number[]=[100,47,34,89,14,788,98]
console.log("Ascending order:",digits.sort((a:number,b:number)=>a-b));
//console.log("Ascending order:",digits);//both console shows sorted array.

//descending sorting as:-
console.log("Descending order",digits.sort((a,b)=>b-a));
//console.log("Descending order",digits);
//Author-HUma Mohsin

