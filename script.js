const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-password");
const allCheckBox = document.querySelectorAll("input[type=checkbox");

const symbols = "@#%$&*()_+[]{}|;:'\",.<>?/~`"

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(){
    indicator.style.backgroundColor = color;
}

function getRandInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function getRandomNumber(){
    return getRandInt(0,9);
}

function getLowerCase(){
    return String.fromCharCode(getRandInt(97,123));
}

function getUpperCase(){
    return String.fromCharCode(getRandInt(65,91));
}

function generateSymbol(){
    const randNum = getRandInt(0, symbols.length);
    return symbols.charAt(randNum);
}