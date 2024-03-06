function changeCol(col) {
    document.getElementById("colors").style.backgroundColor = col;
}   
function dq() {
    const inputElement = document.getElementById('colorWell');
    const inputValue = inputElement.value;
    console.log(inputValue);
    document.getElementById("colors").style.backgroundColor = inputValue;
}

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("input", updateFirst1, false);
  colorWell.select();
}

function updateFirst(event) {
    var button = document.getElementById("b-color");
  
    if (button) {
      button.style.backgroundColor = event.target.value;
    }
  }
  function updateFirst1(event) {
    var button = document.getElementById("b-color1");
  
    if (button) {
      button.style.backgroundColor = event.target.value;
    }
  }