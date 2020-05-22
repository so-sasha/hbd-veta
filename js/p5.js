let ele;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  ele = createAudio('music/hbd.mp3');
  ele.autoplay(true);

  frameRate(10);

}

let value = '#F09696';

function draw() {
  background(value);

  noStroke();
  translate(mouseX - width/2, mouseY - height/2)
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(500, 1000, 300);
  pointLight(100, 50, 255, -100, 0, 100);
  pointLight(350, 50, 100, 0, 200, 0)
  specularMaterial(300);
  translate(50, 0, 0);
  shininess(20);
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.5, mouseY - height/2.5)
  fill(255,147,147);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.8, mouseY - height/1.8)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.5, mouseY - height/1.5)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2, mouseY - height/2)
  fill(255,147,147);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/3, mouseY - height/3)
  fill(255,147,147);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.4, mouseY - height/2.4)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.5, mouseY - height/1.5)
  fill(255,147,147);
  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/5, mouseY - height/5)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.5, mouseY - height/2.5)
  fill(255,147,147);
  rotateX(frameCount * 0.04);
  rotateZ(frameCount * 0.04);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.2, mouseY - height/2.2)
  fill(255,147,147);
  rotateX(frameCount * 0.04);
  rotateZ(frameCount * 0.04);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.2, mouseY - height/2.2)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.01);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.3, mouseY - height/1.3)
  fill(255,147,147);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.9, mouseY - height/2)
  fill(255,147,147);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.8, mouseY - height/1.8)
  fill(255,147,147);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.05);
  torus(20, 10);

}

function mouseReleased() {
  if (value === '#F09696') {
    value = '#8b7ca9';
  } else {
    value = '#F09696';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
