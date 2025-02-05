'use strict'


let highScore = 0;  
let generatedNumber;
let score = 20;
// Default range on first load (1-20)
let minRange = 1;
let maxRange = 20;

// proper random function 
const properRandomFunction = function (minRange, maxRange) {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
};

function rangeValues() {
    document.querySelector(".min-range").textContent = minRange;
    document.querySelector(".max-range").textContent = maxRange;
}

function resetGame(promptUser = true) {
    if (promptUser) {
        alert("☺ - Choose the range you want to guess the number");

        minRange = Number(prompt("1️⃣ Insert the MINIMUM value for your range"));
        maxRange = Number(prompt("2️⃣ Insert the MAXIMUM value for your range"));

        if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
            alert("⚠️ Invalid range! Using default values (1-20).");
            minRange = 1;
            maxRange = 20;
        }
    }

    generatedNumber = properRandomFunction(minRange, maxRange);
    // console.log("Generated Number:", generatedNumber); // Debugging

    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#00012c";
    document.querySelector(".random-number").textContent = "?";
    document.querySelector("input").value = "";
    rangeValues();
}

// Ensure DOM elements exist before modifying them
document.addEventListener("DOMContentLoaded", function () {
    resetGame(false); // Start game without asking for a range
    document.querySelector(".btn-play-again").addEventListener("click", () => resetGame(true));
});


function Message(message) {
    document.querySelector(".word-status").textContent = message
    return
}

function scoreCount() {
    score--
    document.querySelector(".score").textContent = score;

}
function pauseGuessNumber(state) {
    document.querySelector(".box-question").style.animationPlayState = `${state}`
}

//guess number section

document.querySelector(".btn-generate").addEventListener('click', () => {
    
    const guess = Number(document.getElementsByTagName("input")[0].value)

    if (score === 0) {
        document.querySelector("body").style.backgroundColor = "#c22e14";
        document.getElementsByTagName('button').style.backgroundColor = 'transparent'
        Message("Game Over")
        return
    } if (guess === "" || isNaN(guess)) {
        Message("📛 Invalid number")
    }

    else if (guess < generatedNumber) {
        Message("🙄 To Low")
        scoreCount()

    } else if (guess > generatedNumber) {
        Message("🥶 To High")
        scoreCount()
    }
    else if (guess === generatedNumber) {
        document.getElementsByClassName("random-number")[0].textContent = generatedNumber
        document.querySelector("body").style.backgroundColor = "#393cf3";
        Message("🎉😎 Congratulations you WON")

        //pause the rounded guess number question mark
        pauseGuessNumber("paused")

        if (score > highScore) {
            highScore = score;
            document.querySelector(".high-score").textContent = highScore;
        }
    }
})
