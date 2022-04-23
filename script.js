const calculation = {
    firstNumber: '',
    operation: '',
    secondNumber: '',
    result: ''
};

let firstReady = false;

let inputNumber = [];
const screenNumber = document.createTextNode('');
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
    calculate();
    
}
const percentageBtn = document.getElementById('percentage');
percentageBtn.onclick = () => {
    currentNumber = screen.innerHTML;
    percentageResult = parseInt(currentNumber)/100;
    screen.innerHTML = percentageResult;
    firstReady = false;
    inputNumber= [];
}

const clearBtn = document.getElementById('clear');
clearBtn.onclick = () => {
    inputNumber = [];
    screen.innerHTML = '';
    firstReady = false;
    secondOperation = false;
    calculation.firstNumber = '';
    calculation.operation = '';
    calculation.secondNumber = '';
    calculation.result = '';
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
        // calculation.firstNumber = calculation.result;
        calculation.result = '';
        operator = e.target.innerHTML;
        inputNumber = [];
        firstReady = true;
        calculation.operation = operator;
        screen.innerHTML = operator;
    }
}

function setNumber(e){
    let selectedNumber = e.target.innerHTML;
    inputNumber.push(selectedNumber);
    printScreen(inputNumber);
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

    let first = parseInt(calculation.firstNumber);
    let operator = calculation.operation;
    let second = parseInt(calculation.secondNumber);
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
        default:   result = 'not yed coded'
    }
    printScreen(`${result}`);
    calculation.result = result;
    calculation.firstNumber = result;
    calculation.secondNumber ='';
    calculation.operation = '';
    inputNumber = [];


}

