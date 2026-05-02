//Sets outputs for the defined variables 
var intervalidID= 0;
//starting location for the Y axis
var startTop = 200;
// starting location for the X axis
var startLeft = 201;
//how much the image is going to change per left and right 
var dLeft = 15;
var dTop = 15;

// creating the function for the start button to work
function startInterval()
{
    intervalidID = setInterval(moveIT, 95);
}

//when the button is clicked the action of moving the image will follow these rules 
function moveIT()
{
    var imageBall = document.getElementById("imgBall");
    imageBall.style.left = startLeft + "px";
    imageBall.style.top = startTop + "px";
//tells the page to show the values of the top and left location in pixels
    document.getElementById("msg").innerHTML = "top = " + imageBall.style.top + " left = " + imageBall.style.left;
// when the image reaches the limit then begin the inverse of the change from left to right to right to left 
    if ((startLeft + imageBall.width >= window.innerWidth-15) || (startLeft <= 200))
    {
        dLeft = -dLeft;
    }
// when the image reaches the limit then begin the inverse of the change from top to bottom to bottom to top
    if ((startTop + imageBall.height >= window.innerHeight-15) || (startTop <= 90))
    {
        dTop = -dTop;
    }
    startTop += dTop;
    startLeft += dLeft;
}
//allow stop button to stop the image from moving 
function stopInterval()
{
    clearInterval(intervalidID);
    
}