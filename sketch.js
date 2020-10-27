var bullet, wall;

var speed, weight, thickness;

var Deform, status, hasCollided;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 20);
  bullet.shapeColor = "white";

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));

  thickness = Math.round(random(22, 83));

  wall = createSprite(1500, 200, thickness, height/2);

  status = "N/A";
}

function draw() {
  
  bullet.velocityX = speed;
  
  

  background(0,0,0);
  drawSprites();
  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage>10) {

      wall.shapeColor = color(255, 0, 0); 
      status = "rejected";
    }

    if (damage<10){

      wall.shapeColor = color(0, 255, 0);
      status = "approved";

    }


  }



  fill("white");
  textSize(20);
  text("wall status: " + status, 800, 100);

}

 /*function deforming() {
  
  deform = 0.5 * weight * speed * speed / 22500;

  if (wall.x - car.x < (wall.width + car.width) / 2) {
    
    car.velocityX  = 0;
    
    if (deform > 180){
      bullet.shapeColor = color(255, 0, 0);
      status = "Lethal";

    }

    if (deform < 180 && deform > 100){
      bullet.shapeColor = color(230, 230, 0);
      status = "Average";

    }
    
    if (deform < 100){
      car.shapeColor = color(0, 255, 0);
      status = "Good";

    }

  }

}*/

function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x  + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {

    return true

  }

  return false;

}