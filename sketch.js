
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box = new Paper(200,200,50);
	ground = new Ground(400,670,800,40);
	bin = new Bin(600,650,200,20);
	bin1 = new Bin(490,610,20,100);
	bin2 = new Bin(690,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display();
  ground.display();
  bin.display();
  bin1.display();
  bin2.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	var pos = Paper.this.body.position;
	Matter.Body.applyForce(Paper,pos,{x:85,y:-85});
}

}


