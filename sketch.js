const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var avere, pedra, chao, launcherObject;
var manga1,manga2,manga3,manga4,manga5,manga6,manga7,manga8,manga9,manga10,manga11,manga12;
var launchingForce=100;
var world,mlk;

function preload(){
	mlk=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	pedra=new Pedra(235,420,30); 

	manga1=new Manga(1100,100,30);
  manga2=new Manga(1170,130,30);
	manga3=new Manga(1010,140,30);
	manga4=new Manga(1000,70,30);
	manga5=new Manga(1100,70,30);
	manga6=new Manga(1000,230,30);
	manga7=new Manga(1900,230,25);
	manga8=new Manga(1140,150,25);
	manga9=new Manga(1100,230,25);
	manga10=new Manga(1200,200,25);
	manga11=new Manga(1120,50,25);
	manga12=new Manga(900,160,25);

	avere=new Arvore(1050,580);
	chao=new Piso(width/2,600,width,20);
	launcherObject=new launcher(pedra.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Pressione ESPAÇO para tentar novamente",50 ,50);
  image(mlk ,200,360,200,300);
  //Engine.update(engine)
  

  avere.display();
  pedra.display();
  manga1.display();
  manga2.display();
  manga3.display();
  manga4.display();
  manga6.display();
  manga7.display();
  manga8.display();
  manga9.display();
  manga10.display();
  manga11.display();
  manga12.display();
  pedra.display();

  chao.display();
  launcherObject.display();
  detectollision(pedra,manga1);
  detectollision(pedra,manga2);
  detectollision(pedra,manga3);
  detectollision(pedra,manga4);
  detectollision(pedra,manga5);
  detectollision(pedra,manga6);
  detectollision(pedra,manga7);
  detectollision(pedra,manga8);
  detectollision(pedra,manga9);
  detectollision(pedra,manga10);
  detectollision(pedra,manga11);
  detectollision(pedra,manga12);
}

function mouseDragged()
{
	Matter.Body.setPosition(pedra.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(pedra.x,pedra.y,manga1.x,manga1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(pedra.body, {x:235, y:420}) 
	  launcherObject.attach(pedra.body);
	}
  }

  function detectollision(lpedra,lmanga){
	/*var collision = Matter.SAT.collides(lpedra,lmanga);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmanga,false);	
	}*/
  mangaBodyPosition=lmanga.body.position
  pedraBodyPosition=lpedra.body.position
  
  var distance=dist(pedraBodyPosition.x, pedraBodyPosition.y, mangaBodyPosition.x, mangaBodyPosition.y)
  //console.log(distance)
 // console.log(lmanga.r+lpedra.r)
  	if(distance<=lmanga.r+lpedra.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmanga.body,false);
    }

  }