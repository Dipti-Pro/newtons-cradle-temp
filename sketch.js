
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob1.body,bob1.body.position,
								{x:-50,y:-45});
	
		  }
	}
function draw() {
  rectMode(CENTER);
  background(230);
 

  
 
}






