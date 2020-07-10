'use strict';
// console.log(..greetings)
// Q1 ask for user's name, hey how's it going
// Need 5 y/n questions
// - Is Andre from Seattle, Washington
// - Does Andre like to watch movies
// - Is Andre an only child
// - Is Andre tall, i reach all of the shelves
// - Does Andre like to dance
//Question 6 wrapped in a function
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
    // Q6 Content end
  }
  // Q6 loop complete
}
howManyPetsQuestion();
// Question 6 Complete

// Question 7 start
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
//Q7 complete