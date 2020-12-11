const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,pimg,ground;
var engine,world;
var gameState="onSling";

function preload(){
pimg=loadImage("polygon.png");
}

function setup() {

  createCanvas(800,800);

  engine = Engine.create();
    world = engine.world;
  stroke(255)

   ground = new Ground(300,height,1600,20);
   platform = new Ground(455,height-120,240,20);
  box1 = new Box(365,height-150,30,40);
  box2 = new Box(395,height-150,30,40);
  box3 = new Box(425,height-150,30,40);
  box4 = new Box(455,height-150,30,40);
  box5 = new Box(485,height-150,30,40);
  box6 = new Box(515,height-150,30,40);
  box7 = new Box(545,height-150,30,40);
  box9 = new Box(410,height-190,30,40);
  box10 = new Box(440,height-190,30,40);
  box11 = new Box(470,height-190,30,40);
  box12 = new Box(500,height-190,30,40);
  box13= new Box(440,height-230,30,40);
  box14= new Box(470,height-230,30,40);
  box15= new Box(455,height-270,30,40);

  platform2 = new Ground(685,height-300,180,20);
  box111 = new Box(655,height-340,30,40);
  box222 = new Box(685,height-340,30,40);
  box333 = new Box(715,height-340,30,40);
  box444 = new Box(670,height-380,30,40);
  box555 = new Box(700,height-380,30,40);
  box666 = new Box(685,height-420,30,40);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
slingshot = new Slingshot(this.polygon,{x:100,y:500});

  Engine.run(engine);
}

function draw() {

  background(0);  
  


  ground.display();
  platform.display();
  platform2.display();
  box1.display();
 
  box2.display();
 
  box3.display();
  
  box4.display();
  
  box5.display();
 
  box6.display();

  box7.display();
 
 box9.display();

 box10.display();
 
 box11.display();
 
 box12.display();
 
 box13.display();
 
 box14.display();
 
 box15.display();
 

 box111.display();
 box222.display();
 box333.display();
 box444.display();
 box555.display();
 box666.display();

imageMode(CENTER);
image(pimg,polygon.position.x,polygon.position.y,40,40);
slingshot.display();

}
function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:200,y:50});
  slingshot.attach(this.polygon);
  
  }
}