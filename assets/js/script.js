var timeleft = document.getElementById("timer").innerHTML
var currentword = ''

function inti(){

    var start = 0 //localStorage.getItem(startnumber);
    var currentwordarray = ['FUNCTION', 'ARRAY', 'DIV', 'SPAN', 'JAVASCRIPT']
        
        if (start == 0){
            currentword = currentwordarray[0]
        }else if (start = 1) {
            currentword = currentwordarray[1]
        }else if (start = 2) {
            currentword = currentwordarray[2]
        }else if (start = 3) {
            currentword = currentwordarray[3]
        }else {
            currentword = currentwordarray[4]
        }           
        setTime(); 
}

inti();


window.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var wordCharacters = currentword.split(
    ''
  );
  if (wordCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

var tileft = 25
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    tileft--;
      timeleft.textContent = tileft + " seconds till game over";
  
      if(tileft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }