class Text extends Object {
	constructor(x, y, color, text, textSize, visible) {
		super(x, y, color, visible || true);
		this.text = text || '';
		this.textSize = textSize || 32;
	}

	drawObj() {
		fill(super.color);
		textSize(this.textSize);
		text(this.text, this.x, this.y);
	}
}