var pc, pcImage;
var Back;
var obstaclesGroup, meteorImg;
var npc, npcImage;
var PLAY = 0;
var PLAY2 = 1
var PLAY2 = 2
var PLAY3 = 3
var PLAY4 = 4
var PLAY5 = 5
var END = 6;
var NONE = 7
var gameState = PLAY;

score = 0


function preload(){
    backgroundImage = loadImage("Game.jpg")
    pcImage = loadImage("spaceShip.png")
    meteorImg = loadImage("meteor.png")
    npcImage = loadImage("npc.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    Back = createSprite(displayWidth/2,displayHeight/2)
    Back.addImage(backgroundImage)
    Back.velocityY = 5
  
    Back.scale = 1.5;
    pc = createSprite(690, 290, 50, 50)
    pc.addImage(pcImage)
    npc = createSprite(690, 490, 50, 50)
    npc.addImage(npcImage)
    pc.scale = 0.2
    npc.scale = 0.7
    obstaclesGroup = new Group();
    npc.velocityX = 5
    
}

function draw(){
    background("white")
    if(gameState === PLAY, PLAY2, PLAY3, PLAY4, PLAY5){
        score = score + Math.round(getFrameRate()/60);
    }    
    if(gameState === NONE){
        text("Press N to move to next level", displayWidth/2, displayHeight/2)
    }
    if(gameState === PLAY){
            Level1();
           }
        if(score === 1000){
            score = 10
            gameState = NONE
           if(keyDown("N") && gameState === NONE){
           gameState = PLAY2}
       }
       if(gameState === PLAY2){
           Level2();
       }
        if(score === 2000){
            score = 20
            gameState = NONE
        if(keyDown("N") && gameState === NONE){
           gameState = PLAY3}
       }
       if(gameState === PLAY3){
           Level3();
       }
        if(score === 3000){
            score = 30
            gameState = NONE
        if(keyDown("N") && gameState === NONE){
           gameState = PLAY4}
       }
       if(gameState === PLAY4){
           Level4();
       }
        if(score === 4000){
            score = 40
            gameState = NONE
        if(keyDown("N") && gameState === NONE){
           gameState = PLAY5}
       }
    }



function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(600,0,10,40);
    var obstacle2 = createSprite(100,165,10,40);
    var obstacle3 = createSprite(displayWidth-50,165,10,40);
    obstacle.addImage(meteorImg)
    obstacle2.addImage(meteorImg)
    obstacle3.addImage(meteorImg)
    obstacle.x = Math.round(random(500,1000));
    obstacle2.y = Math.round(random(100,300));
    obstacle3.y = Math.round(random(100,300));
    //obstacle.debug = true;
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.velocityY = 8
    obstacle2.velocityX = 5
    obstacle3.velocityX = -5
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle2.scale = 0.2;
    obstacle3.scale = 0.2;
    obstacle.lifetime = 250;
    obstacle2.lifetime = 240;
    obstacle3.lifetime = 250;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle, obstacle2, obstacle3);
  }
}

function spawnObstacles2() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 10
      obstacle2.velocityX = 7
      obstacle3.velocityX = -7
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 240;
      obstacle3.lifetime = 250;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle, obstacle2, obstacle3);
    }
  }

  function spawnObstacles3() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 12
      obstacle2.velocityX = 9
      obstacle3.velocityX = -9
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 240;
      obstacle3.lifetime = 250;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle, obstacle2, obstacle3);
    }
  }

  function spawnObstacles4() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 14
      obstacle2.velocityX = 11
      obstacle3.velocityX = -11
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 240;
      obstacle3.lifetime = 250;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle, obstacle2, obstacle3);
    }
  }

  function spawnObstacles5() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 16
      obstacle2.velocityX = 13
      obstacle3.velocityX = -13
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 240;
      obstacle3.lifetime = 250;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle, obstacle2, obstacle3);
    }
  }


function spawnLasers(){
if(frameCount % 60 === 0){
var lasers =  createSprite(npc.x, npc.y-30, 5, 45)
lasers.shapeColor = "red"
lasers.depth = npc.depth;
npc.depth = npc.depth + 1;
lasers.velocityY = -5}
}

function spawnLasers2(){
    if(frameCount % 10 === 0 && keyDown("E")){
    var lasers =  createSprite(pc.x, pc.y, 5, 45)
    lasers.shapeColor = "lightblue"
    lasers.velocityY = -5}
    }

function Level1(){
    pc.debug = true;
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
   if (gameState === END){
    text("Game END", displayWidth/2, displayHeight/2)
   }
    
}

function Level2(){
        score = score + Math.round(getFrameRate()/60);
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles2()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
    if(gameState === END){
    text("Game END", displayWidth/2, displayHeight/2)
   }
    
}

function Level3(){
    score = score + Math.round(getFrameRate()/60);
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles3()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
    if(gameState === END){
    text("Game END", displayWidth/2, displayHeight/2)
   }
}

function Level4(){
        score = score + Math.round(getFrameRate()/60);
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles4()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
    if(gameState === END){
    text("Game END", displayWidth/2, displayHeight/2)
   }
    
}

function Level5(){
        score = score + Math.round(getFrameRate()/60);
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles5()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
    if(gameState === END){
    text("Game END", displayWidth/2, displayHeight/2)
   }
    
}








