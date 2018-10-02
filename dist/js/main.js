//2 users alternate turns. One person is X and the other is O.
//3 in a row horizontally, vertically, or diagonally win.
//ideas:
//give each box a number id to use as comparison?
//next player button to initiate the function(s)?
//alert for when a win occurs "X/O wins!"
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let x = "X";
let o = "O";

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    start();
  }
};

start();
let board = document.getElementByClassName("col");

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", input);
}

function gamePlay(event) {
  let spot = event.target.innerHTML;
}