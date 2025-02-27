let BG
let robot
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