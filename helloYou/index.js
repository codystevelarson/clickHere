function setup() {
  createCanvas(390, 240);

  for (let i = 0; i < 10; i++) {
    capture = createCapture(VIDEO);
    capture.size(320, 240);
  }
  //capture = createCapture(VIDEO);
  //capture.size(320, 240);
  //capture.hide();
}

function draw() {
  //background(255);
  //image(capture, 0, 0, 320, 480);
}
