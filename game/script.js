let BG
let robot
let paddle_width = 80;
let paddle_height = 30;
var robolist = [];

class  Robot{
  constructor() {
    this.Y = windowWidth/3/2
    this.X = 0
    this.speed = random(1,4)
  }
  move() {
    if(this.X<windowWidth -25){
      this.X = this.X + this.speed
    }
  }
}

function preload() {
    BG = loadImage('images/cavernous.png');
    robot = loadImage('images/robot.png');
  }
  
function setup() {
var canvas = createCanvas(windowWidth, windowWidth / 3 );
canvas.parent('robopeli');
}

function draw() {
    background('white')
    image(BG, 0, 0, windowWidth, windowWidth / 3)
}
function create_paddle(){
  fill('#85adad')
  rect(mouseX, windowWidth/3  -50,  paddle_width, paddle_height, 20, 20, 0, 0)
}
