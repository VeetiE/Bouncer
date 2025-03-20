let BG
let robot
let paddle_width = 80;
let paddle_height = 30;
var robolist = [];
let robotimer;


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
    image(robot, this.X, this.Y, 30, 30)
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
    robolist.forEach(function(robo, which) {
      robo.move(windowWidth)
    })
}
function create_paddle(){
  fill('#85adad')
  rect(mouseX, windowWidth/3  -50,  paddle_width, paddle_height, 20, 20, 0, 0)
}
function create_robots(){
  let new_robot = new Robot()
  robolist.unshift(new_robot)
  robotimer = setTimeout(create_robots, 2000)
}
function play(){
  robolist = []
  clearTimeout(robotimer)
  loop()
  create_robots()
}