const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var count = 0;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [] ;
var  divisionHeight = 300;

var plinko,plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9;
var division;
var ground; 
var particle;

var score = 0;
var turn = 0;

var PLAY = 0;
var END = 1; 

var gameState = PLAY;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    division = new Divisions(k,height - divisionHeight/2,10,divisionHeight);
     divisions.push(division);
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(gameState === PLAY){
     text("500",20,500);
     text("500",105,500);
     text("500",190,500);
     text("500",270,500);
     text("100",350,500);
     text("100",430,500);
     text("100",510,500);
     text("200",590,500);
     text("200",670,500);
     text("200",750,500);
    if(particle != null){
      particle.display();
      if(particle.body.position.y > 760){
        
        if(particle.body.position.x < 300){
          score = score+500;
          particle = null;
          if(count >=5){
            gameState = END;
          }
        }
      }
    }
     if(particle != null){
      if(particle.body.position.y > 760){
        
        if(particle.body.position.x > 301 && particle.body.position.x < 600){
          score = score+100;
          particle = null;
          if(count >=5){
            gameState = END;
          }
        }
      }  
    }
    
     if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
          
          if(particle.body.position.x < 300){
            score = score+500;
            particle = null;
            if(count >=5){
              gameState = END;
            }
          }
        }
      
    
        if(particle.body.position.y > 760){
        if(particle.body.position.x > 601 && particle.body.position.x < 900){
          score = score+200;
          particle = null;
          if(count >=5){
            gameState = END;
          }
        }
      }
     }
     
   }
   if(gameState === END ){
    textSize(100)
    text("GAME",200,200);
    text("OVER",200,300)
   
   }
   ground.display();
   // if(frameCount%60===0){
     // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));         }
 
   //for (var j = 0; j < particles.length; j++) {
   
     // particles[j].display();
    //}
    for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }
 }
function mousePressed(){
  if(gameState !== END){
    count++;
    particle = new Particle(mouseX,10,10,10)
    
  }

}