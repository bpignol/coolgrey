//purple rain https://www.youtube.com/watch?v=KkyIDI6rQJI --------------------------------------------------------

var drops = [];
var backgroundImg;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-holder')
  backgroundImg = loadImage ("asset/plant.jpg");
  for (var i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  image(backgroundImg, 0, 0);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}