// start function that will validate the form

   function validateForm(){
    //sets first name input as a variable
    var first = document.getElementById("fName").value;
      //sets last name input as a variable
   var last = document.getElementById("lName").value;
      //sets zipcode as a variable
   var zip = document.getElementById("zCode").value;

      //combines the first and last name with a space in between
   var fullName = first + " " + last;

      //sets variable output to update to a specific message 
   var output = document.getElementById("output");

      //resets the output to nothing
      output.innerHTML = "";
      //hides image until form completed correctly
      document.getElementById("goodImg").hidden = true;
    
    
    // when first and last name are combined with a space and is greater than 20 character the output will display message
      if ((fullName.length > 20) || (fullName.length < 4))
      {
         output.innerHTML = "Sorry! Full name must be between 4 and 20 characters.";
        return false;
      }
    
      //if above is valid then there will be no output... This was needed because my function would not continue if corrected
      output.innerHTML = "";
    // set the zip to have a set number of digits to 5
    var zipPattern = /^\d{5}$/;
      // will test "zip" to check if the number of digits are not greater than or less than 5 digits 
      if (!zipPattern.test(zip))
         {
         //if number of digits for zip code is not 5 digits this message will display 
        output.innerHTML = " Zip code must be exactly 5 digits.";
        return false;
      }
    
    //If all inputs are entered correctly then a message greeting user with their full name and a message will appear.
      output.innerHTML =
    " Welcome " + fullName + " Secret Message!!! : The Main Page button is above the heading! ";
      //hidden image will appear
    document.getElementById("goodImg").hidden = false;
   
    return false;
    
}