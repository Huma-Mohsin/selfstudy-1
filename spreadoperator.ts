//spread operator is denoted by three dots i.e ...
//it is used to spread data.
//spread operator is used in an array as well as an object.
//we use spread operator to expand an array or an object.
//spread operator can be used for array concatenation,object merging etc.
//biggest advantage of using spread operator is that it automatically updated when any array or object is being modified.

//spread operator in an array can be used to concatinate purpose.
let students:string[]=["ali","amna","zohaib","zamin"];
let courses:string[]=["GENAI","BlockChain","Java"];
let details:string[]=[...students,...courses]//here spread operator concatinates two arrays. one of the biggest advantage of using spread operator is that if we do any change in a student or course array, it automatically updated details array.

//if we can make a copy of an array , we can use spread operator. this needed when we donot want to change in original array so we can make a copy and do some operations as per requirements.

let email = ["abc.com", "xyz.com", "rdt.com"];
console.log("Original array:", email);

const updatedArray = [...email, "sdf.com"];
console.log("\n");

console.log("Updated duplicate array:", updatedArray);
console.log("\n");
console.log("Original array:", email);

//spread operator in an object:-
//create an object
let student1_details={
name:"Huma MOhsin",
Rollno:12345,
course:"GEN-AI",
timings:"07:00-10:00",
day:"Friday",
place:"Governor House"
}
//we have an object and in this object we have some details of student 
// here we can use spread operator as if i want to keep details of this above student in new student object. 
//let's consider:
let student2_details={
    ...student1_details,
    //keeps the copy of student1 here
    name:"Zainab",Rollno:45678 // update name and roll no.
}
console.log("\n");
console.log("student1:",student1_details);
console.log("\n");
console.log("student2:",student2_details);
//Author-Huma Mohsin



