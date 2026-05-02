// create a function that analyzes the text input from user
function strings()
{{
    //creates a variable called string one that is set to be the users input
    var string1 = document.getElementById("initStr").value;

}
// another variable that takes users input seperates each character by one block, puts them in the opposite order, the combines them  a reverse string that is the users input manipulates the user input 
var revStr = string1.split("").reverse("").join("")
//updates the page content in the paragraph section to display only the result of the submission.. the quotation is what we are looking for, the + revStr is the result but there is a condition
document.getElementById("resultString").innerHTML = "string 1 split,reversed,joined = " + revStr;

document.getElementById("greatJob").hidden = true;
document.getElementById("thinkImg").hidden = false;
//condition is if the user input after string manipulation is not equal to the initString it will not show what we are looking for instead it will show the message above instead it well tell them to "try again"
if (revStr != string1)
{
    document.getElementById("resultString").innerHTML = "Hmmm Noted, Try Again...";
    
}
// if the user input is equal to revStr then the user will get a message saying "great job..." along with an image
else
{
    document.getElementById("resultString").innerHTML = "Great Job you book worm!";
document.getElementById("greatJob").hidden = false;
document.getElementById("thinkImg").hidden = true;
}

}
