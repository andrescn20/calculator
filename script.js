const calculation = {
    firstNumber: '',
    operation: '',
    secondNumber: '',
    result: ''
};

let firstReady = false;

let inputNumber = [];
let operator = '';
let secondOperation = false;

const screen = document.getElementById('screen');

const numberBtns = document.querySelectorAll('.num');
numberBtns.forEach ((number) => {
number.onclick = setNumber; 
});

const operationBtns = document.querySelectorAll('.operator');
operationBtns.forEach ((operation) => {
operation.onclick = setOperator;
});

const equalBtn = document.getElementById('equal');
equalBtn.onclick = ()=>{
    secondOperation = false;
    calculate();
    
}
const percentageBtn = document.getElementById('percentage');
percentageBtn.onclick = () => {
    if (firstReady === false){

        screen.innerHTML = 'Please enter a number.'

    }
    else{
        currentNumber = screen.innerHTML;
        percentageResult = parseFloat(currentNumber)/100;
        screen.innerHTML = percentageResult;
        firstReady = false;
        inputNumber= [];
    }
}

const clearBtn = document.getElementById('clear');
clearBtn.onclick = () => {
    inputNumber = [];
    screen.innerHTML = 'Waiting for input...';
    firstReady = false;
    secondOperation = false;
    calculation.firstNumber = '';
    calculation.operation = '';
    calculation.secondNumber = '';
    calculation.result = '';
}

const signBtn = document.getElementById('sign');
signBtn.onclick = () => {
    if (firstReady === false){
        screen.innerHTML = 'Please enter a number first'
    }else{
     currentNumber = parseFloat(screen.innerHTML);
     screen.innerHTML = -1*currentNumber;
     calculation.firstNumber = screen.innerHTML;
    }
}

function setOperator(e){
    if (secondOperation === false){
        inputNumber = [];
        firstReady = true;
        operator = e.target.innerHTML;
        calculation.operation = operator;
        screen.innerHTML = operator;
        secondOperation = true;
        
    }else if (secondOperation === true) {
        calculate();
        calculation.result = '';
        operator = e.target.innerHTML;
        inputNumber = [];
        firstReady = true;
        calculation.operation = operator;
        screen.innerHTML = calculation.firstNumber;
    }
}

function setNumber(e){
    let selectedNumber = e.target.innerHTML;
    inputNumber.push(selectedNumber);
    printScreen(inputNumber);
    firstReady = true;
}

function printScreen(array){

    let cleanOutput = array.toString().replace(/[',']/g , '');    
    screen.innerHTML= cleanOutput;
    setObjectNumbers(cleanOutput);
}

function setObjectNumbers(number){
    if (firstReady === false){
        calculation.firstNumber = number;

    }else{
        calculation.secondNumber = number;
    }
}

function calculate(){

    let first = parseFloat(calculation.firstNumber);
    let operator = calculation.operation;
    let second = parseFloat(calculation.secondNumber);
    let result = null;

    switch(operator){
        case('+'): result = first + second; 
                            break;
        case('-'): result = first - second; 
                            break;
        case('/'): result = first / second; 
                            break;
        case('x'): result = first * second; 
                            break;
        case('+/-'): result = first*(-1);
                            break;
        default:   result = 'not yed coded'
    }
    printScreen(`${result}`);
    calculation.result = result;
    calculation.firstNumber = result;
    calculation.secondNumber ='';
    calculation.operation = '';
    inputNumber = [];


}

