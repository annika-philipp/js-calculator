document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByTagName("button"); // get buttons from html
    for (var i = 0; i < buttons.length; i++) 
        buttons[i].addEventListener("click", checkValue)
    
});


var result = ""; // empty var results will be pushed to display


// one big if/else statement
//display numbers and operators as they are pushed. 

function checkValue (e) {  
    var value = e.target.value;     //get button value, numbers and operator
    if (value === "=")              // When equal is pushed start function showResult
    showResult ();
    if (value === "AC")             //when AC button is pushed clear current string on screen (instead of have sep function resetResult)
    document.getElementById("screen").innerText = '';

}





// adds relevant functions

showResult () {

}

/*
resetResult () {
    document.getElementById("screen").innerText = '';
}
*/