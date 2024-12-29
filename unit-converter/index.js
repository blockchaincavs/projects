/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const STARTING_NUMBER_TO_CONVERT = 20;
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

let inputTextEl = document.getElementById("text-input-units");
inputTextEl.value = STARTING_NUMBER_TO_CONVERT;

// Grab elements to display conversions
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function convertInput() {
    const inputNum = Number(inputTextEl.value);

    // Check for input error
    if (isNaN(inputNum)) {
        alert("Input is not a number.");
        return;
    }
    
    // Meters and feet unit conversions
    let meters = inputNum / meterToFeet;
    let feet = inputNum * meterToFeet;
    lengthEl.textContent = `${inputNum} meters = ${feet.toFixed(3)} feet | ${inputNum} feet = ${meters.toFixed(3)} meters`

    // Liters and Gallons unit conversions
    let gallons = inputNum * literToGallon;
    let liters = inputNum / literToGallon;
    volumeEl.textContent = `${inputNum} liters = ${gallons.toFixed(3)} gallons | ${inputNum} gallons = ${liters.toFixed(3)} liters`

    // Kilograms and Pounds unit conversions
    let pounds = inputNum * kilogramToPound;
    let kilograms = inputNum / kilogramToPound;
    massEl.textContent = `${inputNum} kilos= ${pounds.toFixed(3)} pounds | ${inputNum} pounds = ${kilograms.toFixed(3)} kilograms`
    
}

// Convert at startup since we have a default input
convertInput();