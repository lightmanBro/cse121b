/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}
function addNumbers(){
    const addOne = document.querySelector('#add1').value;
    const addTwo = document.querySelector('#add2').value;
    document.querySelector('#sum').value = add(addOne,addTwo); 
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers);
/* Function Expression - Subtract Numbers */
function subtract(number1,number2){
    return number1 - number2
}
function subtractNumbers(){
    const subOne = document.querySelector('#subtract1').value;
    const subTwo = document.querySelector('#subtract2').value;
    document.querySelector('#difference').value = subtract(subOne,subTwo);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
multiply = (muntiplyOne, multiplyTwo)=>{
    return muntiplyOne * multiplyTwo;
}
multiplyNumbers = ()=>{
const factor1 = document.querySelector('#factor1').value;
const factor2 = document.querySelector('#factor2').value;
document.querySelector('#product').value = multiply(factor1,factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers)


/* Open Function Use - Divide Numbers */
divide = (divideOne,divideTwo)=>{
    return divideOne / divideTwo;
}

divideNumber = ()=>{
    const divisor = document.querySelector('#divisor').value;
    const dividend = document.querySelector('#dividend').value;
    document.querySelector('#quotient').value = divide(divisor,dividend)
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumber);


/* Decision Structure */
let currentDate = new Date().getFullYear();
document.querySelector('#year').innerHTML = currentDate;
console.log(currentDate)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML += numberArray;
/* Output Odds Only Array */
let oddNumbers = numberArray.filter(num=> num % 2);
document.querySelector('#odds').innerHTML += oddNumbers;
/* Output Evens Only Array */
let evenNumbers = numberArray.filter(num=> num % 2 == 0);
document.querySelector('#evens').innerHTML += evenNumbers;
/* Output Sum of Org. Array */
let sum = numberArray.reduce((sum , number)=> sum + number);
document.querySelector('#sumOfArray').innerHTML += sum;
/* Output Multiplied by 2 Array */
let times = numberArray.map(num=>num*2);
document.querySelector('#multiplied').innerHTML += times;
/* Output Sum of Multiplied by 2 Array */
let totalSum = numberArray.map(num=>num*2).reduce((sum , number)=> sum + number);
document.querySelector('#sumOfMultiplied').innerHTML += totalSum;
console.log(totalSum);
