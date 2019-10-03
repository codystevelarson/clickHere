function Ticker() {
  this.h = 0;
  this.m = 0;
  this.s = 0;
  this.date = new Date();

  this.display = function() {
    //origin
    translate(width / 2, height / 2);
    angleMode(DEGREES);

    //clock
    push();
    stroke(25);
    strokeWeight(4);
    fill(0);
    circle(0, 0, width * 0.9);
    pop();

    //clock lines
    push();
    let date = new Date();
    fill(100);
    text(
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      100,
      0
    );
    pop();

    for (let i = 0; i < 60; i++) {
      let len = 300;
      let strk = 1;
      if (i % 5 == 0) {
        len = 250;
        strk = 2;
      }
      push();
      rotate(i * 6);
      strokeWeight(strk);
      stroke(75);
      line(0, 350, 0, len);
      pop();
    }

    //seconds
    push();
    strokeCap(ROUND);

    strokeWeight(2);
    stroke(0, 255, 255);
    rotate(this.s);
    line(0, 50, 0, -340);
    pop();

    //minutes
    push();
    strokeCap(ROUND);

    strokeWeight(3);
    stroke(255);
    rotate(this.m);
    line(0, 25, 0, -300);
    pop();

    //hours
    push();
    strokeCap(ROUND);

    strokeWeight(3);
    stroke(255);
    rotate(this.h);
    line(0, 25, 0, -200);
    pop();
  };

  this.update = function() {
    this.date = new Date();
    this.getTimeAngles(
      this.date.getHours(),
      this.date.getMinutes(),
      this.date.getSeconds()
    );
  };

  this.getTimeAngles = function(h, m, s) {
    // 30sec * 6 = 180deg
    // secDeg = 180deg / 60 = 3deg
    // 30min * 6  + secDeg = 183deg
    // minDeg = 183deg / 12 = 15.25deg
    // 3hr * 30 = 90deg + minDeg = 105.25

    this.s = s * 6;
    this.m = m * 6 + this.s / 60;
    this.h = h * 30 + this.m / 12;
  };
}
