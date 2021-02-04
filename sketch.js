
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,540,800,20);
	box1= new Dustbin(565,475,20,80);
	box2= new Dustbin(715,475,20,80);
	box3= new Dustbin(640,515,150,20);
	paper= new Paper(50,500,15);


    
	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
ground.display();
box1.display();
box2.display();
box3.display();
paper.display();
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:8.5, y:-8.5});
	}
}



