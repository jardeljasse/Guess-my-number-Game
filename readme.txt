What we can get ou look with this simple game

I'm happy to share with you the little projgect game, knowed as 'guess my number'
How it work🤔?

▶In the first time you should guess the number that will generated with the computer in range of [1-20]

Choose the range would you like to guess

You have a 'play again' button to do it. 

🎯Tips: yes you have tips to help  you.
    When you trying to guess the number, if you wrong the computer will help you if the number typed is greater or less than 'number to guess'


🥉🥳You can see you scores and best score

Feature used

1️⃣ Strict mode
    -> I used the 'strict mode' to prevent the little things that  'non-strict' mode handle it as alerts, but in the strict mode result erros. Example, assign to no variable declared, with strict mode return erro.

    Strict mode is a feature in JavaScript that allows you to place your code in a more restricted and safer environment. It helps you write cleaner, more secure, and more optimized code by catching common mistakes and preventing the use of problematic or deprecated features.


2️⃣ Begining of DRY (Do not Repeat Yourself)
    -> DRY stands for "Don't Repeat Yourself". It is a fundamental principle of software development aimed at reducing repetition in code. The idea is to avoid duplicating code by abstracting common functionality into reusable components, such as functions, modules, or classes.


You can download it on my GitHub repositoty
🌐https://www.github/jardel-jarsse

Try play the game    

    =============
    'use strict'

// generating random number
// let generatedNumber = Math.floor(Math.random() * (20 - 0)) + 0
let score = 20;
let highScore = 0;
let generatedNumber

// document.querySelector(".score").textContent = score;
console.log(document.querySelector(".score"))

// proper random function
const properRandomFunction = function (minRange, maxRange) {

    let generatedNumberProper = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange
    return generatedNumberProper;
}

function rangeValues() {
    document.querySelector(".min-range").textContent = minRange
    document.querySelector(".max-range").textContent = maxRange

}

// restart game/ reset game/ play again
// document.querySelector(".btn-play-again").addEventListener('click', function () {
//     // generatedNumber = Math.floor(Math.random() * (20 - 0) + 0)

//     // generatedNumber = properRandomFunction(minRange, maxRange)

//     alert("Choose the range would you want to guess the number")
//     minRange = Number(prompt("Insert the MINIMUM value to make your range"))
//     maxRange = Number(prompt("Insert the MAXIMUM value to make your range"))
//     generatedNumber = properRandomFunction(minRange, maxRange)
//     rangeValues()
//     console.log("generated number " + generatedNumber)
    
//     pauseGuessNumber('running')
//     document.querySelector(".score").textContent = 20;
//     document.querySelector("body").style.backgroundColor = "#00012c";
//     Message("🍳 Try to guess my number")
//     document.getElementsByClassName("random-number")[0].textContent = "?"
//     score = 20
//     document.getElementsByTagName("input")[0].value = ""

//     return

// })

// random range 
alert("☺ - Choose the range would you want to guess the number")
let minRange = Number(prompt("1️⃣ Insert the MINIMUM value to make your range"))  
let maxRange = Number(prompt("2️⃣ Insert the MAXIMUM value to make your range"))

if(isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange){
    alert("⚠️ Invalid range! Please reload and enter a valid range.")
}else{
    generatedNumber = properRandomFunction(minRange, maxRange)
    rangeValues()
    console.log("generated number " + generatedNumber)
}


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

        pauseGuessNumber("paused")

        if (score > highScore) {
            highScore = score;
            document.querySelector(".high-score").textContent = highScore;
        }
    }
})


1234567890-=/*