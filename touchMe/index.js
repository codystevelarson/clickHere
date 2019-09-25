var s1, s2;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("APP");
  s1 = new Touchpad(100, 100, "square", 100);
  s2 = new Touchpad(100, 100, "circle", 100);
}

function draw() {
  background(0);
  s1.update();
  s2.update();
  s1.display();
  s2.display();
  if (s1.intersects(s2)) {
    background("rgba(100, 50, 200, .5)");
    fill(255, 255, 0);
    text("SKOL", width / 2, height / 2);
  }
}
