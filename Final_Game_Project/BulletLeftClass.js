class bulletLeft {

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	display(){

		imageMode(CENTER,CENTER);
		image(bulletLeftImage, this.x, this.y, bulletWidth, bulletHeight);

		if(this.hit(this.x, this.y, bulletWidth, bulletHeight, heart.x, heart.y, heart.width, heart.height)){
 				scene = 'over';
 			}

	}

	hit(x1, y1, width1, height1, x2, y2, width2, height2){

		if(x1 - width1/2 + marginforerror < x2 + width2/2 &&
			x1 + width1/2 - marginforerror > x2 - width2/2 &&
			y1 - height1/2 + marginforerror < y2 + height2/2 &&
			y1 + height1/2 - marginforerror > y2 - height2/2){

			return true;

		} else {

			return false;
		}
	}
}