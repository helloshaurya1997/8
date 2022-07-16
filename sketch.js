var i1,response,response1,min,hr;
var i2,i3,i4;
var appState=0;
var load,loadGif;
function preload(){
i1=loadImage("i1.jpg");
i2=loadImage("i2.jpg");
i3=loadImage("i3.jpg");
i4=loadImage("i4.jpg");

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    loadGif=createImg("loadiii.gif");
    loadGif.position(windowWidth/2-200,windowHeight/2+50);
    loadGif.size(340,100);
}
function draw(){
if(appState==0){
getTime();
if(hr >= 00 && hr <=11){
    background(i2);
    textSize(60);
    fill("blue");
    text("Good Morning",windowWidth/2-210,windowHeight/2-160);
    text("Welcome to",windowWidth/2-340,windowHeight/2-90);
    fill("purple");
    stroke("black");
    strokeWeight(2);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-90);

    fill("red")
    text("Loading ...",windowWidth/2-150,windowHeight/2);

    console.log(load.x);
    setInterval(async()=>{
       appState=1},9000
    )
}
else if(hr >= 12 && hr <=16){
    background(i3);
    textSize(60);
    fill("yellow");
    text("Good Afternoon",windowWidth/2-230,windowHeight/2-160);
    text("Welcome to",windowWidth/2-340,windowHeight/2-90);
    fill("red");
    stroke("black");
    strokeWeight(2);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-90);
    
    fill("red")
    text("Loading ...",windowWidth/2-150,windowHeight/2);

    setInterval(async()=>{
        appState=1},9000
     )

}
if(hr >= 17 && hr <=19){
    background(i1);
    textSize(60);
    fill("yellow");
    text("Good Evening",windowWidth/2-210,windowHeight/2-160);
    text("Welcome to",windowWidth/2-340,windowHeight/2-90);
    fill("red");
    stroke("blue");
    strokeWeight(2.5);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-90);

    fill("red")
    text("Loading ...",windowWidth/2-150,windowHeight/2);

    setInterval(async()=>{
        appState=1},9000
     )
    
}
if(hr >= 20 && hr <=23){
    background(i4);
    textSize(60);
    fill("yellow");
    text("Good Evening",windowWidth/2-210,windowHeight/2-160);
    text("Welcome to",windowWidth/2-340,windowHeight/2-90);
    fill("red");
    stroke("blue");
    strokeWeight(2.5);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-90);

    fill("red")
    text("Loading ...",windowWidth/2-150,windowHeight/2);

    setInterval(async()=>{
        appState=1},9000
     )

}
}
if(appState==1){
    background("red");
    loadGif.hide();
}

}
async function getTime(){
    response=await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
    response1=await response.json();
    dateTime=response1.datetime;
    min=dateTime.slice(11,16);
    hr=dateTime.slice(11,13);
    console.log(hr); 
}