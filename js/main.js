// global variables
let userAnswers = [];
let clickedCards = [];
let allowClick = true;
let score = 0;

let startGameButton = document.getElementById("startGame");


// Functions
//Create an array of 12 colors and sorts it randomly
// Créez un tableau de 12 couleurs et trie au hasard
function randomizeColors() {
  let colors = [
    "url('img/chirac.gif')",
    "url('img/chirac.gif')",
    "url('img/chirac2.gif')",
    "url('img/chirac2.gif')",
    "url('img/chirac3.gif')",
    "url('img/chirac3.gif')",
    "url('img/chirac4.gif')",
    "url('img/chirac4.gif')",
    "url('img/chirac5.gif')",
    "url('img/chirac5.gif')",
    "url('img/chirac6.gif')",
    "url('img/chirac6.gif')",

  ];
  return colors.sort(function(a, b){
    return 0.5 - Math.random()
  });
}

//Create a card element to be displayed on the screen
// Créer une carte à afficher à l'écran
function createCard() {
  let card = document.createElement('div');
  card.className = "col-sm-3";
  card.innerHTML = "<div class='card my-2' style='background-color: black'></div>";
  return card;
}

//Create 12 card elements on the screen
// Créez 12 cartes à l'écran
function addCards() {
  let boardGame = document.getElementById("boardGame");
  for (let i = 0; i < 12; i++) {
    let card = createCard();
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
  let seconds = 30;
  let timer = document.getElementById("timer");
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

//Add a point to the user score and restart the game if the user has won
// Ajouter un point au score de l'utilisateur et redémarrer le jeu si l'utilisateur a gagné
function addPoint() {
  score ++;
  if(score === 6) {
    restartGame();
  }
}

// Handle each user's click by changing the card color, storing the result and comparing them
// Gérez les clics de chaque utilisateur en changeant la couleur de la carte, en stockant le résultat et en les comparant
function playMoove(card, answer) {
  changeCardColor(card, answer);
  registerAnswers(answer, card);
      if(userAnswers.length === 2 && clickedCards.length === 2) {
        allowClick = false;
        handleAnswers();
      }
}

//Restart the game
//Redémarrage du jeu
function restartGame(winner = true) {
  if(winner) {
    alert("you win");
  }
  else {
    alert("you lose");
  }
  location.reload();
}

//code logic

//Initialize the game
//démarrage du jeu
function startGame() {
  addCards();
  timer();

  let colors = randomizeColors();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
      if(allowClick && this.style.backgroundColor === 'black') {
        playMoove(this, colors[i]);
      }
    });
  }
}


startGameButton.addEventListener("click", function() {
  this.style.display = "none";
  startGame();
});
