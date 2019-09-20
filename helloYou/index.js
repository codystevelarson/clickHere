let self = this;
let capture = null;
let red = 0;
let green = 75;
let blue = 85;
var x = 320;
var y = 240;
let tweaking = false;
var errorTextX = 1;

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
    p.frameRate(12);
    let img = capture;
    if (capture.elt.srcObject == null) {
      let r = Math.floor(Math.random() * Math.floor(255));
      let g = Math.floor(Math.random() * Math.floor(255));
      let b = Math.floor(Math.random() * Math.floor(255));
      let colorsVal = parseInt(red) + parseInt(green) + parseInt(blue);
      let sat = colorsVal < 10 || colorsVal > 760;
      if (sat) {
        p.background(r, g, b);
      } else {
        p.background(r);
      }

      let y = 20;
      let x = window.errorTextX;
      p.fill(255);
      p.textSize(8 * (x % 6));
      for (let i = 1; i < x * 2; i++) {
        let text = "...";
        if (i % 2 == 1) {
          text = "CONNECTING";
        } else if (i % 2 == 0) {
          text = "WEBCAM";
          for (let j = 0; j < (i % 100) + 1; j++) {
            text += ".";
          }
        }
        p.text(text, x * 10, y * i);
      }
      window.errorTextX++;
      if (window.errorTextX > 20) {
        window.errorTextX = 0;
      }
    } else {
      p.image(img, 0, 0, window.x, window.y);
    }
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
  let cam = new p5(camCreator, "container" + i);
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
