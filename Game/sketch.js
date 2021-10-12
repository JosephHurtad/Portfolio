var heart, heartSpeed, heartImage, container, bulletLeftArray, bulletRightArray, bulletDownArray, bulletSpeed, bulletWidth, bulletHeight, gameOver, victory, retry, scene, marginforerror, wait, untilVictory;

function preload(){
	heartImage = loadImage('../Images/Heart.png');
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

	untilVictory = 300;

	bulletWidth = 200;
	bulletHeight = 50;

	bulletStart = 2;
	bulletSpeed = bulletStart;
	bulletStop = 0;

	bulletDownWidth = 50;
	bulletDownHeight = 200;
	bulletDownSpeed = bulletSpeed;

	bulletLeftArray = [[wait * -1, container.y - container.height/2 + bulletHeight/2],
					[wait * -1, container.y],
					[wait * -1, container.y + container.height/2 - bulletHeight/2]];

	bulletRightArray = [[width + wait, container.y - container.height * 0.21],
					[width + wait, container.y + container.height * 0.21]];

	bulletDownArray = [[container.x - container.width/2 + bulletDownWidth/2, wait * -1],
					[container.x - container.width * 0.21, wait * -1],
					[container.x, wait * -1],
					[container.x + container.width * 0.21, wait * -1],
					[container.x + container.width/2 - bulletDownWidth/2, wait * -1]];

	heartSpeed = 3;

	marginforerror = heart.width/4;

	scene = "game";

}

//check and draw the corresponding scene
function draw(){

	//print(scene);

	if(scene == 'game'){
		gameScene();
	} else if(scene == 'over'){
		overScene();
	} else if (scene == 'win'){
		winScene();
	}
}

//draw heart and bullet entities
function gameScene(){

	background(0);

	textAlign(CENTER, CENTER);
	rectMode(CENTER, CENTER);

	fill(0);
	stroke(255);
	strokeWeight(container.weight);

	rect(container.x, container.y, container.width, container.height)

	drawHeart();

	drawBullets();
}

//gameover scene with retry
function overScene(){

	background(0);

		textAlign(CENTER, CENTER);
		rectMode(CENTER, CENTER);

		textSize(20);
		fill(255);
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
		text('YOU WIN', width/2, height/2 - 10);
		drawRetry();
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
		bulletDownSpeed = bulletStart;

		bulletLeftArray = [[wait * -1, container.y - container.height/2 + bulletHeight/2],
						[wait * -1, container.y],
						[wait * -1, container.y + container.height/2 - bulletHeight/2]];

		bulletRightArray = [[width + wait, container.y - container.height * 0.21],
						[width + wait, container.y + container.height * 0.21]];

		bulletDownArray = [[container.x - container.width/2 + bulletDownWidth/2, wait * -1],
						[container.x - container.width * 0.21, wait * -1],
						[container.x, wait * -1],
						[container.x + container.width * 0.21, wait * -1],
						[container.x + container.width/2 - bulletDownWidth/2, wait * -1]];

		scene = 'game';
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
function drawBullets(){
	for(let i = 0; i < bulletLeftArray.length;i++){
			fill(255);
			strokeWeight(0);
			rect(bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight);

			bulletLeftArray[i][0] += bulletSpeed;

			if(bulletLeftArray[i][0] > width + bulletWidth/2 + 1){
				bulletSpeed = 0;
			}
			if(hit(bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
				scene = 'over';
			}
		}

	for(let i = 0; i < bulletRightArray.length;i++){
			fill(255);
			strokeWeight(0);
			rect(bulletRightArray[i][0], bulletRightArray[i][1], bulletWidth, bulletHeight);

			bulletRightArray[i][0] -= bulletSpeed;

			if(bulletRightArray[i][0] < 0 - bulletWidth/2 - 1){
				bulletSpeed = 0;
			}
			if(hit(bulletRightArray[i][0], bulletRightArray[i][1], bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
				scene = 'over';
			}
		}
	for(let i = 0; i < bulletDownArray.length;i++){
			fill(255);
			strokeWeight(0);
			rect(bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight);

			bulletDownArray[i][1] += bulletDownSpeed;

			if(bulletDownArray[i][1] > height + bulletDownWidth/2 + untilVictory){
				bulletDownSpeed = bulletStop;
				bulletSpeed = bulletStop;
				scene = 'win';
			}
			if(hit(bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight, heart.x, heart.y, heart.width, heart.height)){
				scene = 'over';
			}
		}

}

//collition decetion function to add to bullets
function hit(x1, y1, width1, height1, x2, y2, width2, height2){
	if(x1 - width1/2 + marginforerror < x2 + width2/2 &&
		x1 + width1/2 - marginforerror > x2 - width2/2 &&
		y1 - height1/2 + marginforerror < y2 + height2/2 &&
		y1 + height1/2 - marginforerror > y2 - height2/2){

		return true;

	} else {

		return false;
	}
}
