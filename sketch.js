var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var platform1, platform2, platform3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	textFont("Forte");
	textSize(25);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	P1Sprite = createSprite(300,610,20,100);
	P1Sprite.shapeColor = "red";
	P2Sprite = createSprite(400,650,200,20);
	P2Sprite.shapeColor = "red";
	P3Sprite = createSprite(500,610,20,100);
	P3Sprite.shapeColor = "red";

	platform1 = new Platform(300,610,20,100);
	platform2 = new Platform(400,635,200,20);
	platform3 = new Platform(500,610,20,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.47, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
	Engine.run(engine);
}


function draw(){
  
	rectMode(CENTER);
  	background(0);


 if(packageSprite.y >= 600){
 	  text("Safely landed",330,300);
 }

  
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y
  
  drawSprites();
}

function keyPressed(){

if (keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
}
else if (keyCode === RIGHT_ARROW){
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
}
else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
 }

}


