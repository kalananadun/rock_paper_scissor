const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const endResult = document.getElementById("result");

// for all the data 
const possibleChoices = document.querySelectorAll("button");
let Choice;
let computerChoiceStr;
let userChoiceStr;
possibleChoices.forEach(choice => choice.addEventListener('click',e=>{
    userChoiceResult = e.target.id;
    userChoice.innerHTML= userChoiceResult;
    generateComputerChoice(choice);
}));

function generateComputerChoice(choice){
    // possible choices is an array 
    const randomNo = Math.floor((Math.random() * possibleChoices.length)+1);
    let choiceno;
    if(randomNo ===1 ){
        computerChoice.innerHTML = "rock";
    }
    if(randomNo ===2 ){
        computerChoice.innerHTML = "paper";
        computerChoiceStr= "paper";
    }
    if(randomNo ===3 ){
        computerChoice.innerHTML = "scissor";
    }

    // get the detail of wining
    if(userChoiceResult ==="rock"){
        choiceno =  1;
        if (choiceno === randomNo) {
            endResult.innerHTML = "Draw";
        }
        else{
            if(computerChoiceStr==="paper"){
                endResult.innerHTML = "Computer won";
                console.log(`Computer won`);
            }
            else{ // computer choice is scissor 
                endResult.innerHTML = "you won";
                console.log(`You won`);
            }
        }

    }
    if(userChoiceResult==="paper"){
        choiceno=2;
        if (choiceno === randomNo) {
            endResult.innerHTML = "Draw";
        }
        else{
            // in case of the rock 
            if(computerChoiceStr==="rock"){
                endResult.innerHTML = "You won";
                console.log(`You won`);
            }
            // in case of scissor 
            else{
                endResult.innerHTML = "Computer won";
                console.log(`Computer won`);
            }

        }
    }
    if(userChoiceResult=="scissor"){
        choiceno=3;
        if (choiceno === randomNo) {
            endResult.innerHTML = "Draw";
        }
        else{
            // in case of rock 
            if(computerChoiceStr=== "rock"){
                endResult.innerHTML = "computer won"
            }
            // in case of paper
            else{
                endResult.innerHTML = "you won";
            }
        }
    }

    
    
}


