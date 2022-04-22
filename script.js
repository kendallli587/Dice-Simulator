// Dice Simulator

// Global Variables
let rollOneEl = document.getElementById("rollOneBtn");
let rollTwoEl = document.getElementById("rollTwoBtn");
let rollThreeEl = document.getElementById("rollThreeBtn");
let rollAnyEl = document.getElementById("rollAnyBtn")
let resultEl = document.getElementById("result");
let resultTwoEl = document.getElementById("resultTwo");
let resultThreeEl = document.getElementById("resultThree");
let resultFourEl = document.getElementById("resultFour");
let dieInputEl = document.getElementById("dieNumInput");
let clearConsoleEl = document.getElementById("clearBtn");

rollOneEl.addEventListener("click", rollOneDice);
rollTwoEl.addEventListener("click", rollTwoDice);
rollThreeEl.addEventListener("click", rollThreeDice);
rollAnyEl.addEventListener("click", rollAnyDice);
clearConsoleEl.addEventListener("click", clearConsole);
dieInputEl.addEventListener("input", checkValue);

function rollDie() {
    let randTotal = Math.random();
    if (randTotal <= (1 / 6)) {
        diceTotal = 1;
    } else if (randTotal <= (2/6)) {
        diceTotal = 2;
    } else if (randTotal <= (3/6)) {
        diceTotal = 3;
    } else if (randTotal <= (4/6)) {
        diceTotal = 4;
    } else if (randTotal <= (5/6)) {
        diceTotal = 5;
    } else {
        diceTotal = 6;
    }
    console.log(diceTotal);
}

function rollOneDice() {
    rollDie();
    resultEl.innerHTML = diceTotal;
}

function rollTwoDice() {
    let total = 0;
    rollDie();
    total += diceTotal;
    rollDie();
    total += diceTotal;
    resultTwoEl.innerHTML = total;
}

function rollThreeDice() {
    let total = 0;
    rollDie();
    total += diceTotal;
    rollDie();
    total += diceTotal;
    rollDie();
    total += diceTotal;
    resultThreeEl.innerHTML = total;
}

function rollAnyDice() {
    let total = 0;
    let diceNum = +dieInputEl.value;
    for (let n = 1; n <= diceNum; n++){
        rollDie();
        total += diceTotal;
    }
    resultFourEl.innerHTML = total;
}

function clearConsole() {
    console.clear();
}

function checkValue() {
    let diceNum = +dieInputEl.value;
    if (diceNum < 0) {
        diceNum = 0;
        dieInputEl.value = 0;
    }
}