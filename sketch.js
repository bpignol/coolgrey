//purple rain https://www.youtube.com/watch?v=KkyIDI6rQJI --------------------------------------------------------

var drops = [];

function setup() {
  createCanvas(1261, 427);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}