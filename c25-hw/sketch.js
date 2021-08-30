
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world; 
var groundobj, paperobj; 
var dustbinobj;

function setup() {
	 createCanvas(1600, 700); 
	 engine = Engine.create(); 
	 world = engine.world; 
	 paperobj = new Paper(200, 400, 70);
	 groundobj = new Ground(width/2,690,width,20); 
	 dustbinobj = new Dustbin(1200,650); 

	 
	Engine.run(engine); 

	}
function draw() {
  rectMode(CENTER);
  background(230);
  paperobj.display();
  groundobj.display();
  dustbinobj.display();
}


function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145}); 
		} 
	}


