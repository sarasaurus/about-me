'use strict';
//Question 6 rewrite
var k=4;
var answerNumber=7;
while (k>=0) {
  var userAnswer=prompt('what\'s my favorite number?');
  var userNumber=parseInt(userAnswer, 10);
  console.log('user entered: ', userAnswer);
  console.log('parsed to number: ', userNumber);
  if (userNumber===answerNumber) {
    alert('you got it!');
    score++;
    break;
  } else if (userNumber>answerNumber) {
    alert('too high, try again, ' + k + ' tries left');
    k--;
    console.log('tries left: ', k);
  }
  else if (userNumber<answerNumber){
    alert('too low, try again, ' + k + ' tries left');
    k--;
    console.log('tries left: ', k);
  }
}
/*question 6 using while
var stateCount=19;
for(var i = 0; i < 4; i++) {
  console.log('Attempt number:', i);
  var guessNumber = 4-i;
  console.log('Remaining Guesses out of 4:', guessNumber);
  var userState = prompt('How many states has Sarah camped in?');
  console.log('Number user guessed:', userState);
  var userStateInt = parseInt(userState, 10);
  if (userStateInt === stateCount) {
    alert('You got it ' + userName + '!');
    score++;
    console.log('Score:', score);
    break;
  } else if (userStateInt > stateCount){
    alert(userName + ' you\'re to high. ' + guessNumber + ' tries left.');
  }
  else if (userStateInt < stateCount) {
    alert(userName + ' you\'re too low ' + guessNumber + ' tries left.');
  }
}
alert('Next Question!');*/

/* still not getting it
//1-5 store in array
var userName=prompt('enter your name');
var count = 5;
var score=0;

console.log('user name: ', userName);
console.log('score init: ', score);
var q1='does s like ice cream?';
var q2='does sarah like art?';
var q3='does she like the rain?';
var q4='does she like bad things?';
var q5='is she the worst?';
var arrAnswer = ['yes', 'yes', 'no', 'no', 'no'];
var arrQuestion = [q1, q2, q3, q4, q5]
while (count>=0) {
  var userAnswer1=prompt(arrQuestion[0]).toLowerCase;
  console.log('user answer to q1 is: ', userAnswer1);
  if (userAnswer1===arrAnswer[0]) {
    alert('great, next question');
  } else {
    alert ('nope, next question');
  }
}
*/
