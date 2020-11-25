var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height + divisionHeight/2, 10, divisionHeight));
  }

  for(var a = 0; a <=width; a =a + 50){
    plinkos.push(new Plinko(a, 75));
  }

  for(var a = 15; a <=width == 10; a =a + 50){
    plinkos.push(new Plinko(a, 175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var a = 0; a < divisions.length; a++){
    particles[a].display();
  }

  for(var k = 0; k < divisions.length; k++){
    particles[k].display();
  }

  ground.display();

  drawSprites();
}