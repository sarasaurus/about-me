'use strict';
var userName=prompt('enter your name');
var score=0;

var arrQuestion = ['likes water', 'likes soda', 'likes choc'];
var arrAnswer = ['yes', 'no', 'yes'];
for (var j = 3; j>0; j--) {
  console.log('Guesses remaining:', j);
  var userAnswer = prompt('does sarah like' + arrQuestion).toLowerCase();
  console.log('User Guessed:', userCookie);
  //If I created a seperate else if for each position in the array to check a specific position against a spec pos answer?
  // or maybe setting I don't even know.
  if (arrAnswer.includes(userAnswer)) {
    alert('You got it ' + userName +'!' );
    score++;
    console.log('Final Score:', score);
    break;
  } else {
    alert('you have ' + (j) + ' tries left.');
  }
}
