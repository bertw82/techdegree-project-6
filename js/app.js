const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (e) =>{
  if (e.target.tagName === 'A') {
    overlay.style.display = 'none';
  }
});

const phrases = [
  'Stringed instruments are played with a bow',
  'Woodwind instruments are mostly made of wood',
  'Brass instruments are made of metal',
  'Percussion instruments include anything that is struck',
  'The harp is always plucked'
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
    arr[i]
  }
}