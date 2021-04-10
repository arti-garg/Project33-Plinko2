var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var turn=0;
var divisionHeight=300;
var score =0;
gameState= "Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 console.log (mouseX)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (particle != null){
    particle.display();

    if (particle.body.position.y> 760){
      if (particle.body.position.x<300){
        score= score+500;
        turn ++;
        particle= null;
          if (turn >=5){
            gameState= "end";
          }
      }else if (particle.body.position.x>=300 && particle.body.position.x < 500){
        score= score+100;
        turn ++;
        particle= null;
          if (turn >=5){
            gameState= "end";
          }
      }else if (particle.body.position.x>=500 && particle.body.position.x <=800){
        score= score+200;
        turn ++;
        particle= null;
          if (turn >=5){
            gameState= "end";
          }
      }

    }
   }
   if (turn>=5){GT()};

    }

    function GT(){
      
        push();
        textSize(85);
        strokeWeight(3)
        stroke("White");
        fill("yellow");
        text("GAME OVER", 160, 480)
        pop();
      
    }
function mousePressed(){

 if (gameState=== "Play"){ 
  particle = new Particle( mouseX, 10, 10, 10);
 
 }

}