'use strict';
var score=0;
var userName=prompt('What\'s your name?');
console.log('user name:', userName);
alert('Great.  Thanks ' + userName + '.');

//first question
var answerFrench=prompt('Does Sarah speak French?').toLowerCase();
console.log('Does Sarah speak French?', answerFrench);
if (answerFrench === 'yes' || answerFrench ==='y') {
  alert('That\'s sweet of you, but wrong');
} else if (answerFrench === 'no' || answerFrench === 'n') {
  alert('C\'est vrai.  She is a mono-lingual American.');
  score++;
  console.log('Score: ', score);
}
else {
  alert('I don\'t understand please use either yes or no');
}

//second question
var answerBike=prompt('Does Sarah have a Bicycle?').toLowerCase();
console.log('Does Sarah have a Bike?', answerBike);
if (answerBike === 'yes' || answerBike ==='y') {
  alert('Yes, duh.  She\'s a born and bred Seattle-ite');
  score++;
  console.log('Score: ', score);
} else if (answerBike === 'no' || answerBike === 'n') {
  alert('Wrong Answer!');
}
else {
  alert('I don\'t understand please use either yes or no');
}

//third question
var answerDraw=prompt('Can Sarah draw?').toLowerCase();
console.log('Can she draw?', answerDraw);
if (answerDraw === 'yes' || answerDraw ==='y') {
  alert('Yes, she can.');
  score++;
  console.log('Score: ', score);
} else if (answerDraw === 'no' || answerDraw === 'n') {
  alert('Wrong Answer!');
}
else {
  alert('I don\'t understand please use either yes or no');
}
//fourth question
var answerWater=prompt('Does Sarah drink water?').toLowerCase();
console.log('Does she drink water?', answerWater);
if (answerWater === 'yes' || answerWater ==='y') {
  alert('Yes, she does.  Doesn\'t everyone?');
  score++;
  console.log('Score:', score);
} else if (answerWater === 'no' || answerWater === 'n') {
  alert('Wrong answer, with out water she would die');
}
else {
  alert('I don\'t understand please use either yes or no');
}

//fifth question
var answerSong=prompt('Does Sarah have a favorite song?').toLowerCase();
console.log('favorite song?', answerSong);
if (answerSong === 'yes' || answerSong ==='y') {
  alert('beep. WRONG. How can you pick one favorite?! ');
} else if (answerSong === 'no' || answerSong === 'n') {
  alert('Yup!  her taste in music is broad and ever-changing');
  score++;
  console.log('Score:', score);
}
else {
  alert('I don\'t understand please use either yes or no');
}

//Sixth Question
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
alert('Next Question!');

//7th Question
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
alert('Game Over. Thanks for playing ' + userName+ '.  Sarah\'s 6 preferred cookies were, in order-- Chocolate, Lemon, All, Sandwich, Maple and Crunchy.');
alert('TOTAL CORRECT ANSWERS: ' + score);
