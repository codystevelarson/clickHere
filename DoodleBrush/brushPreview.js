function setup() {
  let parentDiv = document.getElementById("brush-preview");
  let gfxArea = createCanvas(100, 100);
  gfxArea.parent("brush-preview");
  frameRate(8);
  colorMode("RGBA");
  background(0, 0);
}

function draw() {
  //background
  background(backgroundColor);

  //Stroke
  stroke(strokeColor);
  strokeWeight(strokeWidth);

  //Shape
  let mX = 100,
    my = 100;
  fill(primaryColor);
  switch (shape) {
    case "ellipse":
      ellipse(mX, mY, shapeRadX, shapeRadY);
      break;
    case "square":
      square(mX, mY, shapeRadX);
      break;
    case "circle":
      circle(mX, mY, shapeRadX);
      break;
    case "rect":
      rect(mX, mY, shapeRadX, shapeRadY, shapeRoundness);
    default:
      break;
  }

  //Foreground
  fill(textColor);
  textSize(tSize);
  text(textVal, tOffX + mX, tOffY + mY);
}
