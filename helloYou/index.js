let self = this;
let capture = null;
let red = 255;
let green = 170;
let blue = 140;
let x = 320;
let y = 240;
let tweaking = false;

//CAM CREATOR
const camCreator = p => {
  p.preload = function() {
    if (capture == null) {
      capture = p.createCapture(p.VIDEO);
      capture.size(x, y);
      capture.hide();
    }
  };

  p.setup = function() {
    p.createCanvas(x, y);
    capture.hide();
  };

  p.draw = function() {
    p.image(capture, 0, 0, self.x, self.y);
  };
};

//BG CANVAS
const color = p => {
  let x = self.x,
    y = self.y;
  p.setup = function() {
    let bg = getBgX();
    let bgX = bg[0].clientWidth + 50;
    let bgY = bg[0].clientHeight + 50;

    let canvas = p.createCanvas(bgX, bgY);
    canvas.class("bgCanvas");
    self.setSliders();
  };
  p.draw = function() {
    c = p.color(red, green, blue);
    if (!p.mouseIsPressed) {
      p.background(c);
    }
    let b = p.brightness(c);
    let light = b > 50 ? false : true;
    let fill = 255;
    let stroke = 0;
    if (light) {
      fill = 0;
      stroke = 255;
    }
    p.fill(fill);
    p.strokeWeight(4);
    p.stroke(stroke);
    p.circle(p.mouseX, p.mouseY, 40);
    if (p.mouseIsPressed && tweaking) {
      //p.image(capture, p.mouseX, p.mouseY, self.x, self.y);
    }
  };
};

//On Created
for (let i = 1; i < 13; i++) {
  new p5(camCreator, "container" + i);
}
let c = new p5(color, "bgContainer");

//UTILS
///////////////////////////
function inputVal(event) {
  if (typeof event == "undefined") {
    console.log("No event");
    return;
  }
  let val = event.target.value;
  console.log(val);
  return val;
}

function getBgX() {
  return document.getElementsByTagName("body");
}

function setSliders() {
  document.getElementById("redInput").value = red;
  document.getElementById("greenInput").value = green;
  document.getElementById("blueInput").value = blue;

  document.getElementById("redInput").style.background = "rgb(" + red + ",0,0)";
  document.getElementById("greenInput").style.background =
    "rgb(0," + green + ",0)";
  document.getElementById("blueInput").style.background =
    "rgb(0,0," + blue + ")";
}

function setSliderColor(color) {
  let id, rgb;
  switch (color) {
    case "red":
      id = "redInput";
      rgb = "rgb(" + red + ",0,0)";
      break;
    case "green":
      id = "greenInput";
      rgb = "rgb(0," + green + ",0)";
      break;
    case "blue":
      id = "blueInput";
      rgb = "rgb(0,0," + blue + ")";
      break;
    default:
      return;
  }
  document.getElementById(id).style.background = rgb;
}

function updateRed(event) {
  let val = inputVal(event);
  red = val;
  setSliderColor("red");
}

function updateGreen(event) {
  let val = inputVal(event);
  green = val;
  setSliderColor("green");
}

function updateBlue(event) {
  let val = inputVal(event);
  blue = val;
  setSliderColor("blue");
}

function toggleTweaking(val) {
  tweaking = val;
}
