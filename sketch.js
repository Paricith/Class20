var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(500, 200, 50, 50);
  movingRect.shapeColor="red";

  //movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2
  //__450____ -400===25+25
  //50===50
}

function draw() {
  background("cyan"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
 
  drawSprites();
}