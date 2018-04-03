//purple rain https://www.youtube.com/watch?v=KkyIDI6rQJI --------------------------------------------------------
// function to know when you should show the rain 


var drops = [];
var backgroundImg;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-holder'); // in order to have the canvas starting a the top
  backgroundImg = loadImage ("asset/light.jpg");
}

function draw() {
  // if localhost works :
  tint(255,40);
  image(backgroundImg, 0, 0);
 
  // if localhost is kaputt then open your index page : 
  // background(0,40);
  
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    if (drops[i].y > height) {
      drops.splice(i,1);
      // console.log(drops.length);
    } 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// click function
document.getElementById('purpleRainBtn').addEventListener('click',function(){
  console.log();
    for (var i = 0; i < 200; i++) {
    drops.push(new Drop());
  }
}); 