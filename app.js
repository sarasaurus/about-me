'use strict';

var i = 1;
var score = 0;
var userName;
var arrCookie = ['chocolate', 'lemon', 'all', 'sandwich', 'maple', 'crunchy'];

function askName(){
  userName = prompt('What\'s your name?');
  console.log('user name:', userName);
  alert('Great.  Thanks ' + userName + '.');
}

function ask(question, yes) {
  var answer = prompt(question).toLowerCase();
  console.log(i + 'th question', answer);
  i++;
  if(yes === true) {
    if(answer === 'yes' || answer === 'y' ){
      return true;
    } else {
      return false;
    }
  } else {
    if(answer === 'no' || answer === 'n' ){
      return true;
    } else {
      return false;
    }
  }
}

function testQuestion(correctness, right, wrong){
  if(correctness === true){
    alert(right);
    score++;
    console.log('Score: ', score);
  } else {
    alert(wrong);
  }
}

askName();
testQuestion(ask('Does Sarah speak French?', false), 'C\'est vrai.  She is a mono-lingual American.', 'That\'s sweet of you, but wrong');
testQuestion(ask('Does Sarah have a Bicycle?', true), 'Yes, duh.  She\'s a born and bred Seattle-ite', 'Wrong Answer!');
testQuestion(ask('Can Sarah draw?', true), 'Yes, she can.', 'Wrong Answer!');
testQuestion(ask('Does Sarah drink water?', true), 'Yes, she does.  Doesn\'t everyone?', 'Wrong Answer, with out water she would die');
testQuestion(ask('Does Sarah have a favorite song?', false), 'Yup!  her taste in music is broad and ever-changing', 'beep. WRONG. How can you pick one favorite?!');

function multiAttemptStates(question, maxAttempts, answer){
  maxAttempts = maxAttempts - 1;
  for(maxAttempts; maxAttempts >= 0; maxAttempts--){
    var guess = parseInt(prompt(question));
    console.log('Guess: ', guess);
    console.log('Attempt left:', maxAttempts);
    if (guess === answer) {
      alert('You got it ' + userName + '!');
      score++;
      console.log('Score:', score);
      break;
    } else if (guess > answer){
      alert(userName + ' you\'re to high. ' + maxAttempts + ' tries left.');
    }
    else if (guess < answer) {
      alert(userName + ' you\'re too low ' + maxAttempts + ' tries left.');
    }
  }
}

function multiAttemptCookies(question, maxAttempts){
  maxAttempts = maxAttempts - 1;
  for(maxAttempts; maxAttempts >= 0; maxAttempts--){
    var guess = prompt(question).toLowerCase();
    console.log('User Guessed:', guess);
    if (arrCookie.includes(guess)) {
      alert('You got it ' + userName + '!' );
      score++;
      console.log('Final Score:', score);
      break;
    } else {
      alert('you have ' + (maxAttempts) + ' tries left.');
    }
  }
}

multiAttemptStates('How many states has Sarah camped in?', 4, 19);
multiAttemptCookies('What is one of Sarah\'s six preferred cookies?', 6);

function end(){
  alert('Game Over. Thanks for playing ' + userName + '.  Sarah\'s 6 preferred cookies were, in order-- Chocolate, Lemon, All, Sandwich, Maple and Crunchy.');
  alert('Total Correct Answers for ' + userName + ': ' + score);
}
end();
/*
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
alert('Total Correct Answers for ' + userName + ': ' + score);


//first question
function firstQuestion() {
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
}
firstQuestion();

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
alert('Total Correct Answers for ' + userName + ': ' + score);
*/
