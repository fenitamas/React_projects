function performOperation(operation) {
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);

    if (isNaN(operand1) || isNaN(operand2)) {
        alert('Please enter valid numeric values for operands.');
        return;
    }

    var result;
    switch (operation) {
        case 'add':
            result = operand1 + operand2;
            break;
        case 'subtract':
            result = operand1 - operand2;
            break;
        case 'multiply':
            result = operand1 * operand2;
            break;
        case 'divide':
            if (operand2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            alert('Invalid operation.');
            return;
    }

    document.getElementById('result').innerHTML = 'Result: ' + result;
}

document.getElementById('addBtn').addEventListener('click', function() {
    performOperation('add');
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    performOperation('subtract');
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    performOperation('multiply');
});

document.getElementById('divideBtn').addEventListener('click', function() {
    performOperation('divide');
});