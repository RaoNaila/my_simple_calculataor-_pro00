#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "firstNumber",
        type: "number",
        message: "enter younamer first number" },
    { name: "secondNumber",
        type: "number",
        message: "enter younamer second number" },
    {
        name: "operators",
        type: "list",
        message: "select your desire operators to perform action",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// conditional statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
;
