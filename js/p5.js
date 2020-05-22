let ele;

let button;

function setup() {

  createCanvas(1440, 900, WEBGL);

  ele = createAudio('music/hbd.mp3');
  ele.autoplay(true);

  button = createButton('->');
  button.position(19, 19);
  button.mousePressed();

  frameRate(10);

}

let value = '#F09696';

function draw() {
  background(value);

  noStroke();
  translate(mouseX - width/2, mouseY - height/2)
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(300, 180, 300);
  pointLight(0, 0, 255, -200, 0, 200);
  pointLight(300, 100, 255, 0, 200, 0)
  specularMaterial(100);
  translate(50, 0, 0);
  shininess(20);
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.5, mouseY - height/2.5)
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.8, mouseY - height/1.8)
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.5, mouseY - height/1.5)
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/3, mouseY - height/3)
  fill(240, 150, 150);
  rotateX(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/3, mouseY - height/3)
  fill(240, 150, 150);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.8, mouseY - height/2.8)
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/1.5, mouseY - height/1.5)
  fill(240, 150, 150);
  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/5, mouseY - height/5)
  fill(240, 150, 150);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.05);
  torus(20, 10);

  noStroke();
  translate(mouseX - width/2.5, mouseY - height/2.5)
  fill(240, 150, 150);
  rotateX(frameCount * 0.04);
  rotateZ(frameCount * 0.04);
  torus(20, 10);


}

function mouseReleased() {
  if (value === '#F09696') {
    value = '#8b7ca9';
  } else {
    value = '#F09696';
  }
}
