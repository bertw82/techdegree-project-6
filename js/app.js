const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.firstElementChild;
const heartImage = document.getElementsByTagName('img');
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
  'Johann Sebastian Bach',
  'John Adams',
  'Johannes Brahms',
  'Maurice Ravel',
  'Antonio Vivaldi',
  'Joseph Haydn'
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
    ul.appendChild(listItem);
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
  // remove heart if guessed wrong
  if (e.target.tagName === 'BUTTON') {
    let button = e.target;
    button.className = 'chosen';
    button.disabled = true;
    let letterFound = checkLetter(button);
    if ( letterFound === null) {
      heartImage[missed].src = "images/lostHeart.png";
      missed += 1;
    }
    checkWin();
  }
})

function checkWin() {
  // function to check if win or lose
  const letter = document.getElementsByClassName('letter');
  const show = document.getElementsByClassName('show');
  const h2 = document.querySelector('.title');
  const p = document.querySelector('.directions');
  const a = overlay.lastElementChild;
  if ( letter.length === show.length) {
    overlay.className = 'win';
    overlay.style.display = 'flex';
    h2.innerHTML = `Congrats, you won!`;
    p.innerHTML = `You are a musical genius!`;
    a.textContent = `Play again`;
    gameReset();
  } else if ( missed >= 5 ){
    overlay.className = 'lose';
    overlay.style.display = 'flex';
    h2.innerHTML = `Game Over. Please try again.`;
    p.innerHTML = '';
    a.textContent = `Try again`;
    gameReset();
  }
}

function gameReset() {
  // function to reset the game
  const button = document.getElementsByTagName('button');
  const li = document.getElementsByClassName('letter');
  for ( let i = 0; i < button.length; i++) {
    button[i].classList.remove('chosen');
    button[i].disabled = false;
  }
  for ( let i = 0; i < li.length; i++ ) {
    li[i].classList.remove('show');
  }
  function removeAllLi(parent) {
    // function to remove previous letter li's
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
  removeAllLi(ul);
  function resetHearts() {
    // function to reset hearts back to liveHeart.png
    for (let i = 0; i < heartImage.length; i++) {
      heartImage[i].src = 'images/liveHeart.png';
    }
  }
  resetHearts();
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
  missed = 0;
}
