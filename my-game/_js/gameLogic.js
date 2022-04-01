// // Global Variables 
let canvas = null;
let ctx = null;

let WIDTH = 1000;
let HEIGHT = 768;
let BGCOLOR = "blue";



// initialization function 
// creates a div; sets attributes; appends body; creates canvas; puts canvas inside div
function init() {
    let gameDiv = document.createElement("div");
    gameDiv.setAttribute("style", "border: 1px solid;"
    + "width:" + WIDTH + "px; "
    + "height:" + HEIGHT + "px; "
    + "background-color: " + BGCOLOR);
    document.body.appendChild(gameDiv);

    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    // debugging tool
    try {
        gameDiv.appendChild(canvas);
        console.log("game initialized");
    } catch (e){
        alert(e.message);
    }
    gameLoop();
}
// This is like a MOLD
class Square {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed=3
    }
    // update method
    update = function () {
        this.y += this.speed*Math.random()*5;
        this.x += this.speed*Math.random()*5;
        if( this.x > WIDTH || this.x <0 || this.y> HEIGHT){
            this.speed*=-1;
        }
    }
    draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
class Circle {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed=3
    }
    update = function () {
        this.y += this.speed*Math.random()*5;
        this.x += this.speed*Math.random()*5;
        if( this.x > WIDTH || this.x <0 || this.y> HEIGHT){
            this.speed*=-1;
        }
    }
    draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
        ctx.stroke();;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let spongeBob = new Square(10, 10, 30, 30, 'rgb(255, 255, 0)');
let patrick = new Square(10, 30, 65, 65, 'rgb(255, 150, 150)');
let squidward = new Square(70, 90, 20, 40, 'aquamarine');
let sandy = new Circle (70, 200, 20, 40, 'rgb(170,100,70');


function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    spongeBob.draw();
    patrick.draw();
    squidward.draw();
    sandy.draw();
}

function update() {
    spongeBob.update();
    patrick.update();
    squidward.update();
    sandy.update();
}


function gameLoop(){
    console.log('the game loop is alive!!!');
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}
