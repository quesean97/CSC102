//Sets outputs for the defined variables 
var intervalidID= 0;
//starting location for the Y axis
var startTop = 100;
// starting location for the X axis
var startLeft = 100;
//how much the image is going to change per left and right 
var dLeft = 15;
var dTop = 15;

// creating the function for the image to move within the screen
function startInterval()
{
    intervalidID = setInterval(moveIT, 100);
}
function moveIT()
{
    var imageBall = document.getElementById("imgBall");
    imageBall.style.left = startLeft + "px";
    imageBall.style.top = startTop + "px";
//tells the page to show the values of the top and left location in pixels
    document.getElementById("msg").innerHTML = "top = " + imageBall.style.top + " left = " + imageBall.style.left;
// when the image reaches the limit then begin the inverse of the change from left to right to right to left 
    if ((startLeft + imageBall.width >= window.innerWidth) || (startLeft <=0))
    {
        dLeft = -dLeft;
    }
// when the image reaches the limit then begin the inverse of the change from top to bottom to bottom to top
    if ((startTop + imageBall.height >= window.innerHeight) || (startTop <=0))
    {
        dTop = -dTop;
    }
    startTop += dTop;
    startLeft += dLeft;
}

function stopInterval()
{
    clearInterval(intervalidID);
}