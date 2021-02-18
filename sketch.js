var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	fairyVoice.play();

	fairy = createSprite(130, 450);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed();
  if (star.position.y > 420){
starBody = 	Bodies.circle(650 , 420 , 5 , {restitution:0.5, isStatic:false});
star.velocity.y = 0;
  }
  if (fairy.position.x > 510){
	fairyBody = Bodies.circle(130,450,5,{restitution:0.5, isStatic:false});
		fairy.velocity.x = 0;
	}
  drawSprites();
}
function keyPressed() {
	
    if (keyCode === LEFT_ARROW){
		fairy.velocity.x = fairy.velocity.x + -0.01;
		
	}
	if (keyCode === RIGHT_ARROW){
		fairy.velocity.x = fairy.velocity.x +  +0.01;
		
			}
	if (keyCode === DOWN_ARROW){
        star.velocity.y = 0.15;
	}
}
