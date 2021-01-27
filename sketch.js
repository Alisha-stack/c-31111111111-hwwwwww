const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles=[];
var particle;
var man;
var manImg;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame;
var thunder;

function preload(){
   
    }
function setup() {
  
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   manImg=loadImage("walking_1.png");
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
     thunder4 = loadImage("4.png"); 

 }

function draw() {
  background("black"); 
  Engine.update(engine); 
 
  if(frameCount%1===0){
    particles.push(new Particle(random(0,1200),2,2));
   
  }
 

  for(var j=0; j<particles.length;j++){
     particles[j].display();
  }
   image(manImg, 500,210, 180,200);

   rand = Math.round(random(1,4));
    if(frameCount%80===0)
    { 
      thunderCreatedFrame=frameCount;
       thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand)
        { 
          case 1: thunder.addImage(thunder1);
           break;
            case 2: thunder.addImage(thunder2);
             break;
              case 3: thunder.addImage(thunder3);
               break;
                case 4: thunder.addImage(thunder4);
                 break;
                  default:
                     break;
                     }
                     
                    }
                     if(thunderCreatedFrame + 10 ===frameCount && thunder)
                    {
                       thunder.destroy(); 
                    }
     drawSprites();              
}