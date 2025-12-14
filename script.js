// console.log("Welcome PLAYER!")
// function getComputerChoice(){
// i = Math.random()
// let choice = "failedToChoose"
// if(i<0.33){
//     choice="Rock"
// }
// else if(i<0.66){
//     choice="Paper"
// }
// else{
//     choice="Scissor"
// }
// return choice;
// }


// function getPlayerChoice(){
//     let i=prompt("Rock : 1 Paper : 2, Scissor : 3")
//     if(i===null){
//         return null
//     }
//     i=parseInt(i)
//     let choice="U failed to choose!"
//     if (i===1){
//         choice="Rock"
//     }else if(i===2){
//         choice="Paper"
//     }else if(i===3){
//         choice="Scissor"
//     }
//     return choice
// }


// function playGround(){
// let playerScore =0
// let ComputerScore =0
// let n = prompt("No of Rounds U want to play: ")
// if(n===null)return
// n=parseInt(n)
// x=1
// while(x<=n){
// let computerChoice = getComputerChoice()
// let humanChoice = getPlayerChoice()
// if(humanChoice===null){
//     console.log("GameCancelled")
//     break;
// }
// if(computerChoice=="Rock"){
//     if(humanChoice=="Paper"){
//         playerScore+=1
//         console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//     else if(humanChoice=="Scissor"){
//         ComputerScore+=1
//         console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//      else if(humanChoice===computerChoice){
//         console.log("Tie")
//     }
//     else{
//         console.log("error")
//     }
// }
// else if(computerChoice=="Paper"){
//     if(humanChoice=="Scissor"){
//         playerScore+=1
//         console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//     else if(humanChoice=="Rock"){
//         ComputerScore+=1
//         console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//      else if(humanChoice===computerChoice){
//         console.log("Tie")
//     }
//     else{
//         console.log("error")
//     }
// }
// else if(computerChoice=="Scissor"){
//     if(humanChoice=="Rock"){
//         playerScore+=1
//         console.log(`Player Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//     else if(humanChoice=="Paper"){
//         ComputerScore+=1
//         console.log(`Computer Won, PlayerScore:${playerScore},ComputerScore:${ComputerScore}`)
//     }
//     else if(humanChoice===computerChoice){
//         console.log("Tie")
//     }
//     else{
//         console.log("error")
//     }
// }
// x++
// }
// console.log(`GameEnded`)
// console.log(`Player: ${playerScore} | Computer: ${ComputerScore}`)
// }
// playGround()



// const container=document.querySelector("#container")
// const display=container.firstElementChild
// console.log(display)

// const controls=document.querySelector(".controls")
// const display1=controls.previousElementSibling
// console.log(display1)
// const childList=container.querySelectorAll("div")
// console.log(childList)

// //creates a new fiv referenced in the variable 'div'
// const div  = document.createElement("div")

// //adds the indicated styke rule to the element in the div variable
// div.style.color="blue"
// div.style.cssText-"color:blue;background :white;"
// div.setAttribute("style","color: blue;background:white;")

// //dot notation with camel case:
// div.style.backgroundColor;
// //bracket notation with kebab case:
// div.style["background-color"];
// //bracket notation with camel case:
// div.style["backgroundColor"]

// //if id exists, update it with "theDiv" else create an id with the value "theDiv"
// div.setAttribute("id","theDiv")
// //returns value of specified attributs, in this case thediv
// div.getAttribute("id");
// div.removeAttribute("id")

// //adds new class "new" to ur new div
// div.classList.add("new")
// //removes "new" class from div
// div.classList.remove("new")
// //if div doesnt have class"active" then add it or if it does then remove it
// div.classList.toggle("active")

// div.textContent="hello World!"
// div.innerHTML=<span>Hello world2</span> //avoid it instead use .textContent

const container =document.querySelector("#container")

const para =document.createElement("p")
para.classList.add("para")
para.textContent="hey! iam read"
para.style.cssText="color: red;"
container.appendChild(para)

const h3=document.createElement("h3")
h3.classList.add("h3")
h3.textContent="i am blue h3"
h3.style.cssText="color: blue;"
container.appendChild(h3)

const div=document.createElement("div")
div.classList.add("div")
div.style.border="1px solid black"
div.style.backgroundColor="pink"

const h1=document.createElement("h1")
h1.classList.add("h1")
h1.textContent="i am in div"
div.appendChild(h1)

const p2=document.createElement("p")
p2.classList.add("p")
p2.textContent="ME TOO!"
div.appendChild(p2)



container.appendChild(div)

//dynamic demand
const btn=document.querySelector("#btn")

btn.onclick=()=>alert("Hello there!")
//problem with this is that we can only have 1 onclick Property


//therefore
const btn2=document.querySelector("#btn2")
btn2.addEventListener("click",()=>{
    alert("Hello World!")
})

//using function inside the listeners
function alertMessage(){
    alert("Hello there!")
}

const btn3=document.querySelector("#btn3")
btn3.addEventListener("click",alertMessage)

const btn4=document.querySelector("#btn4")
btn4.onclick=alertMessage

const buttons=document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click" ,() => {
        alert(button.id);
    });
})