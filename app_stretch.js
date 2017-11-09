'use strict';
var userName=prompt('enter your name');
var score=0;

var arrCookie = ['chocolate', 'lemon', 'all', 'sandwich', 'maple', 'crunchy'];
for (var j = 6; j>0; j--) {
  console.log('Guesses remaining:', j);
  var userCookie = prompt('What is one of Sarah\'s six preferred cookies?').toLowerCase();
  console.log('User Guessed:', userCookie);
  if (arrCookie.includes(userCookie)) {
    alert('You got it ' + userName +'!' );
    score++;
    console.log('Final Score:', score);
    break;
  } else {
    alert('you have ' + (j) + ' tries left.');
  }
}
