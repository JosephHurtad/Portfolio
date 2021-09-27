var shuriken1Object;
var shuriken2Object;
var frame1;
var frame2;

function preload() {
	shurikenImage = loadImage("../Images/Shuriken_3.gif");
}


function setup() {
	createCanvas(400, 1300);

	shurikenXArray = [200, 200, 200]
	shurikenYArray = [200, 650, 1100]
	shurikenGifArray = [false, false, false]
	

}

function draw() {

	background(200);

	imageMode(CENTER);

	for(let i=0; i<shurikenYArray.length; i++){
		image(shurikenImage, shurikenXArray[i], shurikenYArray[i], 400, 400);
		if (shurikenGifArray[i]==true) {
			shurikenImage.play();
		} else if(shurikenGifArray[i]==false) {
			shurikenImage.pause();
		}
	}

	fill(0);
	rect(0, 400, 400, 50);
	rect(0, 850, 400, 50);
}


function keyPressed(){
	if(key=='1'){
		shurikenGifArray[0]=true;
		shurikenGifArray[1]=false;
		shurikenGifArray[2]=false;
	} else if(key=='2'){
		shurikenGifArray[0]=false;
		shurikenGifArray[1]=true;
		shurikenGifArray[2]=false;
	} else if(key=='3'){
		shurikenGifArray[0]=false;
		shurikenGifArray[1]=false;
		shurikenGifArray[2]=true;
	}
}