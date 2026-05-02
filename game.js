//generate a random number between 1-3
function rcb()
{//both players are generate a number 1-3
    var player1 = Math.ceil(Math.random() *3);
    var player2 = Math.ceil(Math.random() *3);
    //setting images as variables so the user has an image to reference when they play
    var rockImage = "fist.jpg";
    var paperImage = "paper.jpg";
    var scissorsImage = "scissors.png";
    //clears the result of the winner
    document.getElementById("winner").innerHTML = " ";
    //when player one generates a 1 they will be rock and a photo will display
    if (player1 == 1)
    {
        document.getElementById("player1Image").src = rockImage;
    }
    //when player one generates a 2they will be paper and a photo will display

    else if (player1 ==2)
    {
        document.getElementById("player1Image").src = paperImage;

    }
    //when player one generates a 3 they will be scissors and a photo will display

    else
    {
        document.getElementById("player1Image").src = scissorsImage;
    }

//same rules as above but now for player 2
     if (player2 == 1)
    {
        document.getElementById("player2Image").src = rockImage;
    }
    else if (player2 ==2)
    {
        document.getElementById("player2Image").src = paperImage;

    }
    else
    {
        document.getElementById("player2Image").src = scissorsImage;
    }
//setting the number generated between each player to be equal will be a draw 
    if (player1 == player2)
    {
        document.getElementById("winner").innerHTML = "Its a Draw!";
    }
//setting the winning outcomes between the random generated outcomes for player 1 to win
    else if ( (player1 ==1 && player2 ==3  ||  (player1 == 2 && player2 == 1)  || (player1 ==3 && player2 == 2) ))
    {
        document.getElementById("winner").innerHTML = "Player 1 wins!!!";
    }
    //if none of them are true Player 2 wins
    else
    {
        document.getElementById("winner").innerHTML = "Player 2 is the winner!!!";
    }
}