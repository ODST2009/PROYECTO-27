const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var boxes = [];

function setup() {
  createCanvas(400, 400);

  
  engine = Engine.create();
  world = engine.world;

  
  var option = {
    isStatic: true
  };


  ground = Bodies.rectangle(200, 380, 400, 20, option);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 50, 50));
}

function draw() {
  background(51);


  rect(ground.position.x, ground.position.y, 400, 20);

  
  Engine.update(engine);


  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}


class Box {
  constructor(x, y, w, h) {
    var options = {
      restitution: 0.8
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
