var heart, heartSpeed, heartImage, container, bulletLeftArray, bulletRightArray, bulletDownArray, bulletSpeed, bulletWidth, bulletHeight, gameOver, victory, marginforerror, wait, untilVictory;

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
		isMoving:false
	}

	container = {
		x:width/2,
		y:height*0.7,
		width:500,
		height:300,
		weight:5
	}

	wait = 1000;

	untilVictory = 300;

	bulletWidth = 200;
	bulletHeight = 50;
	bulletSpeed = 2;
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

	gameOver = false;
	victory = false;

}

function draw(){
	background(0);

	textAlign(CENTER);
	rectMode(CENTER);

	if(gameOver == false && victory == false){
		fill(0);
		stroke(255);
		strokeWeight(container.weight);

		rect(container.x, container.y, container.width, container.height)

		drawHeart();

		for(let i = 0; i < bulletLeftArray.length;i++){
			fill(255);
			strokeWeight(0);
			rect(bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight);

			bulletLeftArray[i][0] += bulletSpeed;

			if(bulletLeftArray[i][0] > width + bulletWidth/2 + 1){
				bulletSpeed = 0;
			}
			if(hit(bulletLeftArray[i][0], bulletLeftArray[i][1], bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
				gameOver = true;
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
				gameOver = true;
			}
		}

		for(let i = 0; i < bulletDownArray.length;i++){
			fill(255);
			strokeWeight(0);
			rect(bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight);

			bulletDownArray[i][1] += bulletDownSpeed;

			if(bulletDownArray[i][1] > height + bulletDownWidth/2 + untilVictory){
				bulletDownSpeed = 0;
				victory = true;
			}
			if(hit(bulletDownArray[i][0], bulletDownArray[i][1], bulletDownWidth, bulletDownHeight, heart.x, heart.y, heart.width, heart.height)){
				gameOver = true;
			}
		}

	} else if(gameOver == true && victory == false){
		text('GAME OVER', width/2, height/2);
	} else if (gameOver == false && victory == true){
		text('YOU WIN', width/2, height/2);
	}
}

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
	image(heartImage, heart.x, heart.y, heart.width, heart.height);
}

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