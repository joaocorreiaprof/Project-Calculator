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

// Function to calculate the result
function calculate() {
  let expression = document.getElementById("display").innerText;

  for (let index = 0; index < expression.length; index++) {
    if (expression[index] === "+") {
      operator = "+";
      firstNumber = parseInt(expression.slice(0, index));
      secondNumber = parseInt(expression.slice(index + 1));
      finalResult = operate(firstNumber, operator, secondNumber);
      document.getElementById("display").innerText = finalResult;
      return finalResult;
    }
    if (expression[index] === "-") {
      operator = "-";
      firstNumber = parseInt(expression.slice(0, index));
      secondNumber = parseInt(expression.slice(index + 1));
      finalResult = operate(firstNumber, operator, secondNumber);
      document.getElementById("display").innerText = finalResult;
      return finalResult;
    }
    if (expression[index] === "X") {
      operator = "X";
      firstNumber = parseInt(expression.slice(0, index));
      secondNumber = parseInt(expression.slice(index + 1));
      finalResult = operate(firstNumber, operator, secondNumber);
      document.getElementById("display").innerText = finalResult;
      return finalResult;
    }
    if (expression[index] === "/") {
      operator = "/";
      firstNumber = parseInt(expression.slice(0, index));
      secondNumber = parseInt(expression.slice(index + 1));
      finalResult = operate(firstNumber, operator, secondNumber);
      document.getElementById("display").innerText = finalResult;
      return finalResult;
    }
  }
  console.log(expression);
}
