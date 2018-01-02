
document.addEventListener('DOMContentLoaded', start)

function start() {
    addEventListeners()
}

function addEventListeners() {

var buttons = document.getElementsByClassName("button") 
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickButton)
}
}


var equation = []; 

function clickButton (evt) {
    var id = evt.target.id;

    if (id === "AC") {
        window.location.reload();
    } 

    if (id === "=") {
    var result = eval(equation.join(''));
    document.getElementById("screen").innerText = result
    equation = [result];
    }

    else {
        document.getElementById("screen").innerHTML = id
        equation.push(id)
        }


}
