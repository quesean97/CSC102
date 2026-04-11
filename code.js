//setting the parameters for the correct solution
let correctTime = "16:20";
//setting the number of attempts taken
let attempts = 0;
//setting whether the game is live or not (able to input a new answer)
let gameActive = true;
//checks for correct or incorrect input for answer
function checkAnswer() {
//when the game is over allow to restart
    if (!gameActive) return;
//gives user a place to enter value
    let userAnswer = document.getElementById("userInput").value;
   //display message based on users input
    let message = document.getElementById("message");
//Displays a congratulatory message when the answer is correct
    if (userAnswer == correctTime) { message.textContent = "High Five! (^.^)/"; 
       //Allows user to restart the game
        endGame();
        return;

    }
    //adds variation for multiple attempts
        attempts++;
//after the first attempt this message will show
        if (attempts == 1) {
            message.textContent = "Come on Bro! Try Again!";
        }
//after the 2nd attempt this message will show
        else if (attempts == 2) {
            message.textContent = "You Can Do it! Try Again!";
        }
//after 3rd attempt final warning before end of game
        else if (attempts == 3) {
            message.textContent = "Last Try! Try Again!";
        }
//no correct answer will result in end of game and prompt user to restart with all attempts
    else {
        //lets user know they have failed the game
        message.textContent = "Game Over";
        //allows the user to start from the beginning.
        endGame();
    }
    }
//when the end of the game is reached this will happen
function endGame() {
    //prevents further attempts
    gameActive = false;
    //adds button to restart game
    document.getElementById("restartBtn").style.display = "inline";

}
//establishes the loop to beginning of game 
function restartGame() {
    //resets number of attempts tried to "0"
    attempts = 0;
    //game is started
    gameActive = true;
    //no message displayed at beginning of game
    document.getElementById("message").textContent = ""
    //clears the previous attempt
    document.getElementById("userInput").value = ""
    // no animation on restart
    document.getElementById("restartBtn").style.display = "none";

}