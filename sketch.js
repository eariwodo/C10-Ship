
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png, ship-2.png,ship-3.png, ship-4.png");
spriteName.addImage(seaImg);
seaImg.velocityX=0.4
if(sea.x<0){
  sea.x = sea.width/2
}
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}