// variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1
     console.log(randomNumber)
     
     // if statement to evaluate who turn is it
     if (player1Turn) {
         player1Score += randomNumber
         player1Dice.textContent = randomNumber
         player1Scoreboard.textContent = player1Score
         message.textContent = "Player 1 rolled "
         player1Dice.classList.remove("active");
         player2Dice.classList.add("active");
        
     } else {
        player2Score += randomNumber
        player2Dice.textContent = randomNumber 
        player2Scoreboard.textContent = player2Score
        message.textContent = "Player 2 rolled "
        player2Dice.classList.remove("active");
         player1Dice.classList.add("active");
       
        
     }
     player1Turn = !player1Turn
 })
 
