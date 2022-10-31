 /* Road Project by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	
	//gif stuff 0.5
	
function mousePressed () {
  saveCanvas(mycanvas,"screenshot","png");
}

	//gif stuff

	mycanvas = createCanvas(640, 360); // (width, height)

	var iteration = 0;

	if (frameCount > 200 && frameCount < 800) {
	formatted_number = FormatNumberLength(iteration,4);
	saveCanvas(mycanvas,"screenshot"+formatted_number,"png");

	iteration += 1;
	}
	print(frameCount);
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
	*/

function preload() {
	cloudImage = loadImage('../Images/Cloud.png');
	starImage = loadImage('../Images/Star.png');
	moonImage = loadImage('../Images/Moon.png');
	grassImage = loadImage('../Images/Grass.png');
	grapeImage = loadImage('../Images/Grape.png');
	backgroundMusic = loadSound('Sounds/Flower Fields - Kirbys Epic Yarn.wav');
}

var bottomText = 'GRAPE';

var shadeStart = 0;
var shadeEnd = 200;
var scaleStart = 200;
var scaleEnd = 270;
var textStart = 280;
var textEnd = 420;
var Int1Start = 520;

var i = 70;
var s1;
var s2;
var sf = 50;
var orbitSpeed;
var k = 10;//Fix Sound Error
var w = 40;
var g = 10;

var ps;
var pe;

var ds;
var de;

var ns;
var ne;

var us;
var ue;

var fs = 0.1;
var fe = 0.5;

var b = 0;

var cityWidth;

var frameThing

var horizon = 0.5;

function setup() {
	//createCanvas(640, 360); // (width, height)
	createCanvas(1583, 630);

	centerX = width / 2;
	centerY = height / 2;

	ns = width / 7;
	ne = width / 6;

	us = 50;
	ue = width / 8;

	ps = 110;
	pe = width / 10;

	p1 = random(ps, pe);
	p2 = random(ps, pe);
	p3 = random(ps, pe);
	p4 = random(ps, pe);
	p5 = random(ps, pe);
	p6 = random(ps, pe);
	p7 = random(ps, pe);
	p8 = random(ps, pe);
	p9 = random(ps, pe);
	p10 = random(ps, pe);
	p11 = random(ps, pe);
	p12 = random(ps, pe);

	cityWidth = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;

	u1 = random(us, ue);
	u2 = random(us, ue);
	u3 = random(us, ue);
	u4 = random(us, ue);
	u5 = random(us, ue);
	u6 = random(us, ue);
	u7 = random(us, ue);
	u8 = random(us, ue);
	u9 = random(us, ue);
	u10 = random(us, ue);
	u11 = random(us, ue);
	u12 = random(us, ue);

	n1 = random(ns, ne);
	n2 = random(ns, ne);
	n3 = random(ns, ne);
	n4 = random(ns, ne);
	n5 = random(ns, ne);
	n6 = random(ns, ne);
	n7 = random(ns, ne);
	n8 = random(ns, ne);
	n9 = random(ns, ne);
	n10 = random(ns, ne);
	n11 = random(ns, ne);
	n12 = random(ns, ne);
	n13 = random(ns, ne);
	n14 = random(ns, ne);

	f1 = random(height * fs, height * fe);
	f2 = random(height * fs, height * fe);
	f3 = random(height * fs, height * fe);
	f4 = random(height * fs, height * fe);
	f5 = random(height * fs, height * fe);
	f6 = random(height * fs, height * fe);
	f7 = random(height * fs, height * fe);
	f8 = random(height * fs, height * fe);
	f9 = random(height * fs, height * fe);
	f10 = random(height * fs, height * fe);
	f11 = random(height * fs, height * fe);
	f12 = random(height * fs, height * fe);
	f13 = random(height * fs, height * fe);
	f14 = random(height * fs, height * fe);

	q = width / 3;

	g1 = n1 * 1;
	g2 = n2 * 2;
	g3 = n3 * 3;
	g4 = n4 * 4;
	g5 = n5 * 5;
	g6 = n6 * 6;
	g7 = n7 * 7;
	g8 = n8 * 8;
	g9 = n9 * 9;
	g10 = n10 * 10;
	g11 = n11 * 11;
	g12 = n12 * 12;
	g13 = n13 * 13;
	g14 = n14 * 14;

	orbitCenterX = width / 2;
	orbitCenterY = height * 0.75;
	orbitRadius = width * 0.5;
	sAngle = 0;
	mAngle = PI;
	}

function draw() {
	
	if (frameThing >= Int1Start) {
		road();
	} else {
		logo();
		frameThing = frameCount
	}
}

function logo() {
	len = bottomText.length;
	backShade = map(frameCount, shadeStart, shadeEnd, 0, 255, true);
	letters = map(frameCount, textStart, textEnd, 0, len, true);
	gScale = map(frameCount, scaleStart, scaleEnd, 0.001, 1.25, true);
	
	background(backShade);

	//bottom text
	textSize(80);
	fill(0);
	stroke(0);
	strokeWeight(3);
	textFont('Pixel');
	textAlign(CENTER, CENTER);
	text(bottomText.substring(0, letters), centerX, centerY + 100);

	//skip text
	textSize(40);
	fill(0);
	stroke(0);
	strokeWeight(2);
	textFont('Pixel');
	textAlign(LEFT, TOP);
	text(' Click anywhere to SKIP', 0, 0);

	//image
	imageMode(CENTER);
	image(grapeImage, centerX, centerY - 50, 136 * gScale, 162 * gScale);
	imageMode(CORNER);
}

function road() {

	//if (!backgroundMusic.isPlaying()) {
	//	backgroundMusic.play();
	//}

	background(173 * horizon, 216 * horizon, 230 * horizon);

	//centerX = mouseX;
	//centerY = mouseY;

	s1 = map(mouseX, width / 6, 5 * (width / 6), 0, sf, true);
	s2 = map(mouseX, width / 6, 5 * (width / 6), 0, 35, true);
	orbitSpeed = map(mouseX, width / 6, 5 * (width / 6), 0, 0.05, true);

	//Sun / Moon
	var sX = orbitCenterX + orbitRadius * cos(sAngle);
	var sY = orbitCenterY + orbitRadius * sin(sAngle);
	var mX = orbitCenterX + orbitRadius * cos(mAngle);
	var mY = orbitCenterY + orbitRadius * sin(mAngle);

	strokeWeight(0);
	fill(245, 250, 110);
	ellipse(sX, sY, height * 0.3);
	image(moonImage, mX, mY, height * 0.15, height * 0.15);

	sAngle -= orbitSpeed;
	mAngle -= orbitSpeed;

	//Background color
	horizon = map(sY, orbitCenterY + orbitRadius - 200, orbitCenterY - orbitRadius + 200, 0.1, 1, true);

	//Clouds / Stars
	alpha1 = map(sY, orbitCenterY + orbitRadius - 200, orbitCenterY - orbitRadius + 200, 0, 255, true);
	alpha2 = map(sY, orbitCenterY + orbitRadius - 200, orbitCenterY - orbitRadius + 200, 255, 0, true);

	tint(255, alpha1);

	cloud(g1, f1);
	cloud(g2, f2);
	cloud(g3, f3);
	cloud(g4, f4);
	cloud(g5, f5);
	cloud(g6, f6);
	cloud(g7, f7);
	cloud(g8, f8);
	cloud(g9, f9);
	cloud(g10, f10);
	cloud(g11, f11);
	cloud(g12, f12);
	cloud(g13, f13);
	cloud(g14, f14);

	tint(255, alpha2);

	star(g1, f1);
	star(g2, f2);
	star(g3, f3);
	star(g4, f4);
	star(g5, f5);
	star(g6, f6);
	star(g7, f7);
	star(g8, f8);
	star(g9, f9);
	star(g10, f10);
	star(g11, f11);
	star(g12, f12);
	star(g13, f13);
	star(g14, f14);

	tint(255,255);

	g1 -= s2;
	g2 -= s2;
	g3 -= s2;
	g4 -= s2;
	g5 -= s2;
	g6 -= s2;
	g7 -= s2;
	g8 -= s2;
	g9 -= s2;
	g10 -= s2;
	g11 -= s2;
	g12 -= s2;
	g13 -= s2;
	g14 -= s2;

	if (g1 < -50) {
		n1 = random(ns, ne) + g14;
		f1 = random(height * fs, height * fe);
		g1 = n1;
	}
	if (g2 < -50) {
		n2 = random(ns, ne) + g1;
		f2 = random(height * fs, height * fe);
		g2 = n2;
	}
	if (g3 < -50) {
		n3 = random(ns, ne) + g2;
		f3 = random(height * fs, height * fe);
		g3 = n3;
	}
	if (g4 < -50) {
		n4 = random(ns, ne) + g3;
		f4 = random(height * fs, height * fe);
		g4 = n4;
	}
	if (g5 < -50) {
		n5 = random(ns, ne) + g4;
		f5 = random(height * fs, height * fe);
		g5 = n5;
	}
	if (g6 < -50) {
		n6 = random(ns, ne) + g5;
		f6 = random(height * fs, height * fe);
		g6 = n6;
	}
	if (g7 < -50) {
		n7 = random(ns, ne) + g6;
		f7 = random(height * fs, height * fe);
		g7 = n7;
	}
	if (g8 < -50) {
		n8 = random(ns, ne) + g7;
		f8 = random(height * fs, height * fe);
		g8 = n8;
	}
	if (g9 < -50) {
		n9 = random(ns, ne) + g8;
		f9 = random(height * fs, height * fe);
		g9 = n9;
	}
	if (g10 < -50) {
		n10 = random(ns, ne) + g9;
		f10 = random(height * fs, height * fe);
		g10 = n10;
	}
	if (g11 < -50) {
		n11 = random(ns, ne) + g10;
		f11 = random(height * fs, height * fe);
		g11 = n11;
	}
	if (g12 < -50) {
		n12 = random(ns, ne) + g11;
		f12 = random(height * fs, height * fe);
		g12 = n12;
	}
	if (g13 < -50) {
		n13 = random(ns, ne) + g12;
		f13 = random(height * fs, height * fe);
		g13 = n13;
	}
	if (g14 < -50) {
		n14 = random(ns, ne) + g13;
		f14 = random(height * fs, height * fe);
		g14 = n14;
	}

	
	//Building lv side walk
	fill(74, 72, 68);
	strokeWeight(0);
	rect(0, height - 205, width, 20);

	//Grass
	grass(b, height - 235, 100, 30);

	b -= s1;

	//Cities
	city(q, height - 185);

	q -= s1;

	if (q < (25 + cityWidth) * -1) {
		u1 = random(us, ue);
		u2 = random(us, ue);
		u3 = random(us, ue);
		u4 = random(us, ue);
		u5 = random(us, ue);
		u6 = random(us, ue);
		u7 = random(us, ue);
		u8 = random(us, ue);
		u9 = random(us, ue);
		u10 = random(us, ue);
		u11 = random(us, ue);
		u12 = random(us, ue);
		p1 = random(ps, pe);
		p2 = random(ps, pe);
		p3 = random(ps, pe);
		p4 = random(ps, pe);
		p5 = random(ps, pe);
		p6 = random(ps, pe);
		p7 = random(ps, pe);
		p8 = random(ps, pe);
		p9 = random(ps, pe);
		p10 = random(ps, pe);
		p11 = random(ps, pe);
		p12 = random(ps, pe);
		cityWidth = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;
		q = width + 10;
	}


	//Side walk
	fill(74, 72, 68);
	strokeWeight(3);
	stroke(48, 47, 45);
	rect(0, height - 50, width, 48.5);
	rect(0, height - 190, width, 50);

	//Road center

	fill(20, 20, 19);
	strokeWeight(0);
	rect(0, height - 150, width, 100);

	//Side walk detail
	sideWalk(w, 10, 50);
	sideWalk(w, 150, 190);
	
	w -= s1;

	//Road Lines
	roadLine(k, 100, 20)

	k -= s1;
	
	//Air
	if (s1 > sf * 0.5) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}
	if (s1 > sf * 0.65) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}
	if (s1 > sf * 0.75) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}
	if (s1 > sf * 0.90) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}
	if (s1 > sf * 0.95) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}
	if (s1 > sf * 0.99) {
		air(random(0, width), random(height - 50, height - 350), random(20, 25), 'white', 3);
	}



	//Bar
	strokeWeight(10);
	stroke(0);
	fill(0);
	rect(width / 6, height - 35, 4 * (width / 6), 20, 20);
	strokeWeight(10);
	stroke(255);
	noFill();
	rect(width / 6, height - 35, 4 * (width / 6), 20, 20);
	strokeWeight(0);
	fill(255);
	x1 = map(mouseX, width / 6, 5 * (width / 6), 0, 4, true);
	rect(width / 6, height - 35, x1 * (width / 6), 20, 20);

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY);

	textSize(20);

}

function air(x, y, l, c, s) {
	strokeWeight(s);
	stroke(c);
	noFill();
	line(x, y, x + l, y);
}

function build(x, y, w, h) {
	//Main wall
	fill('gray');
	strokeWeight(10);
	stroke(128, 70, 55);
	rect(x, y, w, h);
	//Roof
	strokeWeight(3);
	stroke(128, 70, 55);
	quad(x - 2, y + h - 6.3, x + 8, y + h - 21.3, x + w + 11.8, y + h - 21.3, x + w + 3.8, y + h - 6.3);
	//Side wall
	strokeWeight(3);
	fill(128, 70, 55);
	stroke(128, 70, 55);
	quad(x + w + 3.8, y + h - 6.3, x + w + 12.6, y + h - 18.4, x + w + 12.6, y - 20, x + w + 3.8, y - 5);
	//Bricks
	for (let i = x - 5.5; i < x + w; i += 11) {
		for (let o = y; o > y + h; o -= 11) {
			fill(132, 76, 59);
			strokeWeight(0);
			rect(i, o, 10, 5);
		}
	}
	for (let i = x; i < x + w - 5.5; i += 11) {
		for (let o = y + 5.5; o > y + h; o -= 11) {
			fill(132, 76, 59);
			strokeWeight(0);
			rect(i, o, 10, 5);
		}
	}
	//Windows
	if (h < -100) {
		fill('white');
		strokeWeight(1);
		stroke('black');
		rect(x + (w / 5) * 1, y + (h / 5) * 1, w / 5, h / 5);
		rect(x + (w / 5) * 3, y + (h / 5) * 1, w / 5, h / 5);
		rect(x + (w / 5) * 1, y + (h / 5) * 3, w / 5, h / 5);
		rect(x + (w / 5) * 3, y + (h / 5) * 3, w / 5, h / 5);
		noFill();
		strokeWeight(2);
		stroke('black');
		line(x + (w / 10) * 2, y + (h / 10) * 3, x + (w / 10) * 4, y + (h / 10) * 3);
		line(x + (w / 10) * 3, y + (h / 10) * 2, x + (w / 10) * 3, y + (h / 10) * 4);
		line(x + (w / 10) * 6, y + (h / 10) * 3, x + (w / 10) * 8, y + (h / 10) * 3);
		line(x + (w / 10) * 7, y + (h / 10) * 2, x + (w / 10) * 7, y + (h / 10) * 4);
		line(x + (w / 10) * 2, y + (h / 10) * 7, x + (w / 10) * 4, y + (h / 10) * 7);
		line(x + (w / 10) * 3, y + (h / 10) * 6, x + (w / 10) * 3, y + (h / 10) * 8);
		line(x + (w / 10) * 6, y + (h / 10) * 7, x + (w / 10) * 8, y + (h / 10) * 7);
		line(x + (w / 10) * 7, y + (h / 10) * 6, x + (w / 10) * 7, y + (h / 10) * 8);
	} else if (h > -100) {
		fill('white');
		strokeWeight(1);
		stroke('black');
		rect(x + (w / 5) * 1, y + h / 3, w / 5, h / 3);
		rect(x + (w / 5) * 3, y + h / 3, w / 5, h / 3);
		noFill();
		strokeWeight(2);
		stroke('black');
		line(x + (w / 10) * 2, y + (h / 6) * 3, x + (w / 10) * 4, y + (h / 6) * 3);
		line(x + (w / 10) * 3, y + (h / 6) * 4, x + (w / 10) * 3, y + (h / 6) * 2);
		line(x + (w / 10) * 6, y + (h / 6) * 3, x + (w / 10) * 8, y + (h / 6) * 3);
		line(x + (w / 10) * 7, y + (h / 6) * 4, x + (w / 10) * 7, y + (h / 6) * 2);
	}

}

function sideWalk(x, y, y2) {
	strokeWeight(3);
	stroke(48, 47, 45);
	noFill();
	for (let i = x; i <= width; i += 40) {
		for (let o = y; o <= y2; o += 8) {
			line(i + 10, height - 190, i, height - 150);
			line(i, height, i + 10, height - 50);
			line(0, height - o, width, height - o);
		}
	}
}

function roadLine(x, y, w) {
	noFill();
	stroke(224, 224, 56);
	strokeWeight(6);
	for (let i = x; i <= width; i += 70) {
		line(i, height - y, i + w, height - y)
	}
}

function cloud(x, y) {
	image(cloudImage, x - 50, y - 25, 100, 50);
}

function star(x, y) {
	image(starImage, x - 20, y - 15, 40, 30);
}

function city(x, y) {
	build(x, y, p1, u1 * -1);
	build(x + p1, y, p2, u2 * -1);
	build(x + (p1 + p2), y, p3, u3 * -1);
	build(x + (p1 + p2 + p3), y, p4, u4 * -1);
	build(x + (p1 + p2 + p3 + p4), y, p5, u5 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5), y, p6, u6 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6), y, p7, u7 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6 + p7), y, p8, u8 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8), y, p9, u9 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9), y, p10, u10 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10), y, p11, u11 * -1);
	build(x + (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11), y, p12, u12 * -1);
}

function grass(x, y, w, h) {
	for (let i = x; i <= width; i += w) {
		image(grassImage, i, y, w, h);
	}
}

function mousePressed() {
	frameThing = Int1Start 
}