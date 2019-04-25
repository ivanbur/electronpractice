class Button extends Obj {
	constructor(x, y, width, height, color, textColor, text, textSize, visible) {
		super(x, y, color, visible || true);
		this.width = width;
		this.height = height;
		this.textColor = textColor;
		this.text = text || '';
		this.textSize = textSize || 32;
	}

	drawObj() {
		if (this.visible) {
			fill(this.color);
			noStroke();
			rect(this.x, this.y, this.width, this.height);
			fill(this.textColor);
			textSize(this.textSize);
			text(this.text, this.x + this.width / 5, this.y + this.height / 1.75);
		}
	}

	mouseOn(x, y) {
		if (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height) {
			return true;
		}

		return false;
	}
}