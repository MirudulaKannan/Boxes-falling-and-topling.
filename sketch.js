const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var myEngine, myWorld;
var box1, box2, ground;


function setup() {
  createCanvas(400,400);
  myEngine = engine.create();
  myWorld = myEngine.world;

  box1 = new Box(200,200,50,50);
  box2 = new Box(240,50,50,80);
  ground = new Ground(200,390,400,20);
}


function draw() {
  background(0);  
  engine.update(myEngine);
  box1.display();
  box2.display();
  ground.display();
}