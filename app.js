//forever this is what goes first, this means the code will be run strictly
//no text coercion... etc always goes first!

'use strict';
var kids =prompt('how many kids u have');
//remember kid is string
console.log('no of kids:', kids);

//always be experiementing with JS, that's how you improoove
var hats=prompt('how many hats');
console.log('no of hats:', hats);

//=== means ONLY equals string of 4, of string type
if (kids === '4' || kids ==='3')  {
  alert('niiiice');
}


if (hats === '3' && kids === '4')  {
  alert('nice again');
}
//helpers!!!
//parseInt
//toLowerCase
//toUpperCase
