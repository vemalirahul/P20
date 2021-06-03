var tom, tomImg1, tomImg2
var jerry, jerryImg1, jerryImg2
var bgImg


function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("cat2.png, cat3.png")
    jerryImg1 = loadAnimation("images/mouse1.png")
    jerryImg2 = loadAnimation("mouse2.png, mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(8000,795);
    jerry = createSprite(4000,795); 

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){


    }


    drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }
}
