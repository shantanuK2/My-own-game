
var backgroundimg1,backgroundimg,platform1,velX,velY
function preload(){
  backgroundimg1 = loadImage("Images/background1.jpg")
  backgroundimg2 = loadImage("Images/background2.jpg")
  backgroundimg3 = loadImage("Images/background3.jpg")
  playerimg = loadImage("images/player animations/player.png")
  coinimg = loadImage("images/coin.jpg")
  playerrun = loadAnimation("images/player animations/player1.png","images/player animations/player2.png","images/player animations/player3.png","images/player animations/player4.png","images/player animations/player5.png","images/player animations/player6.png","images/player animations/player7.png","images/player animations/player8.png")
platformImage = loadImage("images/download.png")
exitImg = loadImage("images/end.png")
ladderImage = loadImage("images/ladder.png")
exitImg2 = loadImage("images/gate.png")
treasureImg = loadImage("images/treasure.png")
  }
 
function setup() {
  createCanvas(1200,500)
  score = 0
  level = 1

  player = createSprite(130,270,20,20)


  player.addImage("running",playerimg)
  player.scale = 0.5
  player.setCollider("circle",0,0,40)
  //lvl1
  platform1 = createSprite(150,300,50,20)
  platform1.scale = 0.255
  platform1.addImage(platformImage)
  platform2 = createSprite(300,150,50,20)
  platform2.scale = 0.255
  platform2.addImage(platformImage)

  platform3 = createSprite(340,330,70,20)
  platform3.addImage(platformImage)
  platform3.scale = 0.255
  platform4 = createSprite(400,230,40,20)
  platform4.addImage(platformImage)
  platform4.scale = 0.255
   platform5 = createSprite(470,100,56,20)
   platform5.addImage(platformImage)
   platform5.scale = 0.255
   platform6 = createSprite(800,200,65,20)
   platform6.addImage(platformImage)
   platform6.scale = 0.255
   platform7 = createSprite(1000,300,45,20)
   platform7.addImage(platformImage)
   platform7.scale = 0.255
   platform8 = createSprite(1100,100,45,20)
   platform8.addImage(platformImage)
   platform8.scale = 0.255

   
  coin1 = createSprite(300,120,50,50)
  coin1.addImage(coinimg)
  coin1.scale = 0.25
  coin2 = createSprite(1100,50,50,50)
  coin2.addImage(coinimg)
  coin2.scale = 0.25
exit1 = createSprite(1000,270,45,20)
exit1.scale = 0.5
exit1.addImage(exitImg)
//lvlend
//lvl2
platform1A = createSprite(150,300,50,20)
platform1A.scale = 0.255
  platform1A.addImage(platformImage)
  platform2A = createSprite(250,550,350,20)
platform2A.scale = 0.255
  platform2A.addImage(platformImage)

  platform3A = createSprite(550,5000,200,20)
platform3A.scale = 0.255
  platform3A.addImage(platformImage)
  platform4A = createSprite(750,200,200,20)
platform4A.scale = 0.255
  platform4A.addImage(platformImage)
  platform5A = createSprite(1000,100,80,370)
platform5A.scale = 0.3
  platform5A.addImage(ladderImage)
  platform6A = createSprite(1100,180,80,370)
  platform6A.scale = 0.255
    platform6A.addImage(platformImage)
  coinA1 = createSprite(400,300,50,50)
  coinA1.addImage(coinimg)
  coinA1.scale = 0.25
  coinA2 = createSprite(750,150,200,20)
  coinA2.addImage(coinimg)
  coinA2.scale = 0.25
  exit2 = createSprite(1100,140,80,360)
  exit2.addImage(exitImg2)
  exit2.scale = 0.5
  endground = createSprite(625,350,2000,20)
treasure = createSprite(825,370,50,50)
treasure.addImage(treasureImg)
treasure.scale = 0.5  

  platforms1 = createGroup()
  platforms1.add(platform1)
  platforms1.add(platform2)
  platforms1.add(platform3)
  platforms1.add(platform4)
  platforms1.add(platform5)
  platforms1.add(platform6)
  platforms1.add(platform7)
  platforms1.add(platform8)
  platforms1.add(platform1A)
  platforms1.add(platform2A)
  platforms1.add(platform3A)
  platforms1.add(platform4A)
  platforms1.add(platform5A)
  platforms1.add(platform6A)

  


  coins1 = createGroup()
coins1.add(coin1)
coins1.add(coin2)
coins1.add(coinA1)


  
  velX = 0
velY = 0
x = 0
win = 0
}

setInterval(function(){
velY = velY+1
},100)


  

setInterval(function(){
  if(velX<=0){
  velX= velX+0.1
  }
  },50)

  setInterval(function(){
    if(velX>=0){
    velX= velX-0.1
    }
    },50)

    function hide(name){
      name.x = name.x +10000
    }

    function lvlclear(str) {
      if(str == 0){
       hide(treasure); hide(endground);hide(platform2A);hide(platform1A);hide(platform3A);hide(platform4A);hide(platform5A);hide(platform6A);hide(coinA1);hide(coinA2);hide(exit2);
      }
      if(str ==1){
hide(platform1);hide(platform2);hide(platform3);
hide(platform4);hide(platform5);
hide(platform6);hide(platform7);hide(platform8);
platform2A.x = 400;platform2A.y = 350;platform1A.x = 150;
platform1A.y = 300;platform3A.x = 550;platform3A.y = 270;
platform4A.x =750;platform4A.y = 200;platform5A.x =1000;platform5A.y =100;platform6A.x = 1100;platform6A.y =190;
coinA1.x=400;coinA1.y =300;coinA2.x =750;coinA2.y=150;exit2.x =1100;exit2.y =140
resetPos()
hide(exit1)
level = str+1
      }
      if(str == 2){
        hide(endground);hide(platform2A);hide(platform1A);hide(platform3A);hide(platform4A);hide(platform5A);hide(platform6A);hide(coinA1);hide(coinA2);hide(exit2);
        endground.x = 600;endground.y = 440
        resetPos()
        treasure.x = 825 ;treasure.y =370
level = str+1
      }
}

function show(name){
  name.x = name.x -10000
}



function resetPos(){
  player.x = 130
  player.y = 270
  velX = 0.4
velY = 0.4
}

function draw() {
  if(level ==1 ){
    backgroundimg = backgroundimg1
  }else if(level == 2){
    backgroundimg = backgroundimg2
  }else{
    backgroundimg = backgroundimg3
  }

  background(backgroundimg)
if(player.y>500){
  if(!level == 3){
  resetPos()
  }
}
if(keyDown("x")){
  lvlclear(1)
  lvlclear(2)
}
if(player.isTouching(treasure)){
  treasure.destroy()
win = 1
}
console.log(platform2A.x)

player.x = player.x + velX
player.y = player.y+velY
player.depth = exit1.depth+1

if(keyDown("UP_ARROW")) {
  if(player.isTouching(platforms1)||player.isTouching(endground)){
      velY = 0
      velY = velY-10
  }
}
if(player.isTouching(coin1)) {
coin1.destroy()
score = score +1 
}
if(player.x<-25 || player.x>1225){
  resetPos()
  }
if(player.isTouching(coinA1)) {
  coinA1.destroy()
  score = score +1 
  }

  if(player.isTouching(coinA2)) {
    coinA2.destroy()
    score = score +1 
    }

if(player.isTouching(coin2)) {
  coin2.destroy()
  score = score +1 
  }
endground.visible = false
  if(score <2 ){
    if(x ==0){
      lvlclear(0)
      x=1
    }
  }
player.depth = treasure.depth+1
  if(player.isTouching(exit1)) {
    if(score == 2 && level == 1) {
    lvlclear(1)
    
    }
    }
    if(player.isTouching(exit2)){
    if(score == 4 && level == 2){
      lvlclear(2)
    }
  }
    

if(velX<0) {
  player.addAnimation("running",playerrun)
}else{
  player.addImage(playerimg)
}

if(keyDown("RIGHT_ARROW")) {
  velX = velX+0.4
}


if(keyDown("LEFT_ARROW")) {
  velX = velX-0.4

}

if(velY>15){
  velY = 15
}
if(velY<-10){
  velY = -10
}

player.collide(endground)
player.collide(platforms1)
drawSprites()
fill("white")
textSize(30)
text("Score:" + score,100,50)
if(level == 3){
textSize(50)

if(win == 1){
  text("Congratulations! You have won!",220,100)
}
}
}
