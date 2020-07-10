'use strict';
// console.log(..greetings)
// Q1 ask for user's name, hey how's it going
// Need 5 y/n questions
// - Is Andre from Seattle, Washington
// - Does Andre like to watch movies
// - Is Andre an only child
// - Is Andre tall, i reach all of the shelves
// - Does Andre like to dance


//Q1 Origin
function wieBenJe(){
  var usernaamAntwoord = prompt('How\'s it going? What\'s your name?');
  // console.log('usernaamAntwoord :' + usernaamAntwoord);

  alert('Cool Beans, ' + usernaamAntwoord + ' hope you\'re having a good day');
}
wieBenJe();
//Q1 Function.. I'd like to add a time of day loop here to tailor the greeting to the time of day..


//Q2 Origin
function waarVanDan(){
  var seattleOrigin = prompt('Am I from around here (Y/N)?');
  //console.log('seattleOrigin:' + seattleOrigin);

  if (seattleOrigin.toUpperCase() === 'Y'){
    alert('Not Quite..');
  } else {
    alert('Appears Legitimate' + usernaamAntwoord);
  } //i need this alert to show when user says 'N' or a loop to try again if wrong
}
waarVanDan();
//Q2 Complete

//Q3 Origin
function film(){
  var filmLover = prompt('Do I like movies (y/n)?');
  //console.log('filmLover:' + filmLover);
  if(filmLover.toLowerCase() === 'y'){
    alert('Not too shabby.');
  } else {
    alert('Inconcievable!!');
  }
}
film();
//Q3 Complete

//Q4 Origin
function kin(){
  var famFam = prompt('Does this guy have siblings (y/n) ?');
  // console.log('famFam :' + famFam);

  if (famFam.toLowerCase() === 'y'){
    alert('Yep, Older sister.');
  }else if(famFam.toLowerCase() === 'n'){
    alert('she\'s small, but she still counts');
  }
}
kin();
//Q4 Completed

//Q5 Origin
function topShelf(){
  var reach = prompt('Is he tall (y/n)?');
  // console.log('reach : ' + reach);
  if (reach.toLowerCase() === 'y'){
    alert('I do reach the top shelf, yes.');
  }else{
    alert('If I was shorter I wouldnt have a hard time finding shirts with the right length sleeves');
  }
}
topShelf();
//Q5 Complete

function howManyPetsQuestion(){
  //Question 6 in a loop
  for(var i=0; i<4; i++){
    //Question 6 content
    var howManyPetsAnswer = prompt('How many pets does Andre want to have?');
    // console.log('howManyPetsAnswer :' + howManyPetsAnswer);
    if (howManyPetsAnswer > '30'){
      alert('That\'s just crazy! Try again.');
    } else if(howManyPetsAnswer < '30'){
      alert('Close, but no cigar! Try again.');
    } else if(howManyPetsAnswer === '30'){
      alert('I know it seems a bit much...and it probably is BUT I don\'t care!');
      break;
    }
    // Thanks to Krystian for helping me understand this
    // Q6 Content end
  }
  // Q6 loop complete
}
howManyPetsQuestion();
// Q6 Complete

// Q7 start
for (var i=0; i<6; i++){
  // Question 7 array
  var favColorAnswer = prompt('What is Andre\'s favorite color?');

  var favColorArray = ['purple', 'green', 'neon pink', 'orange', 'navy blue'];

  if(favColorAnswer === favColorArray[0] || favColorAnswer === favColorArray[1] ||favColorAnswer === favColorArray[2]){
    alert('You got it!');
    break;
  } else {
    alert('A Swing and A Miss.');
  }
  // Q7 array end
}
//Q7 Loop


//Q8 Origin

function danceDance(){
  for(var i=0; i<=3; i++){
    var doIDance = prompt('Doe\'s he dance (y/n)?');
    if (doIDance.toLowerCase() === 'y'){
      alert ('I only do that to make my wife laugh..');
    } else {
      alert('only to make the wife laugh');
    }
  }
}
danceDance();
//Q8 complete