var h1;
var canvas;
var slider;
var brushColor;
var pixelArray = [];

function preload(){
	
}

function setup() {
	canvas = createCanvas(800, 800);
	canvas.position(50,140);
	colorText = createElement('h1' ,'Slide for different colors:');
	colorText.style('color','white')
	colorText.position(50, 960);

	resolutionText = createElement('h1' ,'Resolutions:');
	resolutionText.style('color','white')
	resolutionText.position(740, 960);

	warningText = createElement('h3' ,'(Slow)');
	warningText.style('color','gray')
	warningText.position(800, 1085);

	sliderR = createSlider(0,255,0);
	sliderG = createSlider(0,255,0);
	sliderB = createSlider(0,255,0);

	sliderR.position(50, 1020);
	sliderG.position(50, 1060);
	sliderB.position(50, 1100);

	redText = createElement('h2' ,'Red');
	greenText = createElement('h2' ,'Green');
	blueText = createElement('h2' ,'Blue');

	redText.position(190, 1000);
	greenText.position(190, 1040);
	blueText.position(190, 1080);

	redText.style('color','red');
	greenText.style('color','green');
	blueText.style('color','blue');

	button1 = createElement('button','14x14');
	button2 = createElement('button','30x30');
	button3 = createElement('button','78x78');

	button1.mousePressed(button1IsPressed);
	button2.mousePressed(button2IsPressed);
	button3.mousePressed(button3IsPressed);

	button1.position(740, 1015);
	button2.position(740, 1058);
	button3.position(740, 1098);

	colorButtonRed = createElement('button','Red');
	colorButtonGreen = createElement('button','Green');
	colorButtonBlue = createElement('button','Blue');
	colorButtonWhite = createElement('button','White');
	colorButtonBlack = createElement('button','Black');
	colorButtonYellow = createElement('button','Yellow');
	colorButtonCyan = createElement('button','Cyan');
	colorButtonPurple = createElement('button','Purple');

	colorButtonRed.mousePressed(colorRedIsPressed);
	colorButtonGreen.mousePressed(colorGreenIsPressed);
	colorButtonBlue.mousePressed(colorBlueIsPressed);
	colorButtonWhite.mousePressed(colorWhiteIsPressed);
	colorButtonBlack.mousePressed(colorBlackIsPressed);
	colorButtonYellow.mousePressed(colorYellowIsPressed);
	colorButtonCyan.mousePressed(colorCyanIsPressed);
	colorButtonPurple.mousePressed(colorPurpleIsPressed);

	colorButtonRed.position(340, 1015);
	colorButtonGreen.position(340, 1058);
	colorButtonBlue.position(340, 1098);
	colorButtonWhite.position(440, 1035);
	colorButtonBlack.position(440, 1078);
	colorButtonYellow.position(540, 1015);
	colorButtonCyan.position(540, 1058);
	colorButtonPurple.position(540, 1098);

	colorButtonRed.style('color','red');
	colorButtonGreen.style('color','green');
	colorButtonBlue.style('color','blue');
	colorButtonWhite.style('color','black');
	colorButtonBlack.style('color','black');
	colorButtonYellow.style('color','yellow');
	colorButtonCyan.style('color','cyan');
	colorButtonPurple.style('color','purple');

	// for(let i=0; i < 14; i++){
	// 	for(let e = 0; e < 14; e++) {
	// 		pixelArray.push(new Pixel(50*(i+1), 50*(e+1), 50));
	// 	}
	// }

	create14x14();

	print(pixelArray.length);

}

function draw(){

	background(100);

	

	for(let i = 0; i < pixelArray.length; i++){
		for(let e = 0; e < 14; e++) {
			pixelArray[i].display();
		}
	}

}

function button1IsPressed(){

	background(100);

	pixelArray = [];

	for(let i=0; i < 14; i++){
			for(let e = 0; e < 14; e++)
				pixelArray.push(new Pixel(50*(i+1), 50*(e+1), 50));
		}
}

function button2IsPressed(){
	
	background(100);

	pixelArray = [];

	for(let i=0; i < 30; i++){
			for(let e = 0; e < 30; e++)
				pixelArray.push(new Pixel(25*(i+1), 25*(e+1), 25));
		}
}

function button3IsPressed(){
	
	background(100);

	pixelArray = [];

	for(let i=0; i < 78; i++){
			for(let e = 0; e < 78; e++)
				pixelArray.push(new Pixel(10*(i+1), 10*(e+1), 10));
		}
}

function create14x14(){

	pixelArray=[];

	for(let i=0; i < 14; i++){
		for(let e = 0; e < 14; e++) {
			pixelArray.push(new Pixel(50*(i+1), 50*(e+1), 50));
		}
	}
}

function colorRedIsPressed(){
	sliderR.value(255);
	sliderG.value(0);
	sliderB.value(0);
}

function colorGreenIsPressed(){
	sliderR.value(0);
	sliderG.value(255);
	sliderB.value(0);
}

function colorBlueIsPressed(){
	sliderR.value(0);
	sliderG.value(0);
	sliderB.value(255);
}

function colorWhiteIsPressed(){
	sliderR.value(255);
	sliderG.value(255);
	sliderB.value(255);
}

function colorBlackIsPressed(){
	sliderR.value(0);
	sliderG.value(0);
	sliderB.value(0);
}

function colorYellowIsPressed(){
	sliderR.value(255);
	sliderG.value(255);
	sliderB.value(0);
}

function colorCyanIsPressed(){
	sliderR.value(0);
	sliderG.value(255);
	sliderB.value(255);
}

function colorPurpleIsPressed(){
	sliderR.value(255);
	sliderG.value(0);
	sliderB.value(255);
}
