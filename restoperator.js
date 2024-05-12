var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// The rest operator (...) in JavaScript is used to represent an indefinite number of arguments as an array.
//syntax:-
//function function'sName(param1, param2, ...restParams) {
// Function body
//}
// Remember that rest params always used at the end with ... dots.
function sum(num1, num2) {
    var restParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restParams[_i - 2] = arguments[_i];
    }
    //return (num1+num2+restParams);//encountering an issue because restParams is an array, not a single number. 
    var total = num1 + num2; //so we first add numbers and then apply loop at rest params
    for (var i = 0; i < restParams.length; i++) {
        total += restParams[i];
    }
    return total;
}
console.log("sum =", sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //invoke function
//-------------------------------------------------------------------------
//Another common use of the rest parameter is in destructuring arrays or objects, particularly when we want to capture multiple values while also extracting specific elements.
//in an array
var numbers = [1, 2, 3, 4, 5];
var first = numbers[0], second = numbers[1], rest = numbers.slice(2);
console.log("first number:", first); //extract info
console.log("second number:", second);
console.log("rest numbers:", rest);
//in an object
var student = {
    name: "Huma Mohsin",
    email: "huma@123.com",
    phoneNo: 12345678,
    city: "Karachi",
    course: "GEN-AI",
};
var studentName = student.name, course = student.course, restpara = __rest(student, ["name", "course"]); //we are using both the destructuring assignment and the rest parameter to extract specific properties from the student object.
//The destructuring assignment { name, course, ...restParams } extracts the name and course properties from the student object and collects all other properties into a new object called restParams using the rest parameter syntax (...restParams).
console.log("Name:", studentName); //extract info
console.log("Course:", course);
console.log("Other details:", restpara);
//Author -Huma Mohsin
