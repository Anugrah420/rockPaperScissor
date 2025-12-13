console.log("Welcome PLAYER!")
function getComputerChoice(){
i = Math.random()
let choice = "failedToChoose"
if(i<0.33){
    choice="Rock"
}
else if(i<0.66){
    choice="Paper"
}
else{
    choice="Scissor"
}
return choice;
}


function getPlayerChoice(){
    let i=prompt("Rock : 1 Paper : 2, Scissor : 3")
    if(i===null){
        return null
    }
    i=parseInt(i)
    let choice="U failed to choose!"
    if (i===1){
        choice="Rock"
    }else if(i===2){
        choice="Paper"
    }else if(i===3){
        choice="Scissor"
    }
    return choice
}


function playGround(){
let playerScore =0
let ComputerScore =0
let n = prompt("No of Rounds U want to play: ")
if(n===null)return
n=parseInt(n)
x=1
while(x<=n){
let computerChoice = getComputerChoice()
let humanChoice = getPlayerChoice()
if(humanChoice===null){
    console.log("GameCancelled")
    break;
}
if(computerChoice=="Rock"){
    if(humanChoice=="Paper"){
        playerScore+=1
        console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
    else if(humanChoice=="Scissor"){
        ComputerScore+=1
        console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
     else if(humanChoice===computerChoice){
        console.log("Tie")
    }
    else{
        console.log("error")
    }
}
else if(computerChoice=="Paper"){
    if(humanChoice=="Scissor"){
        playerScore+=1
        console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
    else if(humanChoice=="Rock"){
        ComputerScore+=1
        console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
     else if(humanChoice===computerChoice){
        console.log("Tie")
    }
    else{
        console.log("error")
    }
}
else if(computerChoice=="Scissor"){
    if(humanChoice=="Rock"){
        playerScore+=1
        console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
    else if(humanChoice=="Paper"){
        ComputerScore+=1
        console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
    }
    else if(humanChoice===computerChoice){
        console.log("Tie")
    }
    else{
        console.log("error")
    }
}
x++
}
console.log(`GameEnded`)
console.log(`Player: ${playerScore} | Computer: ${ComputerScore}`)
}
playGround()