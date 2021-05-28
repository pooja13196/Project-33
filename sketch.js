const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var snowflake,snowflakeImg
var bgImg

function preload(){
  bg=loadImage("snow3.jpg");
  snowflakeImg = loadImage("snow4.webp");

}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg); 
  drawSprites();

  //engine = Engine.update();
  
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}