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
  if (operator === "/" && secondNumber === 0) {
    return "Noob";
  }
  if (operator === "+") {
    finalResult = add(firstNumber, secondNumber);
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

function updateDisplay(number) {
  document.getElementById("display").innerText += number;
}

function clearDisplay() {
  let expression = document.getElementById("display");
  expression.textContent = "";
}

function deleteLastEntry() {
  let expression = document.getElementById("display").innerText;
  let deleteLast = expression.split("");
  deleteLast.pop();

  let updatedExpression = deleteLast.join("");
  document.getElementById("display").innerText = updatedExpression;
}

function addDecimal() {
  let expression = document.getElementById("display");

  if (!expression.textContent.includes(".")) {
    expression.textContent += ".";
  }
}
// Function to calculate the result
function calculate() {
  let expression = document.getElementById("display").innerText;

  let operators = ["+", "-", "X", "/", "%"];
  let numbers = expression.split(/[-+X/]/).map(parseFloat);
  let operations = expression.split(/[0-9.]+/).filter(Boolean);

  for (let i = 0; i < operators.length; i++) {
    while (operations.includes(operators[i])) {
      let index = operations.indexOf(operators[i]);
      let result = operate(numbers[index], operators[i], numbers[index + 1]);

      if (result === "Noob") {
        document.getElementById("display").innerText = result;
        return;
      }

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
