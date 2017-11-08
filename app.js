'use strict';
//setting user name?
  var userName=prompt('What\'s your name?');
  console.log('user name:', userName);
  alert('Great.  Thanks ' + userName + '.')

//first question
  var answerFrench=prompt('Does Sarah speak French?').toLowerCase();
  //checking....
  console.log('Does Sarah speak French?', answerFrench);
  //conditionals
  if (answerFrench === 'yes' || answerFrench ==='y')  {
    alert('That\'s sweet of you, but wrong');
  } else if (answerFrench === 'no' || answerFrench === 'n') {
    alert('C\'est vrai.  She is a mono-lingual American.');
  }
  else {
    alert('I don\'t understand please use either yes or no')
  }

//second question
  var answerBike=prompt('Does Sarah have a Bicycle?').toLowerCase();
  //checking....
  console.log('Does Sarah have a Bike?', answerBike);
  //conditionals
  if (answerBike === 'yes' || answerBike ==='y')  {
    alert('Yes, duh.  She\'s a born and bred Seattle-ite');
  } else if (answerBike === 'no' || answerBike === 'n') {
    alert('Wrong Answer!');
  }
  else {
    alert('I don\'t understand please use either yes or no')
  }

//third question
  var answerDraw=prompt('Can Sarah draw?').toLowerCase();
  //checking....
  console.log('Can she draw?', answerDraw);
  //conditionals
  if (answerDraw === 'yes' || answerDraw ==='y')  {
    alert('Yes, she can.');
  } else if (answerDraw === 'no' || answerDraw === 'n') {
    alert('Wrong Answer!');
  }
  else {
    alert('I don\'t understand please use either yes or no')
  }
//fourth question
  var answerWater=prompt('Does Sarah drink water?').toLowerCase();
  //checking....
  console.log('Does she drink water?', answerWater);
  //conditionals
  if (answerWater === 'yes' || answerWater ==='y')  {
    alert('Yes, she does.  Doesn\'t everyone?');
  } else if (answerWater === 'no' || answerWater === 'n') {
    alert('Wrong answer, with out water she would die');
  }
  else {
    alert('I don\'t understand please use either yes or no')
  }

//fifth question
var answerSong=prompt('Does Sarah have a favorite song?');
  //this is how I did it before code review! but now I know better.
  answerSong=answerSong.toLowerCase();
  //checking....
  console.log('favorite song?', answerSong);
//conditionals
  if (answerSong === 'yes' || answerSong ==='y')  {
    alert('beep. WRONG. How can you pick one favorite?! ');
  } else if (answerSong === 'no' || answerSong === 'n') {
    alert('Yup!  her taste in music is broad and ever-changing');
  }
  else {
    alert('I don\'t understand please use either yes or no')
  }
