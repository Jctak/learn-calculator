"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed
let hasOperator = false;
let numQue, numQueTwo, total, operatorValue;

// adding click handlers to number buttons
numbers.forEach(function(number){
  number.addEventListener('click', function(){
    if(hasOperator === false){
      input.innerHTML += this.innerHTML;
      numQue = parseInt(input.innerHTML, 10);
    }
    else if(hasOperator === true){
      input.innerHTML += this.innerHTML;
      numQueTwo = parseInt(input.innerHTML, 10);
    }
  });
});

// adding click handlers to the operation buttons
operators.forEach(function(operator){
  operator.addEventListener('click', function(){
    hasOperator = true;

    if(numQue >= 0){
      input.innerHTML = this.innerHTML;
      operatorValue = input.innerHTML;

      if(operatorValue === '+'){
        operatorValue = 1;
      }else if (operatorValue === '-') {
        operatorValue = 2;
      }
      else if (operatorValue === '*') {
        operatorValue = 3;
      }
      else if (operatorValue === '/') {
        operatorValue = 4;
      }
    }
  });
});

// on click of 'equal' button
result.addEventListener('click', function(){
  if(operatorValue === 1){
    total = (numQue + numQueTwo);
    input.innerHTML = total;
  }
  else if(operatorValue === 2){
    total = numQue + numQueTwo;
    input.innerHTML = total;
  }
  else if(operatorValue === 3){
    total = (numQue * numQueTwo);
    input.innerHTML = total;
  }
  else if(operatorValue === 4){
    total = (numQue / numQueTwo);
    input.innerHTML = total;
  }
});

// clearing the input on press of clear
clear.addEventListener('click', function(){
  input.innerHTML = '';
  numQue = undefined;
  numQueTwo = undefined;
  hasOperator = false;
  operatorValue = undefined;
});
