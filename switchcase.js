//switch cases is an alternate of using if-else if statements. switch case is used when multiple codes of block we have to execute on the basis of some conditions.
// we Use switch cases when we have multiple conditions to evaluate against the same expression.
//It provides a more concise and readable way to handle multiple cases
// Marksheet
// let marks: number[] = [98, 99, 95];
// let totalMarks = 300;
// //for sum of numbers in an array.
// let sum: number = 0;
// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }
// console.log("sum:", sum);
// console.log("totalMarks:", totalMarks);
// let percentage = (sum / totalMarks) * 100;
// switch (true) {
//   case percentage > 90 && percentage <= 100:
//     console.log(`you got A+ grade.`);
//     break;
//   case percentage > 80 && percentage <= 90:
//     console.log(`you got A grade.`);
//     break;
//   case percentage > 70 && percentage <= 80:
//     console.log(`you got B grade.`);
//     break;
//   case percentage > 60 && percentage <= 70:
//     console.log("You got C grade.");
//     break;
//   case percentage > 50 && percentage <= 60:
//     console.log(`You got D grade.`);
//     break;
//   default:
//     console.log(`You are Failed`);
//     //Author-Huma Mohsin
// }
//switch case - Calculator
function Calculator(num1, num2) {
    var operator = "+";
    switch (operator) {
        case "+":
            console.log("".concat(num1, " + ").concat(num2, "="), num1 + num2);
            break;
        case "-":
            console.log("".concat(num1, "-").concat(num2, "="), num1 - num2);
            break;
        case "*":
            console.log("".concat(num1, "*").concat(num2, "="), num1 * num2);
            break;
        case "/":
            console.log("".concat(num1, "/").concat(num2, "="), num1 / num2);
            break;
        case "%":
            console.log("".concat(num1, "%").concat(num2, "="), num1 % num2);
            break;
        default:
            console.log("Invalid Input, Try Again");
    }
}
Calculator(8, 7); //invoke function
//Author Huma Mohsin
