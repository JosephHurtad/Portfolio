class Info {

	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.topic = "";
		this.description = "";

		this.background = defaultImage;
	}

	display(){

		rectMode(CENTER);
		imageMode(CENTER);
		textAlign(CENTER);

		strokeWeight(12);
    	stroke('black');
    	fill('white');
		rect(this.x, this.y, this.w, this.h);
		strokeWeight(2);
		image(this.background, this.x, this.y, this.w, this.h);

		if(this.checkMouseOver(mouseX,mouseY)){

			textSize(32);
			fill('black');
			text(this.description, this.x, this.y, this.w, this.h/2);

		} else {

			textSize(42);
			fill('black');
			text(this.topic, this.x, this.y);
		}

	}

	checkMouseOver(x,y){
		if(x < this.x + this.w/2 && x > this.x - this.w/2 && y < this.y + this.h/2 && y > this.y - this.h/2){
			return true;
		} else {
			return false;
		}
	}
}