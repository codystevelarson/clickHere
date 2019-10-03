function Radar() {
  this.col1 = 0;
  this.col2 = 255;
  this.strokeWeight = 4;
  this.rH = 0;
  this.rM = 0;
  this.rS = 0;

  this.display = function() {
    fill(this.col1);

    strokeWeight(this.strokeWeight);
    stroke(this.col2);

    //Clock
    push();
    translate(width / 2, height / 2);
    ellipse(0, 0, width * 0.8, height * 0.8);
    pop();

    //Hr
    push();
    translate(width / 2, height / 2);
    rotate(this.rH);
    line(0, 0, width / 2, 10);
    pop();
    //Min
    push();
    translate(width / 2, height / 2);
    rotate(this.rM);
    line(0, 0, width / 2, 15);
    pop();
    //Sec
    push();
    translate(width / 2, height / 2);
    strokeWeight(2);
    rotate(this.rS);
    line(0, 0, width / 2, 15);
    pop();
  };

  this.update = function() {
    this.rH += 0.0001;
    this.rM += 0.001;
    this.rS += 0.1;
  };
}
