
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftside;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

ball = Matter.Bodies.circle(200,100,20,ball_options);
World.add(world, ball);

	groundObj = new Ground(width/2, 670, width,20, ball_options);
    leftside = new Ground(1100,600,20,120,ball_options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  push();
  groundObj.display();
  pop();

  drawSprites();
 
}



