
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var r = 40;

function setup() {
	createCanvas(900, 990);
	engine = Engine.create();
	world = engine.world;


  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(250,100, r/2, ball_options);
  World.add(world, this.body);

	Engine.run(engine);

	ground1 = new Ground(width/2,670,width,20);
	leftSide = new Ground (1100,600,20,120);
	rightSide = new Ground (1350,600,20,120)
  
}

function draw() {
  rectMode(CENTER);
  background(51);
 
 ground1.show();
 leftSide.show();
 rightSide.show();
  
 ellipse(ball.position.x, ball.position.y, r, r);
}

