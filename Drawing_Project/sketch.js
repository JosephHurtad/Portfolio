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
	sliderText = createElement('h1' ,'Slide for different colors');
	sliderText.position(50, 960);

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

	button1.position(600, 985);
	button2.position(700, 985);
	button3.position(800, 985);

	colorButton1 = createElement('button','Red');
	colorButton2 = createElement('button','Green');
	colorButton3 = createElement('button','Blue');
	colorButton4 = createElement('button','White');
	colorButton5 = createElement('button','Black');

	colorButton1.mousePressed(color1IsPressed);
	colorButton2.mousePressed(color2IsPressed);
	colorButton3.mousePressed(color3IsPressed);
	colorButton4.mousePressed(color4IsPressed);
	colorButton5.mousePressed(color5IsPressed);

	colorButton1.position(404, 1050);
	colorButton2.position(448, 1050);
	colorButton3.position(505, 1050);
	colorButton4.position(423, 1075);
	colorButton5.position(478, 1075);

	for(let i=0; i < 14; i++){
		for(let e = 0; e < 14; e++)
			pixelArray[i] = new Pixel(50*(i+1), 50*(e+1), 50);
	}

	print(pixelArray.length);

}

function draw(){

	background(100);

	

	for(let i = 0; i < pixelArray.length; i++){
		pixelArray[i].display();
	}

}

function button1IsPressed(){

	background(100);

	pixelArray = [];

	for(let i=0; i < 14; i++){
			for(let e = 0; e < 14; e++)
				pixelArray[i,e] = new Pixel(50*(i+1), 50*(e+1), 50);
		}
}

function button2IsPressed(){
	
	background(100);

	pixelArray = [];

	for(let i=0; i < 30; i++){
			for(let e = 0; e < 30; e++)
				pixelArray[i,e] = new Pixel(25*(i+1), 25*(e+1), 25);
		}
}

function button3IsPressed(){
	
	background(100);

	pixelArray = [];

	for(let i=0; i < 78; i++){
			for(let e = 0; e < 78; e++)
				pixelArray[i,e] = new Pixel(10*(i+1), 10*(e+1), 10);
		}
}

function color1IsPressed(){
	sliderR.value(255);
	sliderG.value(0);
	sliderB.value(0);
}

function color2IsPressed(){
	sliderR.value(0);
	sliderG.value(255);
	sliderB.value(0);
}

function color3IsPressed(){
	sliderR.value(0);
	sliderG.value(0);
	sliderB.value(255);
}

function color4IsPressed(){
	sliderR.value(255);
	sliderG.value(255);
	sliderB.value(255);
}

function color5IsPressed(){
	sliderR.value(0);
	sliderG.value(0);
	sliderB.value(0);
}