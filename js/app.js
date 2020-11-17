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
  let li = document.getElementsByClassName('letter');
  for ( let i = 0; i < li.length; i++) {
    if ( x.textContent.toLowerCase() === li[i].textContent.toLowerCase() ) {
      li[i].className = 'show letter';
      let letterMatch = li[i].textContent;
      return letterMatch;
    } else {
      return null;
    }
  }
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
  }
})