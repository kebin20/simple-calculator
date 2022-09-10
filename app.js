// HTML Components
document.addEventListener("DOMContentLoaded", () => {
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let oldValue = ""
    let newValue= ""
    
   operators.forEach(operator => operator.addEventListener('click', (e) => {
      userInput(e.target.textContent);
    }))
    
    numbers.forEach(number => number.addEventListener('click', (e) => {
      userInput(e.target.textContent);
    }))
  })
  
  function userInput(num) {
    console.log(num)
  }
  
                        