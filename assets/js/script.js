var fillinword = document.querySelector("#word");
var timedisplay = document.querySelector("#timer");
var wins = document.querySelector("#lblwin");
var losses = document.querySelector("#lblloss");
var start = document.querySelector("#startgame");

var currentword = "";
var countBlanks = 0;
var wCount = 0;
var lCount = 0;
var isWin = false;
var timer;
var tCount;


var LettersinWord = [];
var blanks = [];

var currentwordarray = ['function', 'array', 'div', 'span', 'javascript'];

function inti(){
  currentwins;
  currentloses;
}

function startgame() {
  isWin = false;
  tCount = 15;
  start.disabled = true;
  setwordblanks();
  settime();
}


function setwordblanks() {
  currentword = currentwordarray[Math.floor(Math.random() * currentwordarray.length)];
  LettersinWord = currentword.split("");
  countBlanks = LettersinWord.length;
  blanks = []
  for (var i = 0; i < countBlanks; i++) {
    blanks.push("_");
  }
  fillinword.value = blanks.join(" ")
}


function settime() {
  timer = setInterval(function() {
    tCount--;
    timedisplay.textContent = tCount;
    if (tCount >= 0) {      
      if (isWin && tCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (tCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

function winGame() {
  fillinword.value = "You win";
  wCount++
  start.disabled = false;
  setWins()
}

function loseGame() {
  fillinword.value = "You lose";
  lCount++
  start.disabled = false;
  setLosses()
}

function setWins() {
  wins.textContent = wCount;
  localStorage.setItem("winCount", wCount);
}

function setLosses() {
  losses.textContent = lCount;
  localStorage.setItem("loseCount", lCount);
}

function currentwins() {
   var strWins = localStorage.getItem("winCount");
  if (strWins === null) {
    wCount = 0;
  } else {
    wCount = strWins;
  }
  wins.textContent = wCount;
}

function currentloses() {
  var strLosses = localStorage.getItem("loseCount");
  if (strLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = strLosses;
  }
  lose.textContent = strLosses;
}

function checkResults() {
  if (currentword === blanks.join("")) {
    isWin = true;
  }
}


function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < countBlanks; i++) {
    if (currentword[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < countBlanks; j++) {
      if (currentword[j] === letter) {
        blanks[j] = letter;
      }
    }
    fillinword.value = blanks.join(" ");
  }
}

document.addEventListener("keydown", function(event) {
  if (tCount === 0) {
    return;
  }
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkResults();
  }
});

start.addEventListener("click", startgame);

inti();


var resetBtn = document.querySelector("#resetgame");

function newgame() {
  wCount = 0;
  lCount = 0;
  setWins()
  setLosses()
}

resetBtn.addEventListener("click", newgame);


