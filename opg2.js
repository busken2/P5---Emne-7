var data=[];//Point coordinates
var a=1;//x-factor of fitting line
var b=0;//Changshu b fitting straight line
/**
 * Initial function
 */
function setup() {//The initial method of p5.js
    createCanvas(400,400);
    background(0,3,3);
}
/**
 * Linear regression of primary function (coefficient term and constant term)
 */
function linearRegression(){
    var xsum=0;//Multiple sum of x
    var ysum=0;//Multiple sum of y
    for(var i=0;i<data.length;i++){
        xsum+=data[i].x;
        ysum+=data[i].y;
    }
    var xmean=xsum/data.length;//Average of x
    var ymean=ysum/data.length;//The average of y
    var num=0;//Polynomial sum [(mean value of x-x) * (mean value of y-y]]
    var den=0;//Polynomial sum [(mean of x-x) * (mean of x-x)]
    for(var i=0;i<data.length;i++){
        var x=data[i].x;
        var y=data[i].y;
        num+=(x-xmean)*(y-ymean);
        den+=(x-xmean)*(x-xmean);
    }
    a=num/den;//Coefficient a of y=ax+b
    b=ymean-a*xmean;//Coefficient b of y=ax+b
}
/**
 * Mouse click
 */
function mousePressed(){
    var x=map(mouseX,0,width,0,100);
    var y=map(mouseY,0,height,100,0);
    var point = createVector(x,y);
    data.push(point);
}
/**
 * Draw a straight line
 */
function drawLine(){
    var x1=0;//If you get (x1,y1),(x2,y2), you can draw a straight line
    var x2=100;
    var y1=a*x1+b;
    var y2=a*x2+b;
    x1=map(x1,0,100,0,width);
    x2=map(x2,0,100,0,width);
    y1=map(y1,0,100,height,0);
    y2=map(y2,0,100,height,0);
    stroke(255);
    line(x1,y1,x2,y2);
}
/**
 * Painting (points and lines)
 */
function draw() {
    background(50);
    for(var i=0;i<data.length;i++){
        var x=map(data[i].x,0,100,0,width);
        var y=map(data[i].y,0,100,height,0);
        fill(255,0,0);//Set fill color
        ellipse(x,y,10,10);//Ellipse
    }
    if(data.length>1){
        linearRegression();
        drawLine();
    }
}