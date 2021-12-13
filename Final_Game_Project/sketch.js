var timesPressed, paused, heart, heartSpeed, heartImage, container, bulletLeftArray, bulletRightArray, bulletDownArray, bulletSpeed, bulletWidth, bulletHeight, gameOver, victory, retry, scene, marginforerror, wait, untilVictory;

var bulletDownArray = [];
var bulletRightArray = [];
var bulletLeftArray = [];
var bulletDownArray2 = [];
var bulletRightArray2 = [];
var bulletLeftArray2 = [];
var bulletDownArray3 = [];
var bulletRightArray3 = [];
var bulletLeftArray3 = [];


function preload(){//Direction is where it is coming from
	heartImage = loadImage('../Images/Heart.png');
	bulletLeftImage = loadImage('../Images/BulletLeft.png');
	bulletRightImage = loadImage('../Images/BulletRight.png');
	bulletDownImage = loadImage('../Images/BulletDown.png');
}

function setup() {
	createCanvas(800, 800);

	heart = {
		x:width/2,
		y:height*0.7,
		width:35,
		height:35,
		isMoving:false,
		image:heartImage
	}

	container = {
		x:width/2,
		y:height*0.7,
		width:500,
		height:300,
		weight:5
	}

	wait = 200;
	wait2 = 500;
	wait3 = 1500;

	timesPressed = 0;

	until2 = 300;
	until3 = 1100;
	untilVictory = 2000;

	bulletWidth = 200;
	bulletHeight = 50;

	bulletStart = 3;
	bulletSpeed = bulletStart;
	bulletStop = 0;

	bulletDownWidth = 50;
	bulletDownHeight = 200;
	bulletSpeed = bulletSpeed;

	for(let i = 0; i < 2; i++){
		bulletLeftArray[i] = new bulletLeft(wait * -1, (height/5)*(i+3));
	}

	// bulletLeftArray = [[wait * -1, container.y - container.height/2 + bulletHeight/2],
	// 				[wait * -1, container.y],
	// 				[wait * -1, container.y + container.height/2 - bulletHeight/2]];

	for(let i = 0; i < 1; i++){
		bulletRightArray[i] = new bulletRight(width + wait, (height/5)*(i+3.5));
	}
	// bulletRightArray = [[width + wait, container.y - container.height * 0.21],
	// 				[width + wait, container.y + container.height * 0.21]];

	for(let i = 0; i < 3; i++){
		bulletDownArray[i] = new bulletDown((width/4)*(i+1), wait * -1);
	}
	// bulletDownArray = [[container.x - container.width/2 + bulletDownWidth/2, wait * -1],
	// 				[container.x - container.width * 0.21, wait * -1],
	// 				[container.x, wait * -1],
	// 				[container.x + container.width * 0.21, wait * -1],
	// 				[container.x + container.width/2 - bulletDownWidth/2, wait * -1]];

	heartSpeed = 3;

	marginforerror = heart.width/3.5;

	scene = 'start';

	for(let i = 0; i < 5; i++){//will need to make retry version for all arrays
		bulletDownArray2[i] = new bulletDown((width/6)*(i+1), (wait2 * -1) - (250 * i));
	}
	for(let i = 0; i < 1; i++){
		bulletRightArray2[i] = new bulletRight(width + wait2 + 300, (height/5)*(i+3.5));
	}
	for(let i = 0; i < 2; i++){
		bulletLeftArray2[i] = new bulletLeft((wait2 * -1) - (600 * i), (height/5)*(i+3));
	}



	for(let i = 0; i < 7; i++){//will need to make retry version for all arrays
		bulletDownArray3[i] = new bulletDown((width/8)*(i+1), (wait3 * -1) + (random(100,200) * i));
	}
	for(let i = 0; i < 8; i++){
		bulletRightArray3[i] = new bulletRight(width + wait3 + (random(50,100) * i), (height/9)*(i+1));
	}
	for(let i = 0; i < 8; i++){
		bulletLeftArray3[i] = new bulletLeft((wait3 * -1) - (random(50,100) * i), (height/9)*(i+1));
	}
}

//check and draw the corresponding scene
function draw(){

	//print(scene);

	if (scene == 'start'){
		startScene();
	} else if(scene == '1'){
		level1();
	} else if (scene == '2'){
		level2();
	} else if (scene == '3'){
		level3();
	} else if (scene == 'over'){
		overScene();
	} else if (scene == 'win'){
		winScene();
	}
}

//draw heart and bullet entities
function level1(){

	background(0);

	container = {
		x:width/2,
		y:height*0.7,
		width:500,
		height:300,
		weight:5
	}

	textAlign(CENTER, CENTER);
	rectMode(CENTER, CENTER);

	drawContainer();

	drawHeart();

	drawBullets1();

	ifPaused();
}
function level2(){
	background(0);

	textAlign(CENTER, CENTER);
	rectMode(CENTER, CENTER);

	drawContainer();

	drawHeart();

	drawBullets2();

	ifPaused();

	if(container.width < 700){
		container.width += 5;
	}
}
function level3(){
	background(0);

	textAlign(CENTER, CENTER);
	rectMode(CENTER, CENTER);

	drawContainer();

	drawHeart();

	drawBullets3();

	ifPaused();

	if(container.height < 900){
		container.height += 5;
	}
	if(container.y > height/2){
		container.y -= 5;
	}
	// if(container.width > 200){
	// 	container.width -= 5;
	// }
}

//gameover scene with retry
function overScene(){

	background(0);

		textAlign(CENTER, CENTER);
		rectMode(CENTER, CENTER);

		textSize(20);
		fill(255);
		noStroke();
		text('GAME OVER', width/2, height/2 - 10);
		drawRetry();

}

//victory scene with retry
function winScene(){

	background(0);

		textAlign(CENTER, CENTER);
		rectMode(CENTER, CENTER);

		textSize(20);
		fill(255);
		noStroke();
		text('YOU WIN', width/2, height/2 - 10);
		drawRetry();
}

function startScene(){

	background(0);

		textAlign(CENTER, CENTER);
		rectMode(CENTER, CENTER);

		textSize(20);
		fill(255);
		text('READY?', width/2, height/2 - 10);
		drawStart();
}

//retry function to add to scenes
function drawRetry(){
	fill(255);
	rect(width/2, height/2 + 20, 90, 30);
	fill(0);
	textSize(20);
	text('RETRY?', width/2, height/2 + 20);
	if(mouseX < width/2 + 45 &&
		mouseX > width/2 - 45 &&
		mouseY < height/2 + 20 + 15 &&
		mouseY > height/2 + 20 - 15 && mouseIsPressed) {

		heart = {
			x:width/2,
			y:height*0.7,
			width:35,
			height:35,
			isMoving:false,
			image:heartImage
		}

		bulletSpeed = bulletStart;
		bulletSpeed = bulletStart;

		for(let i=0;i<bulletLeftArray.length;i++){
		    bulletLeftArray[i].x = wait * -1;
		}

		// bulletLeftArray = [[wait * -1, container.y - container.height/2 + bulletHeight/2],
		// 				[wait * -1, container.y],
		// 				[wait * -1, container.y + container.height/2 - bulletHeight/2]];

		for(let i=0;i<bulletRightArray.length;i++){
		    bulletRightArray[i].x = width + wait;
		}

		// bulletRightArray = [[width + wait, container.y - container.height * 0.21],
		// 				[width + wait, container.y + container.height * 0.21]];

		for(let i=0;i<bulletDownArray.length;i++){
		    bulletDownArray[i].y = wait * -1;
		}

		// bulletDownArray = [[container.x - container.width/2 + bulletDownWidth/2, wait * -1],
		// 				[container.x - container.width * 0.21, wait * -1],
		// 				[container.x, wait * -1],
		// 				[container.x + container.width * 0.21, wait * -1],
		// 				[container.x + container.width/2 - bulletDownWidth/2, wait * -1]];

		scene = '1';

		for(let i=0;i<bulletDownArray2.length;i++){
		    bulletDownArray2[i].y = (wait2 * -1) - (250 * i);
		}
		for(let i=0;i<bulletRightArray2.length;i++){
		    bulletRightArray2[i].x = width + wait2 + 300;
		}
		for(let i=0;i<bulletLeftArray2.length;i++){
		    bulletLeftArray2[i].x = (wait2 * -1) - (600 * i);
		}



		for(let i=0;i<bulletDownArray3.length;i++){
		    bulletDownArray3[i].y = (wait3 * -1) + (random(100,200) * i);
		}
		for(let i=0;i<bulletRightArray3.length;i++){
		    bulletRightArray3[i].x = width + wait3 + (random(50,100) * i);
		}
		for(let i=0;i<bulletLeftArray3.length;i++){
		    bulletLeftArray3[i].x = (wait3 * -1) - (random(50,100) * i);
		}
	}
}

function drawStart(){
	fill(255);
	rect(width/2, height/2 + 20, 90, 30);
	fill(0);
	if(mouseX < width/2 + 45 &&
		mouseX > width/2 - 45 &&
		mouseY < height/2 + 20 + 15 &&
		mouseY > height/2 + 20 - 15 && mouseIsPressed) {
		
		scene = '1';
	}
}

//heart image and interactions
function drawHeart(){
	heart.isMoving=false;

	if(keyIsDown(65) && heart.x - heart.width/2 - container.weight > container.x - container.width/2){//a
		heart.x -= heartSpeed;
		heart.isMoving = true;
	}
	if(keyIsDown(68) && heart.x + heart.width/2 + container.weight < container.x + container.width/2){//d
		heart.x += heartSpeed;
		heart.isMoving = true;
	}
	if(keyIsDown(87) && heart.y - heart.height/2 - container.weight > container.y - container.height/2){//w
		heart.y -= heartSpeed;
		heart.isMoving = true;
	}
	if(keyIsDown(83) && heart.y + heart.height/2 + container.weight < container.y + container.height/2){//s
		heart.y += heartSpeed;
		heart.isMoving = true;
	}

	imageMode(CENTER);
	image(heart.image, heart.x, heart.y, heart.width, heart.height);
}

//bullet dimentions and interactions
function drawBullets1() {
	bulletSpeed = bulletSpeed;

	for(let i=0;i<bulletDownArray.length;i++){
    bulletDownArray[i].display();
    bulletDownArray[i].y += bulletSpeed;
    bulletDownArray[i].to2 = true;
  	}
  	for(let i=0;i<bulletRightArray.length;i++){
    bulletRightArray[i].display();
    bulletRightArray[i].x -= bulletSpeed;
  	}
  	for(let i=0;i<bulletLeftArray.length;i++){
    bulletLeftArray[i].display();
    bulletLeftArray[i].x += bulletSpeed;
  	}
}
function drawBullets2() {
	bulletSpeed = bulletSpeed;

	for(let i=0;i<bulletDownArray2.length;i++){
    bulletDownArray2[i].display();
    bulletDownArray2[i].y += bulletSpeed;
    //bulletDownArray2[i].x += random(-3,3);
    bulletDownArray2[i].to3 = true;
  	}
  	for(let i=0;i<bulletRightArray2.length;i++){
    bulletRightArray2[i].display();
    bulletRightArray2[i].x -= bulletSpeed;
  	}
  	for(let i=0;i<bulletLeftArray2.length;i++){
    bulletLeftArray2[i].display();
    bulletLeftArray2[i].x += bulletSpeed;
  	}
}
function drawBullets3() {
	bulletSpeed = bulletSpeed;

	for(let i=0;i<bulletDownArray3.length;i++){
    bulletDownArray3[i].display();
    bulletDownArray3[i].y += bulletSpeed;
    bulletDownArray3[i].x += random(-3,3);
    bulletDownArray3[i].last = true;
  	}
  	for(let i=0;i<bulletRightArray3.length;i++){
    bulletRightArray3[i].display();
    bulletRightArray3[i].x -= bulletSpeed;
    bulletRightArray3[i].y += random(-3,3);
  	}
  	for(let i=0;i<bulletLeftArray3.length;i++){
    bulletLeftArray3[i].display();
    bulletLeftArray3[i].x += bulletSpeed;
    bulletLeftArray3[i].y += random(-3,3);
  	}
}
// function drawBullets1(){

// 	bulletSpeed = bulletSpeed;

// 	for(let i = 0; i < bulletLeftArray.length;i++){
// 			fill(255);
// 			strokeWeight(0);
// 			image(bulletLeftImage ,bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight);

// 			bulletLeftArray[i][0] += bulletSpeed;

// 			// if(bulletLeftArray[i][0] > width + bulletWidth/2 + 1){ Prob Useless
// 			// 	bulletSpeed = 0;
// 			// }
// 			if(hit(bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
// 				scene = 'over';
// 			}
// 		}

// 	for(let i = 0; i < bulletRightArray.length;i++){
// 			fill(255);
// 			strokeWeight(0);
// 			image(bulletRightImage ,bulletRightArray[i][0], bulletRightArray[i][1], bulletWidth, bulletHeight);

// 			bulletRightArray[i][0] -= bulletSpeed;

// 			// if(bulletRightArray[i][0] < 0 - bulletWidth/2 - 1){ Prob Useless
// 			// 	bulletSpeed = 0;
// 			// }
// 			if(hit(bulletRightArray[i][0], bulletRightArray[i][1], bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
// 				scene = 'over';
// 			}
// 		}
// 	for(let i = 0; i < bulletDownArray.length;i++){
// 			fill(255);
// 			strokeWeight(0);
// 			image(bulletDownImage ,bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight);


// 			bulletDownArray[i][1] += bulletSpeed;

// 			if(bulletDownArray[i][1] > height + bulletDownWidth/2 + untilVictory){
// 				bulletSpeed = bulletStop;
// 				bulletSpeed = bulletStop;
// 				scene = 'win';
// 			}
// 			if(hit(bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight, heart.x, heart.y, heart.width, heart.height)){
// 				scene = 'over';
// 			}
// 		}

// }

//collition decetion function to add to bullets
// function hit(x1, y1, width1, height1, x2, y2, width2, height2){
// 	if(x1 - width1/2 + marginforerror < x2 + width2/2 &&
// 		x1 + width1/2 - marginforerror > x2 - width2/2 &&
// 		y1 - height1/2 + marginforerror < y2 + height2/2 &&
// 		y1 + height1/2 - marginforerror > y2 - height2/2){

// 		return true;

// 	} else {

// 		return false;
// 	}
// }

function keyPressed(){//pausebutton
	if(keyCode === 32 && timesPressed == 0 && scene != 'start'){//
		bulletSpeed = bulletStop;
		heartSpeed = 0;
		paused = true;
		timesPressed = 1;
		//print(bulletSpeed);
	} else if (keyCode === 32 && timesPressed == 1) {
		bulletSpeed = bulletStart
		heartSpeed = 3;
		paused = false;
		timesPressed = 0;
		//print(scene);
	}
}

function ifPaused(){
	if (paused == true){
		textAlign(LEFT,TOP);
		fill('white');
		textSize(20);
		text('Paused',0,0);
	}
}

function drawContainer(){
	fill(0);
	stroke(255);
	strokeWeight(container.weight);

	rect(container.x, container.y, container.width, container.height)
}
