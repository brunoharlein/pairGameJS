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

//Create a card element to be displayed on the screen
// Créer une carte à afficher à l'écran
function createCard() {
  var card = document.createElement('div');
  card.className = "col-sm-2";
  card.innerHTML = "<div class='card my-2' style='background-color: black'></div>";
  return card;
}

//Create 12 card elements on the screen
// Créez 12 cartes à l'écran
function addCards() {
  var boardGame = document.getElementById("boardGame");
  for (var i = 0; i < 12; i++) {
    var card = createCard();
    boardGame.appendChild(card);
  }
}

//Change a card color
// Changer la couleur d'une carte
function changeCardColor(card, color) {
  card.style.background = color;
}
