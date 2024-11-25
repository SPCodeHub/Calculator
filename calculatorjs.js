let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
  const display = document.getElementById('display');
  currentInput += number;
  display.value = currentInput;
}

function performOperation(op) {
  if (currentInput === '') return;
  operator = op;
  firstOperand = currentInput;
  currentInput = '';
}

function calculate() {l̥
  if (currentInput === '' || firstOperand === '' || operator === '') return;
  const result = eval(${firstOperand} ${operator} ${currentInput});
  document.getElementById('display').value = result;
  currentInput = result;
  firstOperand = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  document.getElementById('display').value = '';
}