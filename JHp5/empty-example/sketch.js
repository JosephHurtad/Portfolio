function setup() {
	mycanvas = createCanvas(300,300);
}


function draw() {
  background(250,250,255);
  fill(0,0,0,200);
  quad(133,270,133,120,210,100,210,230);
  drawwater();
  fill(0,0,0);
  stroke(75,0,130);
  strokeWeight(5);
//  line(90,100,90,230);
//  line(90,100,130,120);
//  line(130,120,130,270);
//  line(90,230,130,270);
//  line(210,100,210,230);
//  line(210,230,130,270);
//  line(130,120,210,100);
//  line(90,100,120,80);
//  line(130,120,140,90);
//  line(210,100,180,80);
//  line(180,80,180,50);
//  line(120,80,120,50);
//  line(140,90,140,55);

  quad(91,100,90,230,130,268,130,120);
  quad(93,96,133,116,140,90,120,80);
  quad(133,116,140,90,180,80,207,97);




  fill(0,0,0,0);
  quad(133,270,133,120,210,100,210,230);

  fill(100,100,100);
  quad(120,80,120,50,140,55,140,90);
  quad(140,55,140,90,180,80,180,50);

  strokeWeight(2);
  quad(122,48,140,52,177,47,160,43);


  //hex(90,100,130,120,140,90,140,55,120,50,120,80);

  stroke(10,10,10);
  strokeWeight(10);
  line(175,150,175,200);
  line(155,180,195,170);

  stroke(139,69,19);
  strokeWeight(4);
  circle(162,68,5);

}
var yoff = 0;
var r1 = 128;
var r2 = 0;
var r3 = 128;
function drawwater() {

    fill(r1,r2,r3,200);
    strokeWeight(0);
  
    beginShape();

    var xoff = 0;
    for (var x = 133; x <= 213; x += 10) {
        var y = map(noise(xoff, yoff), 0, 1, 120, 170);

        vertex(x, y);

        xoff += 0.05;
    }
    yoff += 0.03;
    vertex(210, 230);
    vertex(133, 270);
    endShape(CLOSE);
}
function mousePressed(){
	r1 = random(255)
	r2 = random(255)
	r3 = random(255)
}