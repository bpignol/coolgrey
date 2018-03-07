//purple rain https://www.youtube.com/watch?v=KkyIDI6rQJI --------------------------------------------------------

function Drop() {
  this.x = random(width);
  this.y = random(-200, -10);
  this.yspeed = 1;

  this.fall = function() {
    this.y = this.y + this.yspeed;
  }

  this.show = function() {
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y+10);
  }
}