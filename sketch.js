var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if (Rect1(movingRect,fixedRect)){
 movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
 }
 else{movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";}
  drawSprites();
}

function Rect1 (R1,R2){
if (R1.x - R2.x < R2.width/2 + R1.width/2
  && R2.x - R1.x < R2.width/2 + R1.width/2
  && R1.y - R2.y < R2.height/2 +R1.height/2
  && R2.y - R1.y < R2.height/2 +R1.height/2) {
return true;
}
else {
return false
}
}