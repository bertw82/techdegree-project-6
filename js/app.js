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