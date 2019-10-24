let width = 900,
  height = 600,
  scale = 25,
  fr = 60;

let data = [[0, 0], [70, 23], [75, 50], [150, 95], [600, 43], [700, 250]];
let data2 = [
  [0, 0],
  [60, 200],
  [75, 500],
  [150, 35],
  [600, 3],
  [700, 99],
  [800, 450]
];
function setup() {
  let canvas = createCanvas(width, height);
  canvas.parent("APP");
  frameRate(fr);
}

function draw() {
  //border
  stroke(0);
  strokeWeight(4);
  fill(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);

  //grid
  strokeWeight(1);
  stroke(0, 100, 255);

  //vert lines
  for (let h = 0; h < width; h += scale) {
    line(h + scale, 0, h + scale, height);
  }

  //horz lines
  for (let w = 0; w < width; w += scale) {
    line(0, w + scale, width, w + scale);
  }

  if (mouseIsPressed) {
    circle(mouseX, mouseY, 50);
  }

  //data
  strokeWeight(3);
  stroke(255, 0, 0);
  for (let d = 1; d < data.length; d++) {
    line(
      data[d - 1][0],
      height - data[d - 1][1],
      data[d][0],
      height - data[d][1]
    );
  }

  //data 2
  strokeWeight(4);
  stroke(0, 255, 0);
  for (let d = 1; d < data2.length; d++) {
    line(
      data2[d - 1][0],
      height - data2[d - 1][1],
      data2[d][0],
      height - data2[d][1]
    );
  }
}
