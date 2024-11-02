var upButton = document.getElementById("up");
var downButton = document.getElementById("down");
var textBox = document.getElementById("text");

var textBoxValue = 0;

upButton.onclick = function() {
    textBoxValue++;
    textBox.value = textBoxValue;
}

downButton.onclick = function() {
    textBoxValue--;
    textBox.value = textBoxValue;
}