var Rectangle1;
var Rectangle2;
var Bull1;
var Bull2;
function setup() {
  createCanvas(800,400);
  Rectangle1 = createSprite(400,200,50,100);
  Rectangle1.shapeColor = "Green";
  Rectangle1.debug = true;
  Rectangle2 = createSprite(400,400,50,100);
  Rectangle2.shapeColor = "Red";
  Rectangle2.debug = true;
  Bull1 = createSprite(200,300,50,50);
  Bull1.shapeColor = "Orange";
  Bull1.debug = true;
  Bull1.velocityX = 5;
  Bull2 = createSprite(600,300,50,50);
  Bull2.shapeColor = "Pink";
  Bull2.debug = true;
  Bull2.velocityX = -5;

  
}

function draw() {
  background(0);  
  drawSprites();

  Rectangle2.y = mouseY;
  Rectangle2.x = mouseX;

  if(Rectangle2.x-Rectangle1.x<Rectangle2.width/2+Rectangle1.width/2 && Rectangle1.x-Rectangle2.x<Rectangle2.width/2+Rectangle1.width/2
    && Rectangle2.y-Rectangle1.y<Rectangle2.height/2+Rectangle1.height/2 && Rectangle1.y-Rectangle2.y<Rectangle2.height/2+Rectangle1.height/2 )
  {
 Rectangle1.shapeColor = "Blue";
 Rectangle2.shapeColor = "Yellow";

  } else{
  Rectangle1.shapeColor = "Green";
  Rectangle2.shapeColor = "Red";
  }

  if(Bull2.x-Bull1.x<Bull2.width/2+Bull1.width/2 && Bull1.x-Bull2.x<Bull1.width/2+Bull2.width/2){
  Bull1.velocityX = - (Bull1.velocityX);
  Bull2.velocityX = - (Bull2.velocityX);
  }

  if(Bull2.y-Bull1.y<Bull2.height/2+Bull1.height/2 && Bull1.y-Bull2.y<Bull1.height/2+Bull2.height/2){
    Bull1.velocityY = -(Bull1.velocityY);
    Bull2.velocityY = -(Bull2.velocityY);
    }
}