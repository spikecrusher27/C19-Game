var fixedRect, movingRect;
var object1;
var object2;
var object3;
var object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite (50, 200, 50, 50)
  object2 = createSprite (300, 300, 50, 50)
  object3 = createSprite (500, 700, 50, 50)
  object4 = createSprite (200, 600, 50, 50)
  object1.shapeColor = "purple"
  object2.shapeColor = "yellow"
  object3.shapeColor = "brown"
  object4.shapeColor = "blue"
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,object4)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true 
}
else {
  return false
}


}