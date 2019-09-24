function copyright(show) {
  let speed = "slow";
  let ease = "swing";
  if (show) {
    $("#APP").fadeOut(speed, ease);
    setTimeout(function(speed, ease) {
      $("#MM").fadeIn(speed, ease);
    }, 1000);
  } else {
    $("#MM").fadeOut(speed, ease);
    setTimeout(function(speed, ease) {
      $("#APP").fadeIn(speed, ease);
    }, 1000);
  }
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("APP");
}

function draw() {
  background(0);
  fill(255);
  circle(100, 100, 100);
}
