//--------------------ENTORNS INETRACTIUS---------------------------
// -----------------------BEN AND RAMON-----------------------------



//---->CODE<------


//FIRST WE CREATE SOME VARIABLES
//THE c VARIABLE IS AN ARRAY WHERE WE WILL PUT THE OBJECTS THAT WE WILL CREATE IN THE SETUP

let c = [];

//POSITION X AND POSITION Y ARE AN ARRAY THAT STORES THE X AND Y POSITIONS OF THE CUBES TAHT WE WILL CREATE

let positionsX = [100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400, 100, 200, 300, 400, 500, 500, 500, 500];
let positionsY = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 400, 400, 400, 400, 100, 200, 300, 400];
let index = 0;
//AT THE BEGINING, THE WINDOW WILL BE BLACK, SO WE SPECIFY TNHAT ONLY IF BEGIN IS EQUAL TO TRUE, THE ANIMATION WILL START

let begin = false;
let counterPressed=0;
let finished=true;
function preload(){   
    Myfont = loadFont('NovaSquare.ttf');}   
function setup_2() {
   // createCanvas(720, 500);
    background(255, 227, 150);
        //WE CHANGE THE FRAME RATE TO MAKE THINGS SMOOTHER AND SLOW DOWN A LITTLE BIT

    frameRate(30);

    

    for (let i = 0; i < 20; i++) {
                //WE CREATE 21 OBJECTS OF TYPE CUBE AND ASSIGN THEM THE POSX, POSY, LIIMITPOS, W,H, INITPOSX,INITPOSY

        let cubeObj;
        
        cubeObj = new cube();

        cubeObj.col1 = random(0, 255);
        cubeObj.col2 = random(0, 255);
        cubeObj.col3 = random(0, 255);
        cubeObj.posX = positionsX[index];
        cubeObj.posY = positionsY[index];
        cubeObj.w = random(10, 50);
        cubeObj.h = cubeObj.w;
        cubeObj.initPositionX = cubeObj.posX;
        cubeObj.initPositionY = cubeObj.posY;
        c.push(cubeObj);
        cubeObj.limitPos=random(20,50);
        index++;
     
    }
}
function draw_2() {
        //IF WE CLICKED BEGIN, THEN THE BEGIN VARIABLE WILL BE TRUE AND THE ANIMATION WILL START

    if (begin) {
        for (let j = 0; j < c.length; j++) {
            // IF WE HAVEN'T PRESSED THE BUTTON YET, THE SCREEN WILL BE BLACK, SO THE VARIABLE BEGIN WILL BE FALSE
            c[j].show();
            c[j].update();
            c[j].checkState();
            c[j].makeRectFront();
        }
    }
    if (!begin) {
        background(0);
        // IF WE HAVEN'T PRESSED THE BUTTON YET, THE SCREEN WILL BE BLACK, SO THE VARIABLE BEGIN WILL BE FALSE
    }
    textFont(Myfont);
    textSize(62);
    fill(0);
    text('BAUHAUS', 30 ,530);

    textSize(36);
    fill(0);
    text('AUSSTELLUNG', 330 ,510);

    textSize(31);
    fill(0);
    text('JULI, AUGUST,SETEMBER', 32 ,566);

    textSize(58);
    fill(0);
    text('1923', 445 ,565);
}

function mousePressed() {
    //IF IT IS THE FIRST TIME WE CLIKC THE BUTTON, THE BEGIN WILL BE TRUE AND THE ANIMATION WILL START
    if(counterPressed==0)
    {
        begin = true;
        background(255, 227, 160);
    }
if(counterPressed>=1){
    //IF THE COUNTER IS GREATER OR EQUAL TO 1, WE WILL CLEAR ALL 
    background(255, 227, 160);
    for(let j=0;j<c.length;j++){
        c[j].posX=c[j].initPositionX;
        c[j].posY=c[j].initPositionY;
        c[j].col1=random(0,255);
        c[j].col2=random(0,255);
        c[j].col3=random(0,255);
        if(c[j].finsihed){
            c[j].finsihed=false;

          
        }
    }
}
counterPressed++;

}