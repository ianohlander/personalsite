let numIterations=50;
//let mandelbrot;

function setup(){
    let mycanvas=createCanvas(360,360);
    mycanvas.parent('mandelbrot');
    //generateMandelbrot();
    
}

/*function generateMandelbrot(){
    let mandelbrot=[][];
    for(var x=0;x<width;x++){
        for(var y=0;y<height;y++){
            var a=map(x,0,width,-2,2);
            var b=map(y,0,height,-2,2);

            var ca=a;
            var cb=b;
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
            
            var bright=map(n,0,100,0,255);
            mandelbrot[x][y]=bright;
        }
    }
}*/

function draw(){
    pixelDensity(1);
    loadPixels();
    //var ca=-0.70176;
    //var cb=-0.3842;
    for(var x=0;x<width;x++){
        for(var y=0;y<height;y++){
            var a=map(x,0,width,-2,2);
            var b=map(y,0,height,-2,2);

            //var ca=a;
            //var cb=b;
            var ca=map(mouseX,0,width, -1,1);
            var cb=map(mouseY,0,height, -1,1);
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
            
            var bright=map(n,0,100,0,255);

            var pix=(x+(y*width))*4;
            pixels[pix+0]=bright;
            pixels[pix+1]=bright;
            pixels[pix+2]=bright;
            pixels[pix+3]=255;
        }
    }
    updatePixels();
}
