//spread operator is denoted by three dots i.e ...
//it is used to spread data.
//spread operator is used in an array as well as an object.
//we use spread operator to expand an array or an object.
//spread operator can be used for array concatenation,object merging etc.
//biggest advantage of using spread operator is that it automatically updated when any array or object is being modified.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//spread operator in an array can be used to concatinate purpose.
var students = ["ali", "amna", "zohaib", "zamin"];
var courses = ["GENAI", "BlockChain", "Java"];
var details = __spreadArray(__spreadArray([], students, true), courses, true); //here spread operator concatinates two arrays. one of the biggest advantage of using spread operator is that if we do any change in a student or course array, it automatically updated details array.
//if we can make a copy of an array , we can use spread operator. this needed when we donot want to change in original array so we can make a copy and do some operations as per requirements.
var email = ["abc.com", "xyz.com", "rdt.com"];
console.log("Original array:", email);
var updatedArray = __spreadArray(__spreadArray([], email, true), ["sdf.com"], false);
console.log("\n");
console.log("Updated duplicate array:", updatedArray);
console.log("\n");
console.log("Original array:", email);
//spread operator in an object:-
//create an object
var student1_details = {
    name: "Huma MOhsin",
    Rollno: 12345,
    course: "GEN-AI",
    timings: "07:00-10:00",
    day: "Friday",
    place: "Governor House"
};
//we have an object and in this object we have some details of student 
// here we can use spread operator as if i want to keep details of this above student in new student object. 
//let's consider:
var student2_details = __assign(__assign({}, student1_details), { 
    //keeps the copy of student1 here
    name: "Zainab", Rollno: 45678 });
console.log("\n");
console.log("student1:", student1_details);
console.log("\n");
console.log("student2:", student2_details);
