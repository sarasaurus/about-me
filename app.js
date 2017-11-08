'use strict';
/*
//setting user name?
var userName=prompt('What\'s your name?');
console.log('user name:', userName);
alert('Great.  Thanks ' + userName + '.');

//first question
var answerFrench=prompt('Does Sarah speak French?').toLowerCase();
//checking....
console.log('Does Sarah speak French?', answerFrench);
//conditionals
if (answerFrench === 'yes' || answerFrench ==='y') {
  alert('That\'s sweet of you, but wrong');
} else if (answerFrench === 'no' || answerFrench === 'n') {
  alert('C\'est vrai.  She is a mono-lingual American.');
}
else {
  alert('I don\'t understand please use either yes or no');
}

//second question
var answerBike=prompt('Does Sarah have a Bicycle?').toLowerCase();
//checking....
console.log('Does Sarah have a Bike?', answerBike);
//conditionals
if (answerBike === 'yes' || answerBike ==='y') {
  alert('Yes, duh.  She\'s a born and bred Seattle-ite');
} else if (answerBike === 'no' || answerBike === 'n') {
  alert('Wrong Answer!');
}
else {
  alert('I don\'t understand please use either yes or no');
}

//third question
var answerDraw=prompt('Can Sarah draw?').toLowerCase();
//checking....
console.log('Can she draw?', answerDraw);
//conditionals
if (answerDraw === 'yes' || answerDraw ==='y') {
  alert('Yes, she can.');
} else if (answerDraw === 'no' || answerDraw === 'n') {
  alert('Wrong Answer!');
}
else {
  alert('I don\'t understand please use either yes or no');
}
//fourth question
var answerWater=prompt('Does Sarah drink water?').toLowerCase();
//checking....
console.log('Does she drink water?', answerWater);
//conditionals
if (answerWater === 'yes' || answerWater ==='y') {
  alert('Yes, she does.  Doesn\'t everyone?');
} else if (answerWater === 'no' || answerWater === 'n') {
  alert('Wrong answer, with out water she would die');
}
else {
  alert('I don\'t understand please use either yes or no');
}

//fifth question
var answerSong=prompt('Does Sarah have a favorite song?').toLowerCase();
//checking....
console.log('favorite song?', answerSong);
//conditionals
if (answerSong === 'yes' || answerSong ==='y') {
  alert('beep. WRONG. How can you pick one favorite?! ');
} else if (answerSong === 'no' || answerSong === 'n') {
  alert('Yup!  her taste in music is broad and ever-changing');
}
else {
  alert('I don\'t understand please use either yes or no');
}
*/
//sixth prompt
var arr = [1, 2, 3, 4];
for(var i = 0; i < arr.length; i++) {
  console.log('array check:', arr[i]);
  var guessNumber = 4-arr[i];
  console.log('Guess Number:', guessNumber);
  var userStates = prompt('How many states has Sarah camped in?');
  console.log('number of states user guessed:', userStates);
  var userStateInt = parseInt(userStates, 10);
  if (userStateInt === 30) {
    alert('You got it Tiger!');
    break;
  } else if (userStateInt > 30){
    alert('bb you\'re to high. ' + guessNumber + ' tries left.');
  }
  else if (userStateInt < 30) {
    alert('bb you\'re too low ' + guessNumber + ' tries left.');
  }
  else {
    alert ('over');
  }
}
/*
console.log(i); // <- still a global variable, but defined.

// While loops
var userName = prompt('what is your name'); // <- null
// while(!userName) {
while(userName === null) {
  console.log('missed it...');
  userName = prompt('I did not get that: What is your name?');
}

console.log(userName);

var counter = 0;
while(true) {
  if(counter === 10) {
    break;
  }
  counter++;
}
console.log('counter', counter);
//aditional loops
for(var j = 0; j < arr.length; j += 2) {
  console.log('second loop', arr[j]);
}
if (guessStates === '30') {
  alert('Yeah Tiger! you got it.');
} else if (!guessStates === '30') {
  alert('Nope! buut don\'t cry, you\'ve got' + arr[i] + 'more tries bb.');
}*/
