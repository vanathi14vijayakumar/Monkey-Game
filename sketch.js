
var monkey , monkey_running,ground;
var banana ,bananaImage, rock, obstacleImage
var FoodGroup, rockGroup,survivalTime;
var score = 0,i;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 

}



function setup() {
  createCanvas(450,300)
  monkey = createSprite(60,230,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  
  ground = createSprite(300,260,600,10)
    
}

function draw() {
  background("lightgreen");
  
  createrock();
  createBanana();
  monkey.collide(ground);
  //console.log(monkey.y)
  
  if(keyDown("space") && monkey.y>223){
   monkey.velocityY = -9 
   
  }
             
  monkey.velocityY = monkey.velocityY + 0.5               
  
  ground.velocityX = -3
  ground.x = ground.width/2;
  
  i = Math.round(random(100,200))
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("purple");
  text("Score : "+score,310,50)
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,120,50)
}

function createrock(){
 if(frameCount % 150  == 0){
  rock = createSprite( 610,237,20,20)
  rock.addImage("rock",obstacleImage);
  rock.scale = 0.1
  rock.velocityX = -4 
  rock.lifetime = 400 
 }
}

function createBanana(){
  if(frameCount % 80 ==0){
    banana = createSprite( 610,i  ,20,20)
    banana.addImage("banab",bananaImage)
    banana.scale = 0.1
    banana.velocityX = -4
    banana.lifetime = 400
   }
   }
   

