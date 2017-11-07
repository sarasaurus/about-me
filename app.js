//forever this is what goes first, this means the code will be run strictly
//no text coercion... etc always goes first!
'use strict';
//setting possible options to trigger responses
var answers = ['yes', 'y', 'no', 'n']

var answerCool =prompt('Is this person cool?');
//remember cool is string
//now I want to convert the answer toLowerCase
answerCool=answerCool.toLowerCase();
//checking....
console.log('Is this person cool?', answerCool);

//now I want to do and if between 0-1 then do ___, else if _____
if (answerCool === 'yes' || answerCool ==='y')  {
  alert('niiiice');
}else {
  alert('huh.');
}


//=== means ONLY equals string of 4, of string type
if (answerCool === 'yes' || answerCool ==='y')  {
  alert('niiiice');
}


if (answerTalent === 'yes' || answerTalent === 'y')  {
  alert('nice again');
}


//helpers!!!
//parseInt
//toLowerCase
//toUpperCase
