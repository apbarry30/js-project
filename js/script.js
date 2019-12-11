var numbers = [];
var answer = Math.floor(Math.random()*100 + 1);
  console.log(answer);

  for (i = 0; i<=100; i++) {
    numbers.push(i);
    };

console.log(numbers);
var guesses = [];
var temp = 1;

  document.getElementById("submitguess").onclick = function(){

   // number guessed by user
   var guess = document.forms[0].elements.guessHere.value;

   // if (Math.abs(guess - answer) <10){
   //   result = document.getElementById("result");
   //   result.innerHTML = "YOU'RE Getting CLOSE";
   // }

   if(guess == answer){
      result.innerHTML = "YOU'RE A WINNER! YOU GUESSED IT RIGHT IN" + guess + "tries";
   }

    else if(Math.abs(answer - guess) <10){
      guesses.push(guess);
      guess++;
      result.innerHTML = guesses + "<br>" + "KINDA HOT";

   }
   else
   {
      guesses.push(guess);
       guess++;
       result.innerHTML ="TRY ANOTHER NUMBER";
   }
   if(guesses.length == 10){
     result.innerHTML = "You've already guessed 10 times. Come on!";
     console.log(temp);
   }
   if(guesses.length == 50){
     result.innerHTML = "You've already guessed 50 time! Will you ever get it!?!";
   }

 }
