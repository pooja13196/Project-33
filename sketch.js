const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundImg;
var snowImg;
var snow;
var snowflake;
var snowflakeImg;

function preload(){
backgroundImg=loadImage("snow3.jpg");
snow=loadImage("snow4.webp");
snowflake=loadImage("snow5.webp")

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

    } 

function draw() {
  background(backgroundImg);
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
    snowflake=createSprite(random(0,900),(0,50,50));
    snowflake.velocityX=-2
    snowflake.velocityY=4;
    snowflake.addImage(snowflakeImg);
    snowflake.scale=0.1;
  }
}