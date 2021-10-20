var defaultImage;
var infoArray = [];

function preload(){
	defaultImage = loadImage('../Images/Error404.png');
	solidImage = loadImage('../Images/Solid.jpg')
	liquidImage = loadImage('../Images/Liquid.jpg')
	gasImage = loadImage('../Images/Gas.jpg')
}

function setup() {
	createCanvas(1200, 400);

	for(let i = 0; i < 3; i++){
		infoArray[i] = new Info(300 * (i+1), height/2, 250, 300);
	}

	infoArray[0].topic = 'Solid Matter';
	infoArray[0].description = 'Particles very close together with little motion';
	infoArray[0].background = solidImage;

	infoArray[1].topic = 'Liquid Matter';
	infoArray[1].description = 'Particles moving around freely rarely touching';
	infoArray[1].background = liquidImage;

	infoArray[2].topic = 'Gas Matter';
	infoArray[2].description = 'Particles very separated, almost never touch';
	infoArray[2].background = gasImage;

}

//check and draw the corresponding scene
function draw(){

	background(100);

	for(let i = 0; i < infoArray.length; i++){
		infoArray[i].display();
	}

}