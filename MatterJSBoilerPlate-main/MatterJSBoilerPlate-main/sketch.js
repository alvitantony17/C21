
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var leftWall;
var rightWall;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
    var options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
    ground=new Ground(400,580,800,20)
    leftWall=new Ground(550,505,20,130)
	rightWall=new Ground(700,505,20,130)
	ball=Bodies.circle(50,50,10,options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ground.display()
  leftWall.display()
  rightWall.display()
  
  ellipse(ball.position.x,ball.position.y,10,10)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:10,y:-20})
	}

}



