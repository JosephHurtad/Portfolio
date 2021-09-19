var shuriken1Object;
var shuriken2Object;
var frame1;
var frame2;
var x1 = 200;
var x2 = -200;


function preload() {
	shuriken1 = loadImage("../Images/Shuriken_1.gif");
	shuriken2 = loadImage("../Images/Shuriken_2.gif");
}


function setup() {
	createCanvas(400, 400);

	shuriken1Object = {
		// x:200,
		// y:200,
		image:shuriken1,
	};

	shuriken2Object = {
		// x:200,
		// y:200,
		image:shuriken2,
	};

	shuriken1Object.image.pause();
	shuriken1Object.image.setFrame(0);
	shuriken2Object.image.pause();
	shuriken2Object.image.setFrame(0);

}

function draw() {

	background(200);
	displayShuriken1Object(x1,200);
	displayShuriken2Object(x2, 200);
}

function displayShuriken1Object(x,y){
	imageMode(CENTER);
	image(shuriken1Object.image,x,y,400,400);

	frame1 = shuriken1Object.image.getCurrentFrame();

	if(frame1 == 6 && mouseIsPressed){
		shuriken1Object.image.pause();
	};

	if(frame1 == 15){
		shuriken1Object.image.reset();
		shuriken1Object.image.pause();
		x1 = -200;
		x2 = 200;
		shuriken2Object.image.play();
	};
}

function displayShuriken2Object(x,y){
	imageMode(CENTER);
	image(shuriken2Object.image,x,y,400,400);

	frame2 = shuriken2Object.image.getCurrentFrame();

	if(frame2 == 23){
		shuriken2Object.image.pause();
	}
}

function mousePressed() {

	shuriken1Object.image.play();
}

function mouseReleased(){
	shuriken1Object.image.play();
}