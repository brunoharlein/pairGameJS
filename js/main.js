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

//Game Functions

//Function to start the time
// Fonction pour démarrer le temps
function timer() {
  var seconds = 30;
  var timer = document.getElementById("timer");
  timer.innerHTML = "<i class='fas fa-hourglass-start ml-2'></i> Temps restant : " + seconds + " s";
  setInterval(function(){
    if(seconds >= 1) {
      seconds --;
      timer.innerHTML = "<i class='fas fa-hourglass-start ml-2'></i> Temps restant : " + seconds + " s";
    }
    else {
      restartGame(false);
    }
  }, 1000);
}

//Store the selected color and the card element in arrays
// Stocke la couleur sélectionnée et l'élément de carte dans des tableaux
function registerAnswers(userAnswer, clickedCard) {
    userAnswers.push(userAnswer);
    clickedCards.push(clickedCard);
}

//Check if the the user answer is correct and clear the answers and the cards if necessary
// Vérifier si la réponse de l'utilisateur est correcte et effacer les réponses et les fiches si nécessaire
function handleAnswers() {
  if(userAnswers[0] !== userAnswers[1]) {
    clearCards();
    clearAnswers();
  }
  else {
    addPoint();
    clearAnswers(true);
  }
}

//Turn the selected cards into black cards
// Transforme les cartes sélectionnées en cartes noires
function clearCards() {
  setTimeout(function(){
    changeCardColor(clickedCards[0], "black");
    changeCardColor(clickedCards[1], "black");
  }, 1500);
}

//Clears the arrays containing the user answers and the clicked cards
// Efface les tableaux contenant les réponses des utilisateurs et les cartes cliquées
function clearAnswers(madePoint = false) {
  if(!madePoint){
    setTimeout(function(){
      userAnswers = [];
      clickedCards = [];
      allowClick = true;
    }, 1600);
  }
  else  {
    userAnswers = [];
    clickedCards = [];
    allowClick = true;
  }
}
