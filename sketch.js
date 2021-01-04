const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ourengine,ourworld
var ground,ball

function setup() {
  createCanvas(1000,1000);
  ourengine = Engine.create();
  ourworld = ourengine.world;
  var options ={
    isStatic:true
  }
  
  ground=Bodies.rectangle(500,980,1000,20,options);
  World.add(ourworld,ground);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(400,500,50,ball_options)
  World.add(ourworld,ball);
}

function draw() {
 
  background(0);  
  Engine.update(ourengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)

}

