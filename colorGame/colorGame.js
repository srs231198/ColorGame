var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click", function() {

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "Block";
        
    }
});


colorDisplay.textContent = pickedColor;
hardBtn.classList.add("selected");


resetButton.addEventListener("click", function(){

    resetButton.textContent = "New Colors";

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});


for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again!";
        }
    });
}

function changeColors(color){
    //loop through all the squares and change their color
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}