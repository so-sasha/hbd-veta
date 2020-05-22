let ele;

let button;

let myFont;

function setup() {

  createCanvas(1440, 900, WEBGL);

  ele = createAudio('music/hbd.mp3');
  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);

  button = createButton('next');
  button.position(19, 19);
  button.mousePressed();

  frameRate(10);

  loadFont('../fonts/homemadeapple.ttf', drawText);
}

function drawText(font) {
  fill('#ED225D');
  textFont(font, 36);
  text('happy birthday', 10, 50);
}

let value = '#F09696';

let words = ['hey', 'you', 'have', 'a', 'nice', 'day'];
let index = 0;

function draw() {
  background(value);

  noStroke();
  fill(240, 150, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(30, 15);

  // noStroke();
  // fill(240, 150, 150);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // torus(30, 15);

  noStroke();
  fill(240, 150, 150);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.0001);
  torus(mouseX, 30, mouseY, 10);

  textFont('Georgia');
  textSize(100);
  text(words[index], 10, 150);
}

// function mousePressed() {
//   clear();
// }

function mouseReleased() {
  if (value === '#F09696') {
    value = '#8b7ca9';
  } else {
    value = '#F09696';
  }
}

function mouseMoved() {
  index += 1;
  if (index === words.length) {
    index = 0;
  }
}
