//1: Math Functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// 2: Declare variables
let displayValue = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

//3: Operate Function

function operate(firstNumber, operator, secondNumber) {
  let finalResult;

  if (operator === "+") {
    finalResult = add(firstNumber, secondNumber);
    console.log(finalResult);
  } else if (operator === "-") {
    finalResult = subtract(firstNumber, secondNumber);
  } else if (operator === "X") {
    finalResult = multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    finalResult = divide(firstNumber, secondNumber);
  } else {
    return "Invalid operator";
  }

  return finalResult;
}

// Function to add the pressed number or operator to the display
function updateDisplay(number) {
  document.getElementById("display").innerText += number;
}

// Function to clear the display
function clearDisplay() {
  let expression = document.getElementById("display");
  expression.textContent = "";
}

// Function to get negative number
function toggleSign() {
  let displayElement = document.getElementById("display");
  let currentExpression = parseFloat(displayElement.innerText);
  let toggledExpression = currentExpression * -1;

  displayElement.innerText = toggledExpression;
}

//Function to add decimal number

function addDecimal() {
  let expression = document.getElementById("display");

  if (!expression.textContent.includes(".")) {
    expression.textContent += ".";
  }
}

//Function to get percentage of a number
function percent() {
  let expression = document.getElementById("display");
  let currentContent = expression.textContent;

  currentContent = currentContent.replace("%", "");

  let result = parseFloat(currentContent) / 100;
  expression.textContent = result + "%";
}

// Function to calculate the result
function calculate() {
  let expression = document.getElementById("display").innerText;

  let operators = ["+", "-", "X", "/"];
  let numbers = expression.split(/[-+X/]/).map(parseFloat);
  let operations = expression.split(/[0-9.]+/).filter(Boolean);

  for (let i = 0; i < operators.length; i++) {
    while (operations.includes(operators[i])) {
      let index = operations.indexOf(operators[i]);
      let result = operate(numbers[index], operators[i], numbers[index + 1]);

      numbers.splice(index, 2, result);
      operations.splice(index, 1);

      if (result % 1 !== 0) {
        result = result.toFixed(2);
      }

      document.getElementById("display").innerText = result;
    }
  }

  return parseFloat(document.getElementById("display").innerText);
}
