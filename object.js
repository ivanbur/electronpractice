class Obj {
	constructor(x, y, color, visible) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.visible = visible || true;
	}

	drawObj(){
		if (this.visible) {
			fill(this.color);
			noStroke();
		}
	}

	mouseOn(x, y) {
		return false;
	}

	clicked() {
		console.log('some object clicked');
	}
}