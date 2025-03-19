// Πίνακας με τις εικόνες του ζαριού
const img = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

const roll1 = Math.floor(Math.random() * img.length);
const roll2 = Math.floor(Math.random() * img.length);

document.querySelector('.img1').src = 'images/' + img[roll1];
document.querySelector('.img2').src = 'images/' + img[roll2];


if (roll1 > roll2) {
  let winner =  document.querySelector('.winner1').innerHTML = 'WINNER';
} else if (roll2 > roll1) {
    let winner =  document.querySelector('.winner2').innerHTML = 'WINNER';
} else {
    let winner =  document.querySelector('.winners').innerHTML = 'ΙΣΟΠΑΛΙΑ!';
}
