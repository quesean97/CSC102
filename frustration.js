//create an array
var arrayOfNames = ["chicken,","fish,","broccoli,", "rice,", "soy sauce"]
//function to show the list in order from the front of "chicken," to the end of "soy sauce,"
function showArray()
{
    //all items equal nothing
    var allItems = "";
    //allows the initial value to be set 
    var i;
    //initial value is zero, continues to the end of the array, then adds onto the array
    for (i = 0; i < arrayOfNames.length; i++)
    {
        allItems += arrayOfNames[i];
        allItems += " ";
    }
    document.getElementById("result").innerHTML = allItems;
}
//function to add front
function addFront()
{
    //front condition added because addSpecific() set to only "unshift"
    addLocation = "front"
    document.getElementById("formAdd").hidden = false;

    
}
    //back condition added because addSpecific() set only to "unshift"
function addBack()
{
    addLocation = "back";
    //reveals the input box
    document.getElementById("formAdd").hidden = false;
    
}
//take off item in the 0 place
function remFront()
{
    arrayOfNames.shift();
    showArray();
}
//take off item in the last position
function remBack()
{
    arrayOfNames.pop();
    showArray();
}
//find if "fish," is in the list or not (not sure how to add a so you can find whatever you want)
function findItem()
{
    var found = false;
    found = arrayOfNames.includes("fish,");
    //if "fish," is not found then it will say so"
    if (!found)
    {
        document.getElementById("result").innerHTML = "fish, is not found in the list";
    }
    //if "fish," is found it will say so
    else
    {
        document.getElementById("result").innerHTML = "fish, is on the list";
    }
    
}
//I had trouble getting my add to back button to work properly so I asked AI if there was a solution
function addSpecific()
{
    var item = document.getElementById("newItem").value;
 //in this condition it tells the item to go to the front
    if( addLocation == "front")
        {
            arrayOfNames.unshift(item);
        }
        // in this condition it tells the "item" to go to the back
    else
    {
        arrayOfNames.push(item);
    }
    "hides the input box"
    document.getElementById("formAdd").hidden = true;
}
