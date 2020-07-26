const numbers = document.querySelectorAll(".number");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let calculatorOn = false;
let calculated = false;

const inputNumber = (number) => {
  if (currentNumber === "0" || calculated === true) {
    currentNumber = number;
    calculated = false;
  }
  else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {

  number.addEventListener("click", (event) => {
    if (calculatorOn) {
      inputNumber(event.target.value);
      updateScreen(currentNumber);
    }
  })
});

const calculatorScreen = document.querySelector(".calculator-screen");
let calculatorMessage = document.querySelector(".calculator-message");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    if (calculatorOn) {
      inputOperator(event.target.value);
      
    }
  })
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    calculationOperator = operator;
  }

  prevNumber = currentNumber;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");



equalSign.addEventListener("click", () => {
  if (calculatorOn) {
    calculate();
    updateScreen(currentNumber);
  }
});

const calculate = () => {
  let result = "";

  switch(calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }

  currentNumber = result;
  calculated = true;
  calculatorMessage.innerHTML = `
    <i class="fa fa-signal"></i> Telkomsat <i class="fa fa-battery-full"></i>
  `;
  calculationOperator = "";
}

const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
  if (calculatorOn) {
    clearAll();
    updateScreen(currentNumber);
    
  }
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", () => {
  // console.log("equal button is pressed");
  if (calculatorOn) {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
  }
});

const inputDecimal = (dot) => {
  if (!currentNumber.includes(".")) {
    currentNumber += dot;
  }
};

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
  if (calculatorOn) {
    // console.log(currentNumber / 100);

    currentNumber /= 100;
    updateScreen(currentNumber);
  }
})

const powerButton = document.querySelector(".power-btn");

powerButton.addEventListener("click", () => {
  console.log("power button is pressed");

  if (calculatorOn) {
    calculatorOn = false;
    currentNumber = "";
    calculatorMessage.style.color = "#252525";
  } else {
    calculatorOn = true;
    currentNumber = "0"
    calculatorMessage.style.color = "white";
  }

  updateScreen(currentNumber);
});

const del = document.querySelector(".delete");

del.addEventListener("click", () => {
  if (calculatorOn) {
    console.log(currentNumber.length);
    if (currentNumber !== "0" && currentNumber.length !== 1) {
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    } else {
      currentNumber = "0";
    }

    updateScreen(currentNumber);
  }
});