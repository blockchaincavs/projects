let firstPasswordEl = document.getElementById("pass-one");
let secondPasswordEl = document.getElementById("pass-two");
let thirdPasswordEl = document.getElementById("pass-three");
let fourthPasswordEl = document.getElementById("pass-four");

// array of characters used in the password
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "l", "m", "n", "o", 
    "1", "2", "3", "4", "5", "7", "8", "9", "0", 
        "J", "K", "L", "M", "W", "X", "Y", "Z",
            "!", "@", "#", "$", "%", "^", "&", "*"];

// Number of characters in each password
const numCharacters = 10; 

function getRandomPassword() {
    let randPassword = "";
    // Math.random() gives a random number between 0 and 1 but not 1
    // Math.floor() gets rid of hte decimal points

    // get random characters up to specefied numCharacters (password length)
    for (let i = 0; i < numCharacters; i++) {
        let randIndex = "";
        randIndex = Math.floor(Math.random() * characters.length);
        randPassword += characters[randIndex];
    }

    return randPassword;
}

function generatePasswords() {
    
    // generate 4 random passwords
    firstPasswordEl.textContent = getRandomPassword();
    secondPasswordEl.textContent = getRandomPassword();
    thirdPasswordEl.textContent = getRandomPassword();
    fourthPasswordEl.textContent = getRandomPassword();
}
