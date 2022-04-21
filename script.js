
let inputs = {}
let inputNumber = [];
const screenNumber = document.createTextNode('');

// Fetch Buttons
    //Controls:
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const sign = document.getElementById('sign');

    //Operations:
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const decimal = document.getElementById('decimal');
const sum = document.getElementById('sum');

    //Numbers:
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');

//Fetch Screen Div:
const screen = document.getElementById('screen');

const numberBtns = document.querySelectorAll('.num');
numberBtns.forEach ((number) => {
number.onclick = setNumber; 
});

function setNumber(e){
    let selectedNumber = e.target.innerHTML;
    inputNumber.push(selectedNumber);
    printScreen(inputNumber);
    console.log(inputNumber);
}


function printScreen(array){

    let cleanNumber = array.toString().replace(/[',']/g , '');    
    screen.innerHTML= cleanNumber;
}