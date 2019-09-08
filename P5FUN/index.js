function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
}

function draw() {
  let bgColor = 255;
  let primaryColor = [0, 100, 100];
  let secondaryColor = [130, 200, 01];
  let tSize = 70;
  let shape = "ellipse";

  //Background
  if (mouseIsPressed) {
    fill(primaryColor);
  } else {
    fill(secondaryColor);
    shape = "square";
    background(bgColor);
  }

  let mY = mouseY;
  let mX = mouseX;

  switch (shape) {
    case "ellipse":
      ellipse(mX, mY, 100, 100);
      break;
    default:
      square(mX, mY, 100);
  }

  //Foreground
  let tOffX = 10;
  let tOffY = 20;
  let fr = frameRate();
  console.log(fr);
  if (mouseIsPressed) {
    fill(secondaryColor);
  } else {
    fill(primaryColor);
  }

  textSize(tSize);
  text(`Fr: ${fr}`, tOffX + mX, tOffY + mY, 1000, 1000);
}

function drawShape(name) {}
