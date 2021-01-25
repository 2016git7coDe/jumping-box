var canvas;
var box;
var surface1,surface2,surface3,surface4;
var music;
var wall1,wall2,wall3,wall4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1=createSprite(100,500,180,20);
    surface1.shapeColor="red";
    surface1.debug=true;
    surface2=createSprite(300,500,180,20);
    surface2.shapeColor="green";
    surface3=createSprite(500,500,180,20);
    surface3.shapeColor="yellow";
    surface4=createSprite(700,500,180,20);
    surface4.shapeColor="blue";

    box=createSprite(random(20,750),300,20,20);
    box.shapeColor=255;
    box.velocityY=-4;
    box.velocityX=4;

    wall1=createSprite(0,300,2,height);
    wall1.visible=false;
    wall2=createSprite(800,300,2,height);
    wall3=createSprite(400,0,width,2);
    wall4=createSprite(400,600,width,2);
}

function draw() {
    background(0);
    createEdgeSprites();

    if(wall1.isTouching(box) && box.bounceOff(wall1)){
        bounceOff(box,wall1);
    }
    if(wall2.isTouching(box) && box.bounceOff(wall2)){
    bounceOff(box,wall2);
}
if(wall3.isTouching(box) && box.bounceOff(wall3)){
    bounceOff(box,wall3);
}
if(wall4.isTouching(box) && box.bounceOff(wall4)){
    bounceOff(box,wall4);
}
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="red";
    bounceOff(box,surface1);
    
}

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="green";
        bounceOff(box,surface2);
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
    }
    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="blue";
        bounceOff(box,surface4);
    }

    strokeWeight(6);
    stroke("blue");
    fill("purple");
    textSize(50)
    textFont("Jokerman");
    text("JUMPING BOX",200,100);
    drawSprites();
}

    
  