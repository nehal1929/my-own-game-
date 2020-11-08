var spaceship,spaceshipImage;
var backGround,backgroundImage;
var stone,stoneImage;
var score;
function preload(){
  
spaceshipImage=loadImage("unnamed.png")
backgroundImage= loadImage("bg.png") 
//stoneImage=loadImage("stone.jpg")  
  
}

function setup(){
createCanvas(600,600)  

backGround= createSprite(300,300);
backGround.addImage("building",backgroundImage);
backGround.velocityY=1;  

spaceship = createSprite(300,300);
spaceship.addImage("galaxy",spaceshipImage);
spaceship.scale=0.3

}

function draw(){
if (backGround.y > 400){
backGround.y = backGround.width/2;
} 
    
drawSprites();
}

