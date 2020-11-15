
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, leftSide, rightSide, bottomSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,600,50);
	ground = new Ground(width/2, 650, width, 10);
	leftSide = new Dustbin(600, 620, 10, 50);
	rightSide = new Dustbin(720, 620, 10, 50);
	bottomSide = new Dustbin(660, 630, 120, 10);

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:95, y:-95})
	}
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display(); 
  ground.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  image(bottomSide.image,585,565,150,80);
 
  
  drawSprites();
 
}



