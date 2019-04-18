class Button extends Object {
	text = '', textColor = color(0, 0, 0);

	constructor(x, y, width, height, color, visible = true, text='', textColor=) {
		super(x, y, width, height, color, visible);
		this.text = text;
	}

	function drawObj() {
		if (visible) {
			fill(color);
			noStroke();
			rect(x, y, width, height);
		}
	}
}