const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var thunder1, thunder2;
var umbrella;

var engine, world;

var drop = [];

function preload(){
    thunder1 = loadImage("lighting1.jpeg");
    thunder2 = loadImage("lighting2.jpeg");
    
}

function setup(){
    engine = Engine.create(); 
    world = engine.world; 
    createCanvas(400,700);

    umbrella = new Umbrella(200,570);

    if(frameCount % 150 === 0){
        for(var i=0;i<100;i++){
            drop.push(new Drops(random(0,400),random(0,400)));
            
        }

    }

}

function draw(){
    background(0);

    Engine.update(engine);

    var num = Math.round(random(1,2));

    if(frameCount % 80 === 0){
        thunder = createSprite(random(10,360),random(10,360));
        
        if(num === 1){
            thunder.addImage(thunder1);
        }
        if(num === 2){
            thunder.addImage(thunder1);
        }

        thunder.scale = random(0.3,0.7);

        thunder.lifetime = 30;
    }

    drawSprites();

    umbrella.display();

    for(var i=0;i<100;i++){
        drop[i].display();
        drop[i].updateY();
        
    }

}   
