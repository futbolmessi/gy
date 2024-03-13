function preload() {
    mario_gameover=loadSound("gameover.wav");
    mario_jump=loadSound("jump.wav");  
    mario_coin=loadSound("coin.wav");  
    mario_kick=loadSound("kick.wav");  
    mario_die=loadSound("mariode.wav");
    world_start=loadSound("worlde_start.wav");
   setSprites();
   MarioAnimation()
   }
   function setup() {
   canvas=createCanvas(1212,345);
   canvas.parent("canvas"); 
   instializeInSetup(mario);
   video=createCapture(VIDEO);
   video.size(800,399) 
   video.parent("game_console");
   poseNet=ml5.poseNet(video, papopepo);
   poseNet.on("pose", la_volea_de_zidane);
   }
   function papopepo() {
    console.log("al fin cargo¡¡¡")   
   }
   
   function la_volea_de_zidane (resultados_captados) {
    if (resultados_captados.length>0) {
   console.log(resultados_captados);
   noseX=resultados_captados[0].pose.nose.x;
   noseY=resultados_captados[0].pose.nose.y;
    }   
   }
   function draw() {
game();
   }
   
                                           
