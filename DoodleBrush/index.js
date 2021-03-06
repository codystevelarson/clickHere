var fr = 100,
  frameChange = false,
  clearDrawing = false,
  bgColor = "#ffffff",
  primaryColor = 0,
  secondaryColor = "#dddddd",
  strokeColor = 255,
  strokeWidth = 1,
  tSize = 70,
  textVal = "",
  textColor = 0,
  tOffX = 1,
  tOffY = 10,
  shape = "square",
  shapeRadX = 100,
  shapeRadY = 100,
  shapeRoundness = 0,
  drawRdy = false;
var mySound;

function preload() {
  // soundFormats("mp3", "wav");
  // mySound = loadSound("file:///C:/Users/codys/Desktop/__DEV/clickHere/DoodleBrush/audio/strike strikes_2.wav");
}

function setup() {
  let parentDiv = document.getElementById("graphics-window");
  let gfxArea = createCanvas(parentDiv.offsetWidth, parentDiv.offsetHeight);
  gfxArea.parent("graphics-window");
  frameRate(fr);
  colorMode("RGBA");
  background(0, 0);
  // mySound.setVolume(0.1);
  // mySound.play();
}

function draw() {
  if (clearDrawing) {
    setup();
    clearDrawing = false;
  } else if (frameChange) {
    frameRate(fr);
    frameChange = false;
  }

  //Background
  let mY = mouseY;
  let mX = mouseX;
  if (mouseIsPressed && drawRdy) {
    stroke(strokeColor);
    strokeWeight(strokeWidth);
    fill(primaryColor);
    switch (shape) {
      case "ellipse":
        ellipse(mX, mY, shapeRadX, shapeRadY);
        break;
      case "square":
        rectMode(CENTER);

        square(mX, mY, shapeRadX);
        break;
      case "circle":
        circle(mX, mY, shapeRadX);
        break;
      case "rect":
        rectMode(CENTER);
        rect(mX, mY, shapeRadX, shapeRadY, shapeRoundness);
      default:
        break;
    }

    //Foreground
    fill(textColor);
    textSize(tSize);
    text(textVal, tOffX + mX, tOffY + mY);
  } else {
    //fill(secondaryColor);
    //background(bgColor);
  }
}

function clearCanvas(event) {
  clearDrawing = true;
}

function saveDoodle(val) {
  save(val);
}

function frameRateUpdate(event) {
  let val = inputVal(event);
  if (val > 60) val = 60;
  if (val < 1) val = 1;
  event.target.value = val;
  fr = parseInt(val);
  frameChange = true;
}

function drawReady(rdy) {
  drawRdy = rdy;
}

function drawingCheck() {
  if (!mouseIsPressed) {
    drawRdy = false;
  }
}

function bgColorUpdate(event) {
  let val = inputVal(event);
  bgColor = val;
  background(bgColor);
}

function primaryColorUpdate(event) {
  let val = inputVal(event);
  primaryColor = val;
}

function secondaryColorUpdate(event) {
  let val = inputVal(event);
  secondaryColor = val;
}

function strokeColorUpdate(event) {
  let val = inputVal(event);
  strokeColor = val;
}

function strokeWeightUpdate(event) {
  let val = inputVal(event);
  strokeWidth = val;
}

function shapeUpdate(event) {
  let val = inputVal(event);
  toggleShapeInputs(val);
  shape = val;
}

function shapeRadXUpdate(event) {
  let val = inputVal(event);
  shapeRadX = parseInt(val);
}

function shapeRadYUpdate(event) {
  let val = inputVal(event);
  shapeRadY = parseInt(val);
}

function shapeRoundnessUpdate(event) {
  let val = inputVal(event);
  shapeRoundness = val;
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
