// global variables
var userAnswers = [];
var clickedCards = [];
var allowClick = true;
var score = 0;

var startGameButton = document.getElementById("startGame");


// Functions
//Create an array of 12 colors and sorts it randomly
// Créez un tableau de 12 couleurs et trie au hasard
function randomizeColors() {
  var colors = [
    "red",
    "red",
    "green",
    "green",
    "blue",
    "blue",
    "yellow",
    "yellow",
    "purple",
    "purple",
    "salmon",
    "salmon"
  ];
  return colors.sort(function(a, b){
    return 0.5 - Math.random()
  });
}
