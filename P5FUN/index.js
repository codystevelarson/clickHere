var fr = 100;

var bgColor = 255,
  primaryColor = [0, 100, 100],
  secondaryColor = [130, 200, 01],
  tSize = 70,
  textVal = "hello",
  textColor = 0,
  tOffX = 1,
  tOffY = 10,
  shape = "square",
  shapeRadX = 100,
  shapeRadY = 100;

function setup() {
  let gfxArea = createCanvas(500, 500);
  gfxArea.parent("graphics-window");
  frameRate(fr);
}

function draw() {
  //Background
  //fill(primaryColor);
  let mY = mouseY;
  let mX = mouseX;
  if (mouseIsPressed) {
    fill(primaryColor);
    switch (shape) {
      case "ellipse":
        ellipse(mX, mY, shapeRadX, shapeRadY);
        break;
      case "square":
        square(mX, mY, shapeRadX);
        break;
      default:
        return;
    }

    //Foreground
    fill(textColor);
    textSize(tSize);
    //text = `Fr: ${fr}`;
    text(textVal, tOffX + mX, tOffY + mY);
  } else {
    //fill(secondaryColor);
    //background(bgColor);
  }
}

function bgColorUpdate(event) {
  let val = inputVal(event);
  bgColor = val;
}

function primaryColorUpdate(event) {
  let val = inputVal(event);
  primaryColor = val;
}

function secondaryColorUpdate(event) {
  let val = inputVal(event);
  secondaryColor = val;
}

function textValUpdate(event) {
  let val = inputVal(event);
  textVal = val;
}

function textOffXUpdate(event) {
  let val = inputVal(event);
  tOffX = parseInt(val);
}

function textOffYUpdate(event) {
  let val = inputVal(event);
  tOffY = parseInt(val);
}

function textColorUpdate(event) {
  let val = inputVal(event);
  textColor = val;
}
