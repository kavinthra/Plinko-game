const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var ground;
var engine,world;

function setup() {
  createCanvas(800,800);
  
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);
  
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,));
  }
  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);
  textSize(20);
  Engine.update(engine);
  ground.display() ;
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  } 
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    score=score+1;
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();
  }
}