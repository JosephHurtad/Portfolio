function preload() {
	thumnailImage = loadImage('../Images/GameThumnail.png');
	bulletImage = loadImage('../Images/Bullet.png');
}

var centerX = 320;
var centerY = 180;

var currentSlide = 0;

var a = 255;
var b = 0;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
	mycanvas.drawingContext.miterLimit = 3;
}

function draw() {

	background(20, 20, 20);

	//centerX = mouseX;
	//centerY = mouseY;

	//Slides
	if (currentSlide == 0) {
		stroke(255, a);
		a -= 0.5;
		noFill();
		strokeWeight(2);
		line(width / 2, 0, width / 2, height);
		textSize(20);
		textAlign(CENTER, CENTER);
		text('CLICK HERE TO GO BACK', width * 0.25, height / 2);
		text('CLICK HERE TO GO FOWARD', width * 0.75, height / 2);

		stroke(255, b);
		if (b < 255) {
			b += 0.5;
		}
		noFill();
		strokeWeight(2);
		textSize(50);
		textAlign(CENTER, CENTER);
		text('Final Project', width * 0.5, height / 3);
		textSize(40);
		text('Slide Show', width * 0.5, (height / 3) + 50);
		textSize(30);
		text('By : Joseph Hurtado', width * 0.6, (height / 3) + 100);
	} else if (currentSlide == 1) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('My final project will be an upgraded version of my game project.', (width * 0.5) - ((width - 100) / 2), height / 4, width - 100);
		imageMode(CENTER);
		image(thumnailImage, width / 2, (height * 0.5) + 100, 500, 250);
	} else if (currentSlide == 2) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('You will be able to interact by using WASD to move around and dodge the incoming bullets, survive the multiple waves of bullets to win', (width * 0.5) - ((width - 100) / 2), height / 3, width - 100);
	} else if (currentSlide == 3) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH BETTER GRAPHICS', (width * 0.5) - ((width - 100) / 2), height / 5, width - 100);
	} else if (currentSlide == 4) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH BETTER GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
	} else if (currentSlide == 5) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH BETTER GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('NEW CLASSES', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
	} else if (currentSlide == 6) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH BETTER GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('NEW CLASSES', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		text('AND A LOT MORE ACTION THAN BEFORE', (width * 0.5) - ((width - 100) / 2), height * 0.8, width - 100);
	} else if (currentSlide == 7) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE BULLETS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		imageMode(CENTER);
		image(bulletImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 8) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE BULLETS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A HEALTH BAR', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		imageMode(CENTER);
		image(bulletImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 9) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE BULLETS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A HEALTH BAR', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('A SPEED BOOST BUTTON', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		imageMode(CENTER);
		image(bulletImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 10) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE BULLETS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A HEALTH BAR', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('A SPEED BOOST BUTTON', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		text('AND MAYBE EVEN DIFFERENT TYPES OF BULLETS', (width * 0.5) - ((width - 100) / 2), height * 0.8, width - 100);
		imageMode(CENTER);
		image(bulletImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 11) {
		noFill();
		strokeWeight(2);
		textSize(50);
		textAlign(CENTER, CENTER);
		text('or atleast... thats the plan.', width * 0.5, height / 2);

	}
}

function mousePressed() {

	if (currentSlide == 0) {
		a = 255;
		b = 0;
	}

	//Foward / Back
	if (mouseX < width / 2 && currentSlide > 0) {
		currentSlide -= 1;
	} else if (mouseX > width / 2 && currentSlide < 11) {
		currentSlide += 1;
	}
}