let seq = 0;
let pinks = [];
let x, y;
let xSpd, ySpd;
let dia;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-container");

  background(250)
  for (let i = 0; i < 26; i++) {
    pinks[i] = new Pinkk(random(380), random(25, 40), random(380), random(360));
  }

  x = 200;
  y = 20;
  xSpd = random(1, 2);
  ySpd = random(1, 2);
  dia = 50;

  x1 = 0;
  y1 = 170;
  x2 = -150;
  y2 = 340;
  x3 = -300;
  y3 = 90;
  speed1 = 1;
}

function draw() {
  switch (seq) {
    case 0:
      drawIntro();
      break;
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    case 4:
      drawScene4();
      break;
    case 5:
      drawScene5();
      break;
    case 6:
      drawScene6();
      break;
    case 7:
      drawScene7();
      break;
    case 8:
      drawScene8();
      break;
    default:
      drawEnding();
      break;
  }
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
  let prev =  updateSequence( 1 );
  prev.parent("prev-container");
  }
  else if (keyCode === LEFT_ARROW) {
    updateSequence( -1 );
  }
}

function updateSequence( step ) {
  seq += step;
  // limit
  if (seq < 0) {
    seq = 0;
  }
  // repeat
  if (seq == 10) {
    seq = 0;
  }
}

function drawIntro() {
  background("#ffb3b3");
  fill(250);
  stroke(250);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("Physics of Love", 200, 195);
}

function drawScene1() {
  background("#ffe8e6");
  stroke(250);
  fill("#ffb3b3");
  circle(200, 200, 200);

  let t = frameCount * 0.05;
  let x1 = 200;
  let y1 = map(sin(t), -1, 1, 50, 350);
  stroke("#902731")
  fill("#902731");
  ellipse(x1, y1, 30, 30);

  let s = frameCount * 0.02;
  let x2 = map(sin(s), -1, 1, 50, 320);
  let y2 = map(sin(s), -1, 1, 50, 320);
  stroke("#d56671")
  fill("#d56671");
  ellipse(x2, y2, 50, 50);

  let f = frameCount * 0.08;
  let x3 = map(sin(f), -1, 1, 50, 320);
  let y3 = 200;
  stroke("#a93b45")
  fill("#a93b45");
  ellipse(x3, y3, 70, 70);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("Mass is not proportional to volume.", 200, 200);
}

function drawScene2() {
  background("#ffe8e6");

  for (let i = 0; i < pinks.length; i++) {
    pinks[i].move();
    pinks[i].display();

    stroke(250);
    fill("#a93b45");
    circle(200, 200, 80);

    fill(0);
    stroke(0);
    textSize(20);
    textAlign(CENTER);
    textFont("Georgia");
    text("A girl as small as a violet", 200, 290);
    text("A girl who moves like a flower petal", 200, 320);
  }
}
class Pinkk {
  constructor(x, y, size, rotate) {
    this.x = x;
    this.y = y;
    this.speedx = random(0, 2);
    this.speedy = random(0, 1);
    this.size = size;
    this.stroke = "#FFFFFF";
    this.color = "#fac3c3";
    this.rotate = rotate;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotate);
    fill(this.color);
    stroke(this.stroke);
    circle(10, 150, 100);
    pop();
  }
  move() {
    if (this.x > width || this.x < 0) {
      this.speedx = this.speedx * -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedy = this.speedy * -1;
    }
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
}

function drawScene3() {
  background("#ffe8e6");
  fill("#ffb3b3");
  stroke("#ffb3b3");
  for (let i = 0; i < 5; i++) {
    let y = 35;
    let x = 35 + i * 70;
    rect(x, y, 50, 50);
  }
  for (let i = 0; i < 5; i++) {
    let y = 175;
    let x = 35 + i * 70;
    rect(x, y, 50, 50);
  }
  for (let i = 0; i < 3; i++) {
    let y = 245;
    let x = 35 + i * 70;
    rect(x, y, 50, 50);
  }
  for (let i = 0; i < 5; i++) {
    let y = 315;
    let x = 35 + i * 70;
    rect(x, y, 50, 50);
  }
  rect(315, 245, 50);
  fill("#a93b45");
  circle(270, 270, 50);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("is pulling me towards her", 200, 120);
  text("with more force than her mass.", 200, 150);
}

function drawScene4() {
  background("#ffb3b3");
  drawCreature(mouseX, mouseY);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("Just like then, I am", 100, 85);
  text("like Newton's apple", 100, 115);
}

function drawCreature(x, y) {
  push();
  translate(x, y);

  fill("#c81031");
  push();
  translate(0, 0);
  stroke("#c81031");
  ellipse(0, 0, 100, 100);
  fill("#ffffff");
  stroke("250");
  ellipse(20, -15, 20, 20);
  pop();

  //stick
  stroke("#6a4238");
  fill("#6a4238");
  push();
  translate(8, -8);
  rotate(PI);
  rect(5, 30, 5, 30);
  pop();

  //leaf
  stroke("#38761d");
  fill("#38761d");
  push();
  translate(73, -45);
  rotate(PI);
  triangle(30, 65, 78, 10, 66, 65);
  pop();
}

function drawScene5() {
  background("#ffe8e6")
  x1 = x1 + speed1;
  x2 = x2 + speed1;
  x3 = x3 + speed1;

  fill("#c81031");
  stroke("#c81031");
  circle(x1, y1, 200);
  circle(x2, y2, 100);
  circle(x3, y3, 70);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("I rolled towards her without stopping", 200, 260);
  text("until I fell on her", 200, 290);
}

function drawScene6() {
  background("#ffe8e6");
  freq = frameCount * 0.01;
  let dia = map(sin(freq), -1, 1, 50, 300);

  fill("#a93b45");
  stroke("#a93b45");
  circle(width / 2, height / 2, dia);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("with a thump, with a thump thump.", 200, 210);
}

function drawScene7() {
  background("#ffe8e6");

  x = x + xSpd;
  y = y + ySpd;

  if (x < 0 || x > width) {
    xSpd = xSpd * -1;
  }
  if (y < 0 || y > height) {
    ySpd = ySpd * -1;
  }

  stroke("#ffb3b3");
  fill("#a93b45");
  circle(x, y, 70);

  fill(0);
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("My heart keeps bouncing", 200, 150);
  text("between the sky and the ground.", 200, 180);
}

function drawScene8() {
  background("#a93b45");

  fill("#ffe8e6");
  stroke("#ffe8e6");
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("It was my first love.", 200, 195);
}

function drawEnding() {
  background("#ffb3b3");
  fill(250);
  stroke(250);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("Physics of Love", 200, 195);
  textSize(16);
  text("(Kim In Yook, 1963)", 200, 225);
}
