import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red("*".repeat(65)))
console.log(chalk.black.bgGreenBright("\n\tWelcome to Mrs Babar - Quiz App\n\t\t"))
console.log(chalk.red("*".repeat(65)))

let quiz: {
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt([
    {
        name : "question_1",
        type : "list",
        message : chalk.blue.yellow("\nQ1:What is the correct way to check if two values are not equal in typescript?"),
        choices : ["a == b", "a === b", "a = b", "a !== b"]
    },
    {  
        name : "question_2",
        type : "list",
        message : chalk.blue.yellow("\nQ2:Which of the following characters commonly allowed in variable names in typescript?"),
        choices : ["$", "@", "#", "&"]
    },
    {
        name : "question_3",
        type : "list",
        message : chalk.blue.yellow("\nQ3:Which operator is commonly used for string concatenation in typescript?"),
        choices : ["+", "-", "*", "/"]
    },
    {
        name : "question_4",
        type : "list",
        message : chalk.blue.yellow("\nQ4:In typescript, which symbol is commonly used to terminate a statement?"),
        choices : [".", ":", ";", ","]
    },
    {
        name : "question_5",
        type : "list",
        message : chalk.blue.yellow("\nQ5:Which method of Inquirer.js is used to start the prompt interface and receive user input?"),
        choices : ["start()", "prompt()", "init()", "run()"] 
    }
]);

let score : number = 0;

switch(quiz.question_1){
    case "a !== b":
        console.log(chalk.black.red("\n1==> Correct"));
        ++score;
        break;
        default:
            console.log(chalk.blue.red("\n1==> Incorrect"));
}
switch(quiz.question_2){
    case "$":
        console.log(chalk.black.red("\n2==> Correct"));
        ++score;
        break;
        default:
            console.log(chalk.blue.red("\n2==> Incorrect"));
}
switch(quiz.question_3){
    case "+":
        console.log(chalk.black.red("\n3==> Correct"));
        ++score;
        break;
        default:
            console.log(chalk.blue.red("\n3==> Incorrect"));
}
switch(quiz.question_4){
    case ";":
        console.log(chalk.black.red("\n4==> Correct"));
        ++score;
        break;
        default:
            console.log(chalk.blue.red("\n4==> Incorrect"));
}
switch(quiz.question_5){
    case "prompt()":
        console.log(chalk.black.red("\n5==> Correct"));
        ++score;
        break;
        default:
            console.log(chalk.blue.red("\n5==> Incorrect"));
}

console.log(chalk.black.bgGreenBright(`\nScore ${score}`))





