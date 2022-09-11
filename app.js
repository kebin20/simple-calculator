//Global variables
let valueOne = "";
let valueTwo = "";
let operatorValue = "";

// HTML Components
document.addEventListener("DOMContentLoaded", () => {
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");
  let result = document.querySelector(".result");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let prevScreen = document.querySelector("#prev-screen");
  let nextScreen = document.querySelector("#next-screen");

  numbers.forEach((number) =>
    number.addEventListener("click", (e) => {
      //NOTE: In order to get the value from the HTML element, you need to specify the event being targeted (e.target), which in this case is the textContent
      numberHandler(e.target.textContent);
      if (valueTwo.length <= 11) {
        nextScreen.textContent = valueTwo;
      } else {
        result.textContent = parseInt(valueTwo).toLocaleString();
      }
    })
  );

  operators.forEach((operator) =>
    operator.addEventListener("click", (e) => {
      operatorHandler(e.target.textContent);
      prevScreen.textContent = `${valueOne} ${operatorValue} `;
      nextScreen.textContent = valueTwo;
    })
  );

  clear.addEventListener("click", () => {
    valueOne = "";
    valueTwo = "";
    operatorValue = "";
    nextScreen.textContent = valueOne;
    prevScreen.textContent = valueTwo;
    result.textContent = "";
  });

  equal.addEventListener("click", () => {
    //NOTE: This parent if statement is for when the user clicks on the equal button, it will not display anything
    if (valueOne != "" && valueTwo != "") {
      calculate();
      if (valueOne.length <= 6) {
        result.textContent = valueOne;
      } else {
        result.textContent = parseInt(valueOne).toLocaleString();
      }
    }
  });

  decimal.addEventListener("click", () => {
    addDecimal();
  });
});

function numberHandler(num) {
  if (valueTwo.length <= 10) {
    valueTwo += num;
  }
}

function operatorHandler(operator) {
  operatorValue = operator;
  valueOne = valueTwo;
  //NOTE: In order to NOT double up the number that is being inputted onto the display, valueTwo variable  should be made empty
  valueTwo = "";
}

function calculate() {
  valueOne = Number(valueOne);
  valueTwo = Number(valueTwo);

  if (operatorValue === "+") {
    valueOne += valueTwo;
  } else if (operatorValue === "-") {
    valueOne -= valueTwo;
  } else if (operatorValue === "÷") {
    valueOne /= valueTwo;
  } else if (operatorValue === "x") {
    valueOne *= valueTwo;
  }

  valueOne = roundNum(valueOne);
  valueOne = valueOne.toString();
  valueTwo = valueTwo.toString();
}

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function addDecimal() {
  if (!valueTwo.includes(".")) {
    valueTwo += ".";
  }
}
