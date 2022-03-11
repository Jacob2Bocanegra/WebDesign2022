console.log("this thing works!!!!");
let choices = ["rock", "paper", "scissors"];
console.log("play " + choices);

let cpu = Math.floor(Math.random()*choices.length);

function userRock(){
    userChoice = "rock";
    console.log("you chose... rock")
    playrps();

    var x = document.createElement("p");
    var t = document.createTextNode("you chose rock");
    x.appendChild(t);
    document.body.appendChild(x);
    // this creates a text element in the webpage 
    createImage("_images/rock.jpeg");  
} 
function userPaper(){
    userChoice = "paper"
    console.log("you chose... paper");
    playrps();

    var x = document.createElement("p");
    var t = document.createTextNode("you chose paper");
    x.appendChild(t);
    document.body.appendChild(x);
    createImage("_images/paper.jpg");
}
function userScissors(){
    userChoice = "scissors";
    console.log("you chose... scissors");
    playrps();

    var x = document.createElement("p");
    var t = document.createTextNode("you chose scissors");
    x.appendChild(t);
    document.body.appendChild(x);
    createImage("_images/scissors.jpeg");
}
// createimage function logs an image in the doc tied to the cpu choice
function createImage(pic) {
    var x = document.createElement("img");
    x.setAttribute("src", pic);
    x.setAttribute("width", "185");
    x.setAttribute("height", "150");
    x.setAttribute("alt","");
    document.body.appendChild(x);
}
// the createimage with src pic allows you to create any image with one function

function playrps() {
    
console.log ("the computer chose..." + choices[cpu] + "!");
let score = 0;

if (cpu == 0 && userChoice == "scissors"){
    console.log("you lost");

    var x = document.createElement("H1");
    var t = document.createTextNode("You lost");
    x.appendChild(t);
    document.body.appendChild(x);
    score = score -1
}
else if (cpu == 1 && userChoice == "scissors") {
    console.log("you win");
    var x = document.createElement("H1");
    var t = document.createTextNode("you win!");
    x.appendChild(t);
    document.body.appendChild(x);
    score = score +1
}
else if (cpu == 2 && userChoice == "scissors") {
    console.log("you tied");
    var x = document.createElement("H1");
    var t = document.createTextNode("you tied");
    x.appendChild(t);
    document.body.appendChild(x);
}
else if (cpu == 0 && userChoice == "paper") {
    console.log("you win");
    var x = document.createElement("H1");
    var t = document.createTextNode("you win!");
    x.appendChild(t);
    document.body.appendChild(x);
    score = score +1
}
else if (cpu == 1 && userChoice == "paper") {
    console.log("you tied");
    var x = document.createElement("H1");
    var t = document.createTextNode("you tied");
    x.appendChild(t);
    document.body.appendChild(x);
}
else if (cpu == 2 && userChoice == "paper") {
    console.log("you lost");
    var x = document.createElement("H1");
    var t = document.createTextNode("You lost");
    x.appendChild(t);
    document.body.appendChild(x);
    score = score -1
}
else if (cpu==0 && userChoice=="rock") {
    console.log ("you tied");
    var x = document.createElement("H1");
    var t = document.createTextNode("you tied");
    x.appendChild(t);
    document.body.appendChild(x);
}
else if (cpu==1 && userChoice == "rock"){
console.log("you lose")
var x = document.createElement("H1");
    var t = document.createTextNode("You lost");
    x.appendChild(t);
    document.body.appendChild(x);
    score= score -1
}
else if (cpu==2 && userChoice == "rock" ){
    console.log("you win")
    var x = document.createElement("H1");
    var t = document.createTextNode("you win!");
    x.appendChild(t);
    document.body.appendChild(x);
    score = score +1
}
if (cpu==0) {
    var x = document.createElement("p");
    var t = document.createTextNode("Computer chose rock");
    x.appendChild(t);
    document.body.appendChild(x);
    createImage("_images/rock.jpeg");
}
if (cpu==1) {
    var x = document.createElement("p");
    var t = document.createTextNode("Computer chose paper");
    x.appendChild(t);
    document.body.appendChild(x);
    createImage("_images/paper.jpg");
}

if (cpu==2) {
    var x = document.createElement("p");
    var t = document.createTextNode("Computer chose scissors");
    x.appendChild(t);
    document.body.appendChild(x);
    createImage("_images/scissors.jpeg");
}
}
// function reset() {
//     let identity = document.getElementById(id);
//     while (identity.firstChild){
//         identity.removeChild(identity.firstChild)
//     }
//   }
// try to make this less repetitive