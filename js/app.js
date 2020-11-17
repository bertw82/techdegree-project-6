const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (e) =>{
  if (e.target.tagName === 'A') {
    overlay.style.display = 'none';
  }
});

const phrases = [
  'Ludwig Van Beethoven',
  'Wolfgang Amadeus Mozart',
  'Igor Stravinsky',
  'Gustav Mahler',
  'Johann Sebastian Bach'
];

function getRandomPhraseAsArray(arr) {
  // randomly choose a phrase and split that phrase into a new array of characters. Return the new character array.
  const randomNumber = Math.floor(Math.random() * phrases.length);
  return phrases[randomNumber];
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  // loop through array of characters, create and append a list item to html
  for ( let i = 0; i < arr.length; i++) {
    let character = arr[i].toLowerCase();
    let listItem = document.createElement('li');
    listItem.textContent = character;
    phrase.appendChild(listItem);
    if (character === " ") {
      listItem.className = 'space';
    } else {
      listItem.className = 'letter';
    }
  }
}

addPhraseToDisplay(phraseArray);

function checkLetter(x) {
  // check button letter against letter in phrase
  let checkLetter = document.getElementsByClassName('letter');
  let letterMatch = null;
  for ( let i = 0; i < checkLetter.length; i++) {
    if ( x.textContent.toLowerCase() === checkLetter[i].textContent.toLowerCase() ) {
      checkLetter[i].className = 'show letter';
      letterMatch = checkLetter[i].textContent;     
    }    
  }
  return letterMatch;
}

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let button = e.target;
    button.className = 'chosen';
    button.disabled = true;
    let letterFound = checkLetter(button);
    if ( letterFound === null) {
      let scoreBoard = document.getElementById('scoreboard');
      let ol = scoreBoard.firstElementChild;
      let li = ol.firstElementChild;
      ol.removeChild(li);
      missed += 1;
    }
    checkWin();
  }
})

function checkWin() {
  const letter = document.getElementsByClassName('letter');
  const show = document.getElementsByClassName('show');
  if ( letter.length === show.length) {
    overlay.className = 'win';
    overlay.style.display = 'flex';
    overlay.innerHTML = `<h2>Congrats, you won!</h2>`;
  } else if ( missed >= 5 ){
    overlay.className = 'lose';
    overlay.style.display = 'flex';
    overlay.innerHTML = `<h2>Game Over. Please try again.</h2>`;
  }
}


