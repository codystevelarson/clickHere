let self = this;
let capture = null;
var showCameras = false;
let cams = [];
let red = 0;
let green = 75;
let blue = 85;
var x = 320;
var y = 240;
let tweaking = false;
var errorTextX = 1;
var dotCounter = 0;
var dotRecord = 0;
let shape = "circle";

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
    if (!window.showCameras) {
      return;
    }
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
    p.smooth();

    c = p.color(red, green, blue);
    if (!p.mouseIsPressed) {
      p.background(c);
      if (window.dotCounter > window.dotRecord) {
        window.dotRecord = window.dotCounter;
        let rec = $("#count-record");
        rec[0].innerHTML = "Record: " + window.dotRecord;
      }
      window.dotCounter = 0;
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
    if (shape == "square") {
      p.rectMode(p.CENTER);
      p.square(p.mouseX, p.mouseY, 40);
    } else if (shape == "circle") {
      p.circle(p.mouseX, p.mouseY, 40);
    }
    if (!tweaking) {
      window.dotCounter++;
    }
    if (p.mouseIsPressed && tweaking) {
      p.background(c);

      p.image(capture, p.mouseX, p.mouseY, self.x, self.y);
    }
    let counter = $("#counter");
    counter[0].innerHTML = window.dotCounter;
  };

  p.windowResized = function() {
    let bg = getBgX();
    let bgX = bg[0].clientWidth + 50;
    let bgY = bg[0].clientHeight + 50;
    p.canvasSize(bgX, bgY);
  };
};

//On Created
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

function updateBgColor(event, color) {
  let val = inputVal(event);
  if (color == "red") {
    red = val;
  }
  if (color == "green") {
    green = val;
  }
  if (color == "blue") {
    blue = val;
  }
  setSliderColor(color);
  updateTheme(bgColorAvg());
}

function bgColorAvg() {
  let colorVal = 0;
  colorVal = parseInt(red) + parseInt(green) + parseInt(blue);
  return colorVal / 3;
}

function updateBG(event) {
  let val = inputVal(event);
  let colors = val.split("-");
  console.log(colors);
  red = colors[0];
  green = colors[1];
  blue = colors[2];
  setSliders();
  let colorVal = 0;
  for (let i = 0; i < colors.length; i++) {
    colorVal += parseInt(colors[i]);
  }
  colorVal = colorVal / colors.length;
  updateTheme(colorVal);
}

function updateTheme(val) {
  let controlColor = "white";
  let shadow = 0;
  if (val > 127) {
    val = 255;
    shadow = "rgba(" + 0 + "," + 0 + "," + 0 + ", 1)";
    theme = "white";
    controlColor = "black";
  } else if (val < 128) {
    val = 0;
    shadow = "rgba(" + 255 + "," + 255 + "," + 255 + ", 1)";
    theme = "black";
    controlColor = "white";
  }
  {
  }
  $(".controls").css("color", controlColor);
  $("#bg-controls").css("color", controlColor);
  $(".shape-button").css("color", controlColor);
  $(".shape-button").css("border-color", controlColor);
}

function updateShape(event) {
  let val = inputVal(event);
  shape = val;
}

function toggleTweaking(val) {
  tweaking = val;
}

function toggleCameras(val) {
  showCameras = val;

  if (showCameras) {
    $(".camera-off").hide();
    $(".camera-on").show();
    $("#camSection").show();
    if (capture != null && capture.elt.srcObject == null) {
      capture = null;
    }
    for (let c = 0; c < cams.length; c++) {
      cams[c].remove();
    }
    for (let i = 1; i < 13; i++) {
      $("#container" + i).empty();
      let cam = new p5(camCreator, "container" + i);
      cams.push(cam);
    }
  } else {
    $(".camera-on").hide();
    $(".camera-off").show();
    $("#camSection").hide();
    capture = null;
  }
}

function copyright(show) {
  let speed = "slow";
  let ease = "swing";
  if (show) {
    $("#MM").fadeIn(speed, ease);
    $("#APP").fadeOut(speed, ease);
  } else {
    $("#MM").fadeOut(speed, ease);
    $("#APP").fadeIn(speed, ease);
  }
}
