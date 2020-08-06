var bullet;
var wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 100, 30);
  bullet.shapeColor = "white";
  
  wall = createSprite (700,200,100,300);
  wall.shapeColor = (80,80,80);
  speed = random(40,68);

  weight = random(400,1500);
  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(180);
  bullet.velocityX = speed;


if (deformation > 180 && bullet.collide(wall)) {
  bullet.shapeColor = "red";
  bullet.velocityX = 0;
}
if (deformation < 180 && deformation >100 && bullet.collide(wall)) {
  bullet.shapeColor = "yellow";
  bullet.velocityX = 0;

}
if(deformation< 100 && bullet.collide(wall)) {
  bullet.shapeColor = "green";
  bullet.velocityX = 0;
}
  drawSprites();
}

