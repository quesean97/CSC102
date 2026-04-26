function strings()
{{
    var string1 = document.getElementById("initString").value;

}

var revStr = string1.split("").reverse("").join("")
document.getElementById("resultString").innerHTML = "string 1 split = " + revStr;


if (revStr != string1)
{
    document.getElementById("resultString").innerHTML = "Hmmm Noted, Try Again...";
    
}

else
{
    document.getElementById("resultString").innerHTML = "Great Job you book worm!";
}
}
