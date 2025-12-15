let playerScore=0
let computerScore=0

function getComputerChoice(){
    let i=Math.random();
    if(i<0.33) return "Rock"
    else if(i<0.66) return "Paper"
    else return "Scissor"
}

function playGround(humanChoice){
    let computerChoice=getComputerChoice()
    let resultText=""

    if(humanChoice===computerChoice){
        resultText=`Tie! Both chose ${humanChoice}`
    }
    else if(
        (humanChoice==="Rock" && computerChoice==="Scissor") ||
        (humanChoice==="Paper" && computerChoice === "Rock")||
        (humanChoice==="Scissor" && computerChoice ==="Paper")
    ){
        playerScore++
        resultText=`You Won ${humanChoice} beats ${computerChoice}`
    }
    else{
        computerScore++
        resultText=`You lost! ${computerChoice} beats ${humanChoice}`
    }

    textBox.textContent=resultText
    scoreBox.textContent=`Player: ${playerScore} | Computer: ${computerScore}`
    checkWinner()
}

function checkWinner(){
    if(playerScore===5){
        textBox.textContent="GAME OVER! YOU WIN!"
        disableButtons()
    }
    else if(computerScore===5){
        textBox.textContent="GAME OVER! COMPUTER WINS!"
        disableButtons()
    }

}

function disableButtons(){
    const gameButtons=container.querySelectorAll(".game-btn")
    gameButtons.forEach(btn =>btn.disabled =true)
}

function createGameButtons(){
    const choices=["Rock","Paper","Scissor"]

    choices.forEach(choice => {
        const btn = document.createElement("button")
        btn.classList.add("game-btn")
        btn.style.amrgin="10px"
        btn.textContent=choice

    

    btn.addEventListener("click",()=>{
        playGround(choice)
    })
    container.appendChild(btn)
})
}


    //--------------UI ELEMENTS
    const container=document.querySelector("#container")

    let textBox=document.createElement("h2")
    textBox.classList.add("textBox")
    textBox.textContent="Are you ready?"
    container.appendChild(textBox)

    let scoreBox=document.createElement("div")
    scoreBox.classList.add("scoreBox")
    scoreBox.textContent="Player: 0 | Computer: 0"
    scoreBox.style.marginBottom="20px"
    container.appendChild(scoreBox)

    let startBtn=document.createElement("button")
    startBtn.classList.add("startBtn")
    startBtn.textContent="Click to start!"
    container.appendChild(startBtn)

//..............EVENTS
startBtn.addEventListener("click",()=>{
    textBox.textContent="Choose ur weapon!"
    startBtn.remove()
    createGameButtons()
})

