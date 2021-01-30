var canvas;
var music;
var surf,surf2,surf3,surf4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
      surf=createSprite(100,580,180,20);
      surf.shapeColor=("pink");

      surf2=createSprite(300,580,180,20);
      surf2.shapeColor=("yellow");

      surf3=createSprite(500,580,180,20);
      surf3.shapeColor=("red");
      
      surf4=createSprite(700,580,180,20);
      surf4.shapeColor=("blue");
      
    //create box sprite and give velocity
       ball=createSprite(random(20,750));
       ball.scale=0.3
       ball.velocity.x=10;
       ball.velocity.y=9;
       ball.shapeColor=("white");
}

function draw() {
    background("black");
    //create edgeSprite
   edges=createEdgeSprites();
    ball.bounceOff(edges); 
   // music.play();

    //add condition to check if box touching surface and make it box
          
          if(surf2.isTouching(ball)){
            ball.shapeColor= ("yellow");
            ball.velocityX=0;
            ball.velocityY=0;
            music.stop();

         }
         if(surf.isTouching(ball)&& ball.bounceOff(surf)){
            ball.shapeColor=("pink");

         }
         if(surf4.isTouching(ball)&& ball.bounceOff(surf4)){
            ball.shapeColor=("blue");

         }

         if(surf3.isTouching(ball)&& ball.bounceOff(surf3)){
            ball.shapeColor=("red");
             music.play();

         }

    drawSprites();
   
}
