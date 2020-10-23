
 var fixedRect, movingRect;
 var rect1, rect2;

var leftRect, rightRect;
var topRect, bottomRect;

function setup() {
  createCanvas(1200,800);

  leftRect = createSprite(100,400,50,80);
  leftRect.shapeColor = "orange";

  rightRect =  createSprite(650,400,80,50);
  rightRect.shapeColor = "orange";

  topRect = createSprite(400,100,50,80);
  topRect.shapeColor = "orange";

  bottomRect =  createSprite(400,650,80,50);
  bottomRect.shapeColor = "orange";
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  rect1 = createSprite(200,400,50,80);
  rect1.shapeColor = "orange";

  rect2 = createSprite(500,400,50,80);
  rect2.shapeColor = "yellow";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  leftRect.velocityX = 5;
  rightRect.velocityX = -5;

  topRect.velocityY= 5;
  bottomRect.velocityY= -5;
}

function draw() {
  background(0,0,0);  

  
  bounceOff(leftRect,rightRect);

  bounceOff(topRect,bottomRect);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect,rect1)){
    rect1.shapeColor = "teal";
  }else{
    rect1.shapeColor = "orange";
  }

  if(isTouching(movingRect,rect2)){// if(false)
    rect2.shapeColor="teal";
  }else{
    rect2.shapeColor = "yellow";
  }
  
  drawSprites();
}

