//Quesean Parker
document.getElementById("rockIt").hidden = true;
// gives function to the play button,
function play()
{
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
    document.getElementById("rockIt").hidden = false;
}



//refreshes page finds the file adds sounds and plays for duration of audio. 
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {this.sound.play();}
}
// give function to the stop button to stop sound and reload page so no noise plays
function stop()
{
    window.location.reload();
}