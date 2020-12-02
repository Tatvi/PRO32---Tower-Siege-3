const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var score = 0;

function preload() {
  bgImage()
 }

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
  stand1 = new Ground(650,220,200,10)
  stand2 = new Ground(400,300,200,10)
  //tower1
  //level1
  block1 = new Blocks(328,275,34,40)
  block2 = new Blocks(364,275,34,40)
  block3 = new Blocks(400,275,34,40)
  block4 = new Blocks(436,275,34,40)
  block5 = new Blocks(472,275,34,40)
  //level2
  block6 = new Blocks(346,235,34,40)
  block7 = new Blocks(382,235,34,40)
  block8 = new Blocks(418,235,34,40)
  block9 = new Blocks(454,235,34,40)
  //level3
  block10 = new Blocks(364,195,34,40)
  block11 = new Blocks(400,195,34,40)
  block12 = new Blocks(436,195,34,40)
  //level4
  block13 = new Blocks(382,155,34,40)
  block14 = new Blocks(418,155,34,40)
  //level5
  block15 = new Blocks(400,115,34,40)
  //tower2
  //level1
  block16 = new Blocks(578,195,34,40)
  block17 = new Blocks(614,195,34,40)
  block18 = new Blocks(650,195,34,40)
  block19 = new Blocks(686,195,34,40)
  block20 = new Blocks(722,195,34,40)
  //level2
  block21 = new Blocks(596,155,34,40)
  block22 = new Blocks(632,155,34,40)
  block23 = new Blocks(668,155,34,40)
  block24 = new Blocks(704,155,34,40)
  //level3
  block25 = new Blocks(614,105,34,40)
  block26 = new Blocks(650,105,34,40)
  block27 = new Blocks(686,105,34,40)
  //level4
  block28 = new Blocks(632,75,34,40)
  block29 = new Blocks(668,75,34,40)
  //level5
  block30 = new Blocks(650,35,34,40)

  polygon = new Hexagon(120,250);
  elastic= new Attacher(polygon.body,{x:120, y:250});
}

function draw() {
  if (backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  elastic.display();
  textSize(17)
  fill(155,200,230)
  text("Drag the circle to adjust the pressure and release to hit the blocks",18,50)
  fill(222,111,000)
  text("Press 'Space' to get another chance to hit",450,350)
  fill("magenta")
  text("SCORE: "+ score, 50,30)
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 elastic.fly();
}

function keyPressed(){
  if(keyCode === 32){
    elastic.attach(polygon.body);
  }
}
async function bgImage(){
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var time2 = await time.json()
    
    var datetime = time2.datetime
    var hour= datetime.slice(11,13)

    if(hour>06 && hour<18){
        bg = ("daytimeImg.jpg")
    }else{
        bg = ("nighttimeImg.jpg")
    }
    backgroundImg = loadImage(bg);
  }