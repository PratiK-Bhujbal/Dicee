var randomNumber1 = Math.floor(Math.random()*6+1);
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6+1);
console.log(randomNumber2);

var randonImage = 'dice'+randomNumber1+'.png';
var sourceImage = "images/"+randonImage;

document.querySelectorAll('img')[0].setAttribute("src",sourceImage);

var randonImage1 = 'dice'+randomNumber2+'.png';
var sourceImage1 = "images/"+randonImage1;

document.querySelectorAll('img')[1].setAttribute("src",sourceImage1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  