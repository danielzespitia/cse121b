/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {

  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {

  return number1 - number2;
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const factor1 = Number(document.querySelector('#factor1').value);
  const factor2 = Number(document.querySelector('#factor2').value);

  document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
  if (divisor === 0) {
    return 'Cannot divide by zero';
  }
  return dividend / divisor;
}

const divideNumbers = () => {
  const dividend = Number(document.querySelector('#dividend').value);
  const divisor = Number(document.querySelector('#divisor').value);

  document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.getElementById('getTotalButton').addEventListener('click', function() {
  
  var subtotal = parseFloat(document.getElementById('subtotal').value);
  var membershipCheckbox = document.getElementById('membershipCheckbox');
  var discount = membershipCheckbox.checked ? subtotal * 0.2 : 0;
  var total = subtotal - discount;

  document.getElementById('totalspan').textContent = total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);