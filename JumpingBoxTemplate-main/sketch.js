var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var box ;
 var edges ;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     
    block1 = createSprite(100,580,200,40);
    block1.shapeColor=color(66, 135, 245);
    block2 = createSprite(300,580,200,40);
    block2.shapeColor=color(245, 66, 66);
    block3 = createSprite(500,580,200,40);
    block3.shapeColor=color(108, 245, 66);
    block4 = createSprite(700,580,200,40);
    block4.shapeColor=color(167, 66, 245);
    box =createSprite(random(20,750),520,40,40);
    box.velocityX = 3;
    box.velocityY = 3;
    box.shapeColor=color("white");
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   
   // bounceOff(box, block1)
    
    //create edgeSprite
 edges=createEdgeSprites();
box.bounceOff(edges);

if(block1.isTouching(box) && box.bounceOff(block1)){

    box.shapeColor=color(66, 135, 245);

}
if(block2.isTouching(box) && box.bounceOff(block2)){

    box.shapeColor=color(245, 66, 66);

}
if(block3.isTouching(box) && box.bounceOff(block3)){

    box.shapeColor=color(108, 245, 66);

}
if(block4.isTouching(box) && box.bounceOff(block4)){

    box.shapeColor=color(167, 66, 245);

}

drawSprites () ;
}