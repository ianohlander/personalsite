let s=360;
let max=2;
let numIterations=40;
let x1off=0;
let y1off=1000;
let x2off=1000000;
let y2off=10000000000;
let ca=0;
let cb=0;
let zx=0;
let zy=0;
let counter1=0.02;
let counter2=0.0001;
let counter3=0.001;
let counter4=0.01;
let isdna=false;

function setup(){
    let mycanvas;

    let random=Math.random*10;
    if(random>5){
        isdna=true;
    }
    
    if(isdna){
        mycanvas=createCanvas(800,600, WEBGL);
    }
    else{
        mycanvas=createCanvas(s,s);
    }
    mycanvas.parent('mycanvas');
    
}


function draw(){
    pixelDensity(1);
    loadPixels();
    x1off+=counter1;
    y1off+=counter2;
    x2off+=counter3;
    y2off+=counter4;
    for(var x=0;x<width;x++){
        for(var y=0;y<height;y++){
            //zx=map(noise(x2off),0,1,-max,max);
            //zy=map(noise(y2off),0,1,-max,max);
            var a=map(x,0,width,-2,2);
            var b=map(y,0,height,-2,2);
            //var a=map(x,0,width,zx,zy);
            //var b=map(y,0,height,zx,zy);
            
            //console.log(noise(x));
            /*if(mouseX!=oldx){
                console.log(mouseX);
                oldx=mouseX;
            }
            if(mouseY!=oldy){
                console.log(mouseY);
                oldy=mouseY;
            }*/
            //ca=map(mouseX,0,width, -1,1);
            //cb=map(mouseY,0,height, -1,1);
            
            ca=map(noise(x1off),0,1, -1,1);
            cb=map(noise(x2off),0,4, -1,1);
            var n=0;
            var z=0;

            while(n<numIterations){
                var aa=a*a-b*b;
                var bb=2*a*b;

                a=aa+ca;
                b=bb+cb;

                if(a+b>16){
                    break;
                }
                n++;
            }
            
            var bright=map(n,0,numIterations,0,255);

            var pix=(x+(y*width))*4;
            pixels[pix+0]=bright;
            pixels[pix+1]=bright;
            pixels[pix+2]=bright;
            pixels[pix+3]=255;
        }
    }
    updatePixels();
}
