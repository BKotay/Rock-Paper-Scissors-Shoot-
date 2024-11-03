// eventlistener on click that changes innerhtml and gives the result of the game
// research innerhtml + eventlistener + document.getelementbyid
// math.floor(math.random() * 3);


// First, I am going to declare choices as a variable with an array of rock, paper and scissors then I am going to attack the ID's for those choices.//

const choices = ['rock', 'paper', 'scissors'];
const playerOne = document.getElementById("playerOne")
const playerBK = document.getElementById("playerBK")
const finalResults = document.getElementById("finalResults")
const submitForm = document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault()
    letsPlay()
})

// The function letsPlay() will be used to determine the winner by typing in rock, paper or scissors into the input box and clicking submit button will determine thw winner based on the math.random choice that the variable playerBk will make. if playerOne wins then textContent will show "You are a winner" and if playerOne loses it will show "You are a loser"

// if the playerOne variable and the playerBk variable have the same value then the variable final will be logged. 

// switch is similar to if else statement where the method switch uses case for each possibility. The default will be shown if the user does not input rock, paper or sciwssors

//text.Content shows the logged text once the function has been invoked.

function letsPlay(){

    const playerOneChoice = document.getElementById("input").value.toLowerCase();

    playerOne.textContent = `You: ${playerOneChoice}`;

    const playerBkChoice = choices[Math.floor(Math.random() * 3)]
    let final = "";
    
    if(playerOneChoice === playerBkChoice){
        final = "You are pretty good. Its a TIE!";
    }
        else{
            switch(playerOneChoice){
             case "paper":
              final = (playerBkChoice === "rock") ? "You are a WINNER!": "You are a LOSER!"; 
              break;
            

             case "scissors":
              final = (playerBkChoice === "paper") ? "You are a WINNER!": "You are a LOSER!";
              break;

             case "rock":
              final = (playerBkChoice === "scissors") ? "You are a WINNER!": "You are a LOSER!";
              break;  
             default:
                console.log(
                    final = "You can only submit rock, paper or scissors. Please, try again.")  
        }
        
    }
       
    playerOne.textContent = `You: ${playerOneChoice}`;
    playerBK.textContent = `BK: ${playerBkChoice}`;
    finalResults.textContent = final
    }

    
