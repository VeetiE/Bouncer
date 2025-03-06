let BG
let robot
let paddle_width = 80;
let paddle_height = 30;

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
  
}