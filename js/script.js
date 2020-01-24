var numbers = [];
var answer = Math.floor(Math.random()*100 + 1);
  console.log(answer);

  for (i = 0; i<=100; i++) {
    numbers.push(i);
    };

console.log(numbers);
var guesses = [];


// var guessField = document.getElementsByClassName('guessField');

  document.getElementById("submitguess").onclick = function(){

   var guess = document.forms[0].elements.guessHere.value;





   // function integercheck(){
   //   if (Number.isInteger(guess)=true){
   //     console.log("thenumber is an integer")
   //      }
   //    }



   // if (Number.isInteger(guess)){
   //   num.innerHTML = "hi";
   // }else{
   //   num.innerHTML = "please enter an integer";
   // }


   if(guesses.length == 10){
     result.innerHTML = guesses + "<br>" +"You've already guessed 10 times. Come on!";
     console.log(guess);
   }
   if(guesses.length == 50){
     result.innerHTML = guesses + "<br>" + "You've already guessed 50 time! Will you ever get it!?!";
   }
   if(guesses.length == 99){
     result.innerHTML = guesses + "<br>" + "This is your last try, you will get it this time!";
 }

}

document.getElementById("submitguess").onclick=function ceck(){
  var guess = document.forms[0].elements.guessHere.value;

   if(guess == answer){
      result.innerHTML = "YOU'RE A WINNER! YOU GUESSED IT RIGHT IN " + guesses.length + " tries";
    }else if(Math.abs(answer - guess) <20){
      guesses.push(guess);
      guess++;
      result.innerHTML = guesses + "<br>" + "HOT! You are getting close!";
   }
  else {
      guesses.push(guess);
       guess++;
       result.innerHTML =guesses + "<br>" + "You are not close! TRY ANOTHER NUMBER";

   }

   // if(Number.isInteger(guess)=true){
   //   var int = document.getElementById("userGuess");
   //   int.innerHTML = " integer";
   // }else{
   //   int.innerHTML = "please enter an integer";
   //}

}

//  var number = document.getElementById("integercheck");
// {
//  if (Number.isInteger(guesses)){
//    number.innerHTML = "hi";
//  }else{
//
//  number.innerHTML = "please enter an integer";
//  }}
