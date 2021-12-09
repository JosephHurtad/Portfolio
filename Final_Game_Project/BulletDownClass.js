class bulletDown {

	constructor(x,y){
		this.x = x;
		this.y = y;
		this.to2 = false;
		this.to3 = false;
		this.last = false;
	}

	display(){

		imageMode(CENTER,CENTER);
		image(bulletDownImage, this.x, this.y, bulletDownWidth, bulletDownHeight);

		if(this.hit(this.x, this.y, bulletDownWidth, bulletDownHeight, heart.x, heart.y, heart.width, heart.height)){
 				scene = 'over';
 			}
 		if(this.to2 && this.y > height + bulletDownWidth/2 + until2){
 			scene = '2';
 		}
 		if(this.to3 && this.y > height + bulletDownWidth/2 + until3){
 			scene = '3';
 		}
 		if(this.last && this.y > height + bulletDownWidth/2 + untilVictory){
 			scene = 'win';
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