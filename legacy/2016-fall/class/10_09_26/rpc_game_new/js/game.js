var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34)      computerChoice = "rock";
else if(computerChoice <= 0.67) computerChoice = "paper";
else                            computerChoice = "scissors";

console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {

    switch(choice1){
        case choice2: return "The result is a tie!";
        case 'rock':  return (choice2 === 'scissors') ? "rock wins" : "paper wins";
        case 'paper':  return (choice2 === 'rock') ? "paper wins" : "scissors wins";
        case 'scissors':  return (choice2 === 'paper') ? "scissors wins" : "rock wins";
    }
}

console.log(compare (userChoice, computerChoice));

