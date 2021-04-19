
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 hammer = new Hammer(100,200,40,50)
 stone1=new stone(700,300,100,100)
 rubber1=new Rubber(900,700,70)
 plane1=new plane(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  hammer.display()
  stone1.display()
  rubber1.display()
	  plane1.display()
  
 
}



