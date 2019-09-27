var t;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("APP");
  t = new Ticker();
  smooth();
  frameRate(12);
}

function draw() {
  t.update();
  t.display();
}
