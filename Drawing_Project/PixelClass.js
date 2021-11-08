class Pixel {

	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;

		this.r = 255;
		this.g = 255;
		this.b = 255;

		this.c = color(this.r, this.g, this.b);
	}

	display(){

		strokeWeight(0);
		colorMode(RGB, 255, 255, 255);

    	fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.w, this.w);

		if(this.checkIfOverlap(mouseX, mouseY)) {
			this.r = sliderR.value();
			this.g = sliderG.value();
			this.b = sliderB.value();
		}

	}

	checkIfOverlap(xPos,yPos){
    
    if(xPos<this.x+this.w && xPos > this.x && yPos < this.y+this.w && yPos>this.y && mouseIsPressed){
      return true;
    } else {
      return false;
    }
    
  	}

}