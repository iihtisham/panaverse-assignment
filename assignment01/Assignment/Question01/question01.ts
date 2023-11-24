// calculator.ts

import inquirer from 'inquirer';

// Function to perform basic calculator operations
function calculate(a: number, b: number, operation: string): number {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero is not allowed.');
            }
            return a / b;
        default:
            throw new Error('Invalid operation.');
    }
}

// Main function to run the calculator app
async function main() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number.',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number.',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['+', '-', '*', '/'],
        },
    ];

    const answers = await inquirer.prompt(questions);
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    const operation = answers.operation;

    try {
        const result = calculate(num1, num2, operation);
        console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Run the calculator app
main();
