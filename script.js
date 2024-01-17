let currentInput = '';
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let display = document.getElementById("display");

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        if (firstNum === "") {
            firstNum = parseFloat(currentInput);
            operator = op;
            currentInput = op;
            updateDisplay();
        } else {
            calculateResult();
            operator = op;
            currentInput = op;
            updateDisplay();
        }
    }
}

function clearDisplay() {
    currentInput = '';
    firstNum = "";
    operator = '';
    updateDisplay();
}

function calculateResult() {
    if (firstNum !== "" && currentInput !== '') {
        let secondNum = parseFloat(currentInput);
        switch (operator) {
            case '+':
                currentInput = (firstNum + secondNum).toString();
                break;
            case '-':
                currentInput = (firstNum - secondNum).toString();
                break;
            case '*':
                currentInput = (firstNum * secondNum).toString();
                break;
            case '/':
                currentInput = (firstNum / secondNum).toString();
                break;
        }
        updateDisplay();
        firstNum = "";
        operator = '';
    }
}

function updateDisplay() {
    display.value = currentInput;
}
