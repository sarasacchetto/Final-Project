var microfono;

var cattura;

var input;

var opacity = 0;

var opacityco =0;

            var opacitywebcam=250;
            var video;
            var videoScale=10;

function preload(){
    
    faccia=loadImage("brain/faceMOD.png");
    
    cervello=loadImage("brain/CervelloneutroDEF.png");
    
    mylegenda=loadImage("brain/legendaDEFDEF.png");
    
    sensi=loadImage("brain/sensesDEF.png");
    
    funzioniMotorieVol=loadImage("brain/voluntaryMotorFUnctionsDEF.png");
    
    udito=loadImage("brain/hearingDEF.png");
    
    comprensioneLinguistica=loadImage("brain/languageComprehensionDEF.png");
    
    parola=loadImage("brain/wordsDEF.png");
    
    visione=loadImage("brain/visionDEF.png");
    
    movimentiOculari=loadImage("brain/eyeMovementsDEF.png");
    
    funzioniMentali=loadImage("brain/higherFunctionsDEF.png");
    
    coordinazione=loadImage("brain/coordinationDEF.png");
    
    
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    
    microfono=new p5.AudioIn();
    microfono.start();
    
    video=createCapture(VIDEO);
        //video.size(64,48);
    video.hide();
    
    angleMode(DEGREES);
    
    //input= createInput();
    
    setShakeThreshold(20);
    frameRate(3);
    
    
}


function draw() {
    
    //microfono
    
    var volume= microfono.getLevel();
    console.log(volume);
    
    //sfondo
    background(10);
    
    //finestra 
    var larghezza= width;
    var altezza= height;
    var margineX= width*0.06;
    var margineY= height*0.03;
    
     push();
    //translate(-larghezza/7, -altezza*0.02);
        noFill();
        stroke('white');
        
    //griglia
        strokeWeight(5);
        rect(margineX/2,margineY,larghezza-margineX,altezza+margineY*14,6);
        line(margineX/2,margineY*7,larghezza-margineX/2,margineY*7);
        line(larghezza*4/5,margineY, larghezza*4/5,margineY*7);
        
    //burger menù
        strokeWeight(2);
        line(larghezza*4/5+margineX/1.5, margineY+margineY*2, larghezza-margineX*1.1,margineY+margineY*2);
        line(larghezza*4/5+margineX/1.5, margineY+margineY*3, larghezza-margineX*1.1,margineY+margineY*3);
        line(larghezza*4/5+margineX/1.5, margineY+margineY*4, larghezza-margineX*1.1,margineY+margineY*4);
        noStroke();
    //area touch
        ellipse(larghezza*4.44/5,margineY+margineY*3, margineX*2.4);
    pop();
    
        
    //titolo
    textFont('Share Tech Mono');
    textSize(margineX*1.35);
    textAlign(CENTER);
    fill('white');
    text('BRAIN SIMULATOR', larghezza*2/5, margineY*5);
    
    
    push();
    
    //faccia contenitore
    imageMode(CENTER);
    translate(0, altezza*0.5);
    image(faccia, larghezza/2,altezza/2, larghezza-margineX*2,altezza-margineY);
    
    
    
    translate(larghezza/7, altezza*0.02);
    scale(0.78, 0.70);
    
    //casella di testo 
    //input.position(larghezza/3, margineY*12);
    
    
    var opacityfunzioniMotorieVol=0;
    var opacitySensi=0;
    var opacityUdito=0;
    var opacityComprensioneLinguistica=0;
    var opacityparola=0;
    var opacityVisione=0;
    var opacityMovimentiOculari=0;
    var opacityFunzioniMentali=0;
    var neutro=255;
    
    
    
        //tint(255, opacityfunzioniMotorieVol);
            //image(funzioniMotorieVol,larghezza/2,altezza/2, larghezza,altezza);
        //tint(255, opacitySensi);
            //image(sensi,larghezza/2,altezza/2, larghezza,altezza);
        //tint(255, opacityUdito);
            //image(udito,larghezza/2,altezza/2, 700,700);
        //tint(255, opacityComprensioneLinguistica);
            //image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        //tint(255, opacityparola);
            //image(parola,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacityVisione);
            image(visione,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacityMovimentiOculari);
            image(movimentiOculari,larghezza/2,altezza/2, larghezza,altezza);
     
    noTint();
        
        //image(cattura,0,0,100,100);
    
    //udito con microfono
    if(volume>0.1) {
            image(udito,larghezza/2,altezza/2, larghezza,altezza);
            //image(sensi,larghezza/2,altezza/2, larghezza,altezza);
    } 
    
            /*
            //parola e comprensione linguistica con tastiera
            if (keyIsPressed === true) {
                    image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
                    image(parola,larghezza/2,altezza/2, larghezza,altezza);
            } 
            */
    //funzioni motori evolontarie con shake
    push()
    tint(255, opacity);
    image(funzioniMotorieVol,larghezza/2,altezza/2, larghezza,altezza);
    pop()
    
    //coordinazione con rotation
    push()
    tint(255, opacityco);
    image(coordinazione,larghezza/2,altezza/2, larghezza,altezza);
    pop()
    
    
    
    //image(visione,larghezza/2,altezza/2, larghezza,altezza);
    
    //immagine sensi e mov oculari
    image(sensi,larghezza/2,altezza/2, larghezza,altezza);
    image(movimentiOculari,larghezza/2,altezza/2,larghezza,altezza);
    
    
    //sfera area touch
        //var diametroellisse=larghezza/5;
        if(dist(larghezza/4,altezza/1.3,touchX,touchY)< larghezza/7){
            //noFill();
            //tint(255,opacityFunzioniMentali);
           image(funzioniMentali,larghezza/2,altezza/2,larghezza,altezza);
            }
       /* else{
            //fill('red')
            tint(255,255);
            };*/
    //noFill();
    //ellipse(larghezza/6,altezza/2.5,larghezza/5,larghezza/5);
    
    //VISIONE CON WEBCAM
        push()
                tint(255, opacitywebcam);
                image(visione,larghezza/2,altezza/2, larghezza,altezza);

                video.loadPixels();
                //loadPixels();
                var y=0;
                var x=0;
                var index = (x+y*video.width)*4;
                var r=video.pixels[index+0];
                var g=video.pixels[index+1];
                var b=video.pixels[index+2];
                
                if (r<30 && g<30 && b<30){
                    opacitywebcam=0;
                    image(visione,larghezza/2,altezza/2, larghezza,altezza);
                } else { opacitywebcam=250;}
            pop()
    
    
    //cervello neutro
    image(cervello,larghezza/2,altezza/2, larghezza,altezza);

   
    
    //parola e comprenzione linguistica touch lettere
    textFont('Share Tech Mono');
    //textSize(30);
    //textAlign(CENTER);
    fill('white');
    
    text('A', larghezza/2-margineX, -altezza/20);
    //fill('red');
    //ellipse(larghezza/2-margineX, -altezza/20,10,10);
                                                                      
    text('N', larghezza*2/10, -altezza/20);
                                        
    text('X', larghezza*3/10, -altezza/3.5); 
                                        
    text('A', larghezza*1/9, -altezza/5);
                                       
     text('B', 0, -altezza/3.6);
                                        
     text('R', larghezza*20/40, -altezza/3.3);
    
     text('G', larghezza*3.5/10, -altezza/7);
    
                                     
 //fill('red');
    //rect(0,0,10,10);
    
    //A
      if(dist(larghezza/2,margineY*15,touchX,touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza); 
      }
        
    //N
    
      if(dist(larghezza/3.3,altezza/2.2, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }
    
    //X
      if(dist(larghezza/2.8,altezza/3.5, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }
    
    //A
      if(dist(larghezza/4.2,altezza/2.6, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }
    
    
    //B
      if(dist(larghezza/6.4,altezza/3.1, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }
    
    
    //R
      if(dist(larghezza/1.8,altezza/3.7, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }
    
     //G NON VAAAAAAAAAA
   /* ellipse(larghezza/3,-altezza/5.2,10);
      if(dist(larghezza/3,-altezza/5.2, touchX, touchY)< 20){
        image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        image(parola,larghezza/2,altezza/2, larghezza,altezza);
    }*/
    
    
    
    //touch burger menù
    if(dist(larghezza*4.44/5,margineY+margineY*3,touchX,touchY)< margineX*2){
        image(mylegenda, larghezza/2.15, altezza/2.25, larghezza*1.15, altezza*1.75);
        
    }
    
  
    pop();
    
   /* 
   //non vanno le ASSOCIAZIONI!!  
    push();
    for(var i=0; i<touches.length; i++){
            var tocco=touches[i];
        fill('red');
        ellipse(tocco.x,tocco.y,10);
        
        var primodito=dist(larghezza/2,margineY*15,tocco.x,tocco.y);
    var secondodito=dist(larghezza/4.2,altezza/2.6,tocco.x,tocco.y);
     if(primodito<20 && secondodito<20) {
            image(coordinazione,0,0, larghezza,altezza);
     }
    }
    
    
      pop(); */
    
    
    //finestra che si riscala
    if(width>height) {
        width=altezza/1.6;} 
    else{height=larghezza;}
    
 
 
    
}

//shake
function deviceShaken() {

opacity = opacity + 250;

//value = value + 250;
//if (value > 255) {
//value = 0; }
   if(opacity>255){
        opacity=0;
    } 
    //else{opacity=255}
                                        
}
 
//rotationY
function deviceTurned() {

  if (turnAxis == 'Z'){
      
      opacityco = opacityco + 250;
      if(opacityco>255){
        opacityco=0;
      } 
   // image(coordinazione,larghezza/2,altezza/2, larghezza,altezza);
    }
  }

//finestra che si riscala
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

