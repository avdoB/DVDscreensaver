let x;
let y;
let xspeed;
let yspeed;
let dvd;

function preload(){
dvd=loadImage('logo.png');
}

function setup() {
    createCanvas(800,600);
    x= 200;
    y= 100;
    xspeed= 4;
    yspeed=4;

}
 function draw(){
     background(0);
    image(dvd,x,y);
   
   x=x+xspeed;
   y=y+yspeed;
 
   //corner bounce
   if(x+ dvd.width >= width || x<=0){
     xspeed=xspeed*-1;
 }
      if(y + dvd.height >= height || y<=0){
     yspeed=yspeed*-1;
 }
 }