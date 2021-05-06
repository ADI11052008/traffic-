var car ,wall ,speed ,weight

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,500)

  car=createSprite(100,200,20,20)
  car.velocityX=speed
  car.shapeColor="white"

  wall=createSprite(795,240,10,200)
  wall.shapeColor="grey"

}

function draw() {
  background(0);

  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var Deformation=0.5*weight*speed*speed/22500
    if(Deformation>180){
      car.shapeColor="red"
    }
    if(Deformation<181&&Deformation>80){
      car.shapeColor="orange"
    }
    if(Deformation<81){
      car.shapeColor="green"
    }
  }
    
  drawSprites();
}