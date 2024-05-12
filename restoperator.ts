// The rest operator (...) in JavaScript is used to represent an indefinite number of arguments as an array.
//syntax:-
//function function'sName(param1, param2, ...restParams) {
  // Function body
//}
// Remember that rest params always used at the end with ... dots.
function sum(num1:number,num2:number,...restParams){
    //return (num1+num2+restParams);//encountering an issue because restParams is an array, not a single number. 
    let total:number=num1+num2;//so we first add numbers and then apply loop at rest params
    for(let i=0;i<restParams.length;i++){
        total +=restParams[i]
    }
    return total;

}
console.log("sum =", sum(1,2,3,4,5,6,7,8,9));//invoke function
//-------------------------------------------------------------------------
//Another common use of the rest parameter is in destructuring arrays or objects, particularly when we want to capture multiple values while also extracting specific elements.

//in an array
let numbers:number[]=[1,2,3,4,5]
let [first,second, ...rest]=numbers
console.log("first number:",first);//extract info
console.log("second number:",second);
console.log("rest numbers:",rest);

//in an object
let student={
    name:"Huma Mohsin",
    email:"huma@123.com",
    phoneNo:12345678,
    city:"Karachi",
    course:"GEN-AI",
};
let {  name: studentName,course,...restpara}=student;//we are using both the destructuring assignment and the rest parameter to extract specific properties from the student object.
//The destructuring assignment { name, course, ...restParams } extracts the name and course properties from the student object and collects all other properties into a new object called restParams using the rest parameter syntax (...restParams).
console.log("Name:",studentName);//extract info
console.log("Course:",course);
console.log("Other details:",restpara);
//Author -Huma Mohsin

