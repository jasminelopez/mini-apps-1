

var board = document.querySelector("table");

//iterate over the boxes and add an event listener to each one 
board.querySelectorAll("td")
  .forEach(e => e.addEventListener("click", handlePlayerMove));

var turnCounter = 1;
var oTurn = [];
var xTurn = [];

var mes = document.getElementById('message');

//check to see if the current cell has a length
function handlePlayerMove (event) {
  //if the inner part of the element equals zero then we continue with this function
  if (event.target.innerHTML.length === 0) {

    if (turnCounter % 2 === 1) {
      xTurn.push(event.target.id);
      event.target.innerHTML = 'X';
    } else {
      xTurn.push(event.target.id);
      event.target.innerHTML = 'O';
    }
  } else {
    var message = document.createElement('p');
    message.innerHTML = 'Choose another square!'
    mes.appendChild(message);
    turnCounter--;
  }
  turnCounter++;
};

