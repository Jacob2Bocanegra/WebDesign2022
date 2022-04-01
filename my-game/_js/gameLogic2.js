// global variables
let canvas = null;
let ctx = null;

let WIDTH = 736;
let HEIGHT = 288;
let TILESIZE = 32;
let BGCOLOR = "blue";

let allSprites = [];
let allWalls = []
let allCactus = []

let keysDown = {};
let keysUp = {};

// event listeners that wait foe keyboard input
addEventListener("keydown", function (event) {
    // keysDown = {};
    keysDown[event.key] = true;
    console.log(event);
}, false);

addEventListener("keyup", function (event) {
    keysUp[event.key] = true;
    delete keysDown[event.key];
    console.log("the key that was removed " + event);
}, false);

// string that holds values we can use to build level
let gamePlan = `
......................
..............|.......
..............|.......
.|.........#####......
.|.|.......#####......
.|||..................
..|...................
####...###############
####...###############`;

// this is like a MOLD to make oher objects
// sprite = any object on the screen that gets drawn
class Sprite {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 3;
        allSprites.push(this);
    }
    create(x,y,w,h) {
        return new Sprite(x, y, w, h)
    }
    CollideWith(obj){
        if (this.x + this.w >= obj.x &&
            this.x <= obj.x + obj.w &&
            this.y + this.h >= obj.y &&
            this.y <= obj.y + obj.w ){
                return true
            }
    }
    // update method
    // update() {
    //     this.x += this.speed*Math.random()*5;
    //     this.y += this.speed*Math.random()*5;
    //     if (this.x > WIDTH || this.x < 0 || this.y < 0 || this.y > HEIGHT){
    //            this.speed*=-1; 
    //         }
    // }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Wall extends Sprite {
    constructor (x, y, w, h, color){
        super(x, y, w, h, color);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        allSprites.push(this);
        allWalls.push(this);
    }
    create(x,y,w,h,color){
        return new Wall(x,y,w,h, color)
    }
}
class Cactus extends Sprite {
    constructor (x, y, w, h, color){
        super(x, y, w, h, color);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "rgb(50,250,0)";
        allSprites.push(this);
        allCactus.push(this);
    }
    create(x,y,w,h,color){
        return new Wall(x,y,w,h)
    }
}

class Player extends Sprite {
    constructor(x, y, w, h, color) {
        super(x,y,w,h,color);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 10;
        allSprites.push(this);
    }
    input() {
        // lets me control player
        if ("w" in keysDown) {
            this.y-=this.speed;
        }
        if ("a" in keysDown) {
            this.x-=this.speed;
        }
        if ("s" in keysDown) {
            this.y+=this.speed;
        }
        if ("d" in keysDown) {
            this.x+=this.speed;
        }
    }
    // adding updates
    update() {
        this.input();
        if (this.x > WIDTH-this.w){
            this.x = WIDTH-this.w;
         }
        if (this.x < 0){
            this.x = 0;
         }
        if (this.y > HEIGHT - this.h){
            this.y = HEIGHT - this.h;
         }
        if (this.y < 0){
            this.y = 0;
         }
    }
    draw() {
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
        this.speed = 2;
        allSprites.push(this);
    }
    update() {
        this.x += this.speed*Math.random()*5;
        this.y += this.speed*Math.random()*5;
        if (this.x > WIDTH || this.x < 0 || this.y < 0 || this.y > HEIGHT){
               this.speed*=-1; 
            }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI);
        ctx.stroke();;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}



function makeGrid(plan, width) {
    let newGrid = [];
    let newRow = [];

    for (i of plan){
        if (i != "\n"){
            newRow.push(i);
        }
        if (newRow.length % width == 0 && newRow.length != 0) {
            newGrid.push(newRow);
            newRow = [];
        }
    }

    return newGrid;
}

function readLevel(grid) {
 let startActors = [];
    for (y in grid) {
        for (x in grid[y]) {

            let ch = grid[y][x];

            if (ch != "\n") {
                let type = levelChars[ch];
                if (typeof type == "string") {
                    startActors.push(type);
                } else {
                    let t = new type;
                    startActors.push(t.create(x*TILESIZE, y*TILESIZE, TILESIZE, TILESIZE, "rgb(200,100,0"))
                }
                // console.log(startActors);
            }
        }

    }

}

const levelChars = {
    ".": "empty",
    "#": Wall,
    "|": Cactus,
}

console.log(makeGrid(gamePlan, 22));
console.log(readLevel(makeGrid(gamePlan, 22)));

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
    
    try {
        gameDiv.appendChild(canvas);
        console.log("game initialized");
    } catch (e){
        alert(e.message);
    }
    gameLoop();
}



let player = new Player(WIDTH/2, HEIGHT/2, 64, 64, 'rgb(255, 255, 0)');
// let spongeBob = new Sprite(10, 10, 30, 30, 'rgb(255, 255, 0)');
// let patrick = new Sprite(10, 30, 65, 65, 'rgb(255, 150, 150)');
// let squidward = new Sprite(70, 90, 20, 20, 'rgb(0, 200, 200)');
// let sandy = new Circle(70, 200, 25, 40, 'rgb(150, 75, 0)');


function input(){

}

function update() {
    // for (i of allSprites){
    //     i.update();
    // }
    player.update();
    for (i of allCactus){
        if(i.CollideWith(player)){
            console.log("ouch...")
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (i of allSprites){
        i.draw();
    }
}


function gameLoop(){
    // console.log('the game loop is alive!!!');
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}

