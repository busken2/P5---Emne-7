var five = ['Sommerfuglende', 'Et kan gøre det', 'en gammel dame', 'lyden af vand', 'Det er mørk tideligt'];
var seven = ['hvorfor bruge mange ord', 'en frø hopper i vand', 'Det er mørk tideligt nu okay?', 'jeg elsker julen men ikke det mørke', 'julen bringer lys og gaver', 'jeg elsker julen men ikke det mørke' ,'julen bringer lys og gaver'];

var randomFive = five[Math.floor(Math.random() * five.length)];
var randomSeven = seven [Math.floor(Math.random() * seven.length)];
var randomFive2 = five[Math.floor(Math.random() * five.length)];

// var myFont ;
// function preload(){
//   myFont = loadFont ("Ranga-Regular.ttf");
// }


function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(200,0,0);
//   textFont(myFont);
  fill(255);
  textSize(30);
  text(randomFive, 20, 100);
  text(randomSeven, 20, 150);
  text(randomFive2, 20,200);
}
