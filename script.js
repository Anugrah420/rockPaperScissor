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
console.log(getComputerChoice())
