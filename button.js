class Button extends Obj {
	constructor(objName, x, y, width, height, color, textColor, text, textSize, visible) {
		super(objName, x, y, color, visible || true);
		this.width = width;
		this.height = height;

		let testText = new Text('testText', 0, 0, textColor, text, textSize, false);
		let testWidth = testText.width;
		let testHeight = testText.height;
		testText = null;

		this.text = new Text('textName', this.x + (this.width - testWidth) / 2, this.y + ((this.height - testHeight) / 2) + testHeight - 10, textColor, text, textSize, visible);
	}

	drawObj() {
		if (this.visible) {
			fill(this.color);
			noStroke();
			rect(this.x, this.y, this.width, this.height);
			this.text.drawObj();
		}
	}

	mouseOn(x, y) {
		if (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height) {
			return true;
		}

		return false;
	}
}