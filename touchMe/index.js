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

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);
  circle(100, 100, 100);
}
