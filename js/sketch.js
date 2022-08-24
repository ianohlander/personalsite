let time=0;
let radius=100;
let x;
let y;
let z;
let numpoints=1000;
let t=.05;
let zmult=50;
let spiral1=[];
let spiral2=[];
let rotateangle=0;
let camera;
let flipped=true;
let count=0;
let zoom=5;
let panVal=-5;
let spaceBase=20;
let baseRadius=25;


function setup(){
    //noLoop();
    let mycanvas=createCanvas(800,600, WEBGL);
    mycanvas.parent('canvashome');
    
    generateSpiral1();
    generateSpiral2();
    camera=createEasyCam();
    //console.log(camera);
}

function generateSpiral1(){
    time=0;
    spiral1=[];
    for(let i=0;i<numpoints;i++){
        x=radius*cos(time);
        y=radius*sin(time);
        z=time*zmult;
        time+=t;
        let p=createVector(x,y,z);
        spiral1.push(p);

    }
}

function generateSpiral2(){
    time=0;
    let offset=PI+5;
    spiral2=[];
    for(let i=0;i<numpoints;i++){
        x=radius*cos(time+offset);
        y=radius*sin(time+offset);
        z=time*zmult;
        time+=t;
        let  p=createVector(x,y,z);
        spiral2.push(p);
    }
    console.log(spiral2.length);
}

function draw(){
    background(36, 35, 38);
    translate(-200, -200);
    noFill();

    //rotate camera
    rotateangle+=.01;

    rotateX(rotateangle);
    rotateY(rotateangle);
    rotateZ(rotateangle);

     //move camera
     camera.zoom(zoom);
     //camera.panY(panVal);
     count++;
     if(count % 200==0){
         zoom=zoom*(-1);
         panVal=panVal * (-1);
         camera.zoom(zoom);
     }

    //draw 1st helix
    
    stroke(52, 30, 138);
    strokeWeight(15);
    beginShape()
    for(let i=0;i<spiral1.length;i++){
        vertex(spiral1[i].x,spiral1[i].y,spiral1[i].z);
    }
    endShape();

    

    //draw 2nd helix
    stroke(52, 30, 138);
    //strokeWeight(3);
    beginShape()
    for(let i=0;i<spiral2.length;i++){
        vertex(spiral2[i].x,spiral2[i].y,spiral2[i].z);
    }
    endShape();
    
    //set up light source
    directionalLight(101, 157, 247, 1, 1, -1);
    pointLight(115, 56, 166, -1, 1, 1);
    //lights();

    //draw bases
    noStroke();
    fill(200,0,255);
    specularMaterial(0,0,0,200);
    //ambientMaterial(255);
    //normalMaterial();
    for(let i=0;i<spiral1.length;i++){
        if(i%spaceBase==0){
            push();
            translate(spiral1[i].x,spiral1[i].y,spiral1[i].z);
            sphere(baseRadius);
            pop();
        }
    }

    //draw 2nd base
    for(let i=0;i<spiral2.length;i++){
        if(i%spaceBase==0){
            push();
            translate(spiral2[i].x,spiral2[i].y,spiral2[i].z);
            sphere(baseRadius);
            pop();
        }
    }

    //connect bases
    strokeWeight(5);
    stroke(56, 104, 166);
    for(let i=0;i<spiral2.length;i++){
        if(i%spaceBase==0){
            line(spiral1[i].x,spiral1[i].y,spiral1[i].z,spiral2[i].x,spiral2[i].y,spiral2[i].z);
            //pop();
        }
    }
    
}
