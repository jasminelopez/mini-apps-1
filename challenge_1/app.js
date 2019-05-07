

var board = document.querySelector("table");

//iterate over the boxes and add an event listener to each one 
board.querySelectorAll("td")
  .forEach(e => e.addEventListener("click", handlePlayerMove));

var turnCounter = 1;
var oTurn = [];
var xTurn = [];
var winningCombos = [['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','5','9'], ['7','5','3'], [2, 4, 6]];

var messageContainer = document.getElementById('message');

function checkWinners (marksArr, name) {
  for (var i = 0; i < winningCombos.length; i++) {
    var numWins = 0;
    for (var j = 0; j < winningCombos[i].length; j++) {
      if (marksArr.indexOf(winningCombos[i][j]) !== -1) {
        numWins++;
      }
    }
    if (numWins === 3) {
      alert('Player' + name + 'wins!' );
      // newPlayerGame();
    }
  }
}

//check to see if the current cell has a length
function handlePlayerMove (event) {
  //if the inner part of the element equals zero then we continue with this function
  if (event.target.innerHTML.length === 0) {

    if (turnCounter % 2 === 1) {
      xTurn.push(event.target.id);
      event.target.innerHTML = 'X';
    } else {
      oTurn.push(event.target.id);
      event.target.innerHTML = 'O';
    }
  } else {
    var message = document.createElement('p');
    message.innerHTML = 'Choose another square!'
    messageContainer.appendChild(message);
    turnCounter--;
  }
  turnCounter++;
  //check to see if there is a winning combination if the x's are equal
  checkWinners(xTurn, 'X');
  checkWinners(oTurn, 'O');

  if (turnCounter === 10) {
    alert('Its a tie, play again!');
  }
};


var button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = ""
});

  //.forEach(elem => document.getElementById(elem).innerHTML = "")})

  