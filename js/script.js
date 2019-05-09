"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed
let operatorValue;

Array.from(numbers).map(number => {
  number.addEventListener("click", function(){
    if (resultDisplayed === false){
      input.innerHTML += this.innerHTML;
    }
    else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
      resultDisplayed = false;
      input.innerHTML = this.innerHTML;
    }
    else{
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += this.innerHTML;
    }
  });
});

Array.from(operators).map(operator => {
  operator.addEventListener("click", function(e) {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];
    if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
      const newString = currentString.substring(0, currentString.length - 1) + this.innerHTML;
      input.innerHTML = newString;
    }
    else if(currentString == 0){
      console.log("Enter a number first");
    }
    else{
      input.innerHTML += e.target.innerHTML;
    }
  });
})

result.addEventListener("click", function(){
  const currentString = input.innerHTML;
  // console.log(currentString);
  const numberStringArray = currentString.split(/\+|\-|\*|\//g);
  // console.log(numberStringArray);
  let numbersArray = [];
  numberStringArray.forEach(function(number){
    numbersArray.push(Number(number));
  });
  const operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
  // console.log(numbersArray);
  // console.log(operatorsArray);
  let multiply = operatorsArray.indexOf("*");
  while (multiply != -1){
    numbersArray.splice(multiply, 2, numbersArray[multiply] * numbersArray[multiply + 1]);
    operatorsArray.splice(multiply, 1);
    multiply = operatorsArray.indexOf("*");
  }
  let divide = operatorsArray.indexOf("/");
  while(divide != -1){
    numbersArray.splice(divide, 2, numbersArray[divide] / numbersArray[divide + 1]);
    operatorsArray.splice(divide, 1);
    divide = operatorsArray.indexOf("/");
  }
  let add = operatorsArray.indexOf("+");
  while(add != -1) {
    numbersArray.splice(add, 2, numbersArray[add] + numbersArray[add + 1]);
    operatorsArray.splice(add, 1);
    add = operatorsArray.indexOf("+");
  }
  let subtract = operatorsArray.indexOf("-");
  while(subtract != -1){
    numbersArray.splice(subtract, 2, numbersArray[subtract] - numbersArray[subtract + 1]);
    operatorsArray.splice(subtract, 1);
    subtract = operatorsArray.indexOf("-");
  }
  input.innerHTML = numbersArray;
});

// clearing the input on press of clear
clear.addEventListener('click', function(){
  input.innerHTML = '';
});
