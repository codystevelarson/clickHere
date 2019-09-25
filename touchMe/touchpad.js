function Touchpad(
  x,
  y,
  shape,
  r,
  color = 255,
  stroke = false,
  strokeWeight = 1,
  strokeColor = 0
) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.shape = shape;
  this.color = color;
  this.stroke = stroke;
  this.strokeWeight = strokeWeight;
  this.strokeColor = strokeColor;

  this.display = function() {
    if (stroke) {
      strokeWeight(this.strokeWeight);
      stroke(this.strokeColor);
    }
    fill(this.color);
    let s = this.shapePicker();
  };

  this.update = function() {};

  this.intersects = function(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };

  this.shapePicker = function() {
    let s;
    switch (shape) {
      case "square":
        rectMode(CENTER);
        this.x = mouseX;
        this.y = mouseY;
        s = square(this.x, this.y, this.r * 2);
        break;
      case "circle":
        s = circle(100, 100, this.r * 2);
        break;
      default:
        s = point(this.x, this.y, this.r);
        break;
    }
    return s;
  };
}
