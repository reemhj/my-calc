let expression = '';

function appendToResult(value) {
  expression += value + '(';
  document.getElementById('result').value += value;
}

function calculate() {
  try {
    const result = eval(expression + ')');
    document.getElementById('result').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = '';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function power() {
  expression += '**';
  document.getElementById('result').value = expression;
}