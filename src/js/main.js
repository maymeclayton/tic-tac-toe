

//2 users alternate turns. One person is X and the other is O.
//3 in a row horizontally, vertically, or diagonally win.


//ideas:
//give each box a number id to use as comparison?
//next player button to initiate the function(s)?
//alert for when a win occurs "X/O wins!"

let spaces = document.getElementsByClassName('space');
let message = document.getElementById('message');
let symbols = ['O', 'X'];
let turn = 0;


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      document.getElementById('button').onclick = startGame;
      startGame();
    }
}

//I want to be able to click on one of the squares and have either an X or O show up.

function somebodyWon() {
  // Spaces:
  //  0  1  2
  //  3  4  5
  //  6  7  8
  return checkLineForWin([0, 1, 2]) || checkLineForWin([3, 4, 5]) || checkLineForWin([6, 7, 8]) || checkLineForWin([0, 3, 6]) || checkLineForWin([1, 4, 7]) || checkLineForWin([2, 5, 8]) || checkLineForWin([0, 4, 8]) || checkLineForWin([2, 4, 6]);
}

function checkLineForWin(line) {
  let first = spaces[line[0]].innerHTML;

  if (first != '' && first == spaces[line[1]].innerHTML && first == spaces[line[2]].innerHTML) {
    return true;
  }

  return false;
}

function startGame() {
  // TODO: as we develop the game, we are probably going to
  // update this function to clear variables and reset state
  turn = 0;
  message.innerHTML = "It is X's turn!";

  for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', takeSpace);
    spaces[i].innerHTML = '';
  }
}

function takeSpace() {
  turn++; // These console statements highlight the difference between "this" and the event that calls the function
  // console.log(this);
  // console.log(event);

  this.innerHTML = symbols[turn % 2];
  this.removeEventListener('click', takeSpace);

  if (somebodyWon()) {
    message.innerHTML = symbols[turn % 2] + " won! Yay!";
    removeClicksFromSpaces();
  } else {
    message.innerHTML = "It is " + symbols[(turn + 1) % 2] + "'s turn!";
  }
}

function removeClicksFromSpaces() {
  for (let i = 0; i < spaces.length; i++) {
    spaces[i].removeEventListener('click', takeSpace);
  }
}

//function gameStart(){
  //alert("oh hello");
  //}

//function reset(){
  //let button = document.getElementById("button");
    //button.onclick = function() {newGame()};
//}

//function newGame(){
//}



//var reset = document.getElementById("button").onclick = reset();

//function reset(){
  //alert('new game, holla!');





//function gamePlay(event){
//  let spot = event.target.innerHTML;

//}
