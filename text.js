class Text extends Obj {
	constructor(objName, x, y, color, text, textSize, visible) {
		super(objName, x, y, color, visible || true);
		this.text = text || '';
		this.textSize = textSize || 32;

		/* to get height and width
		================================================== */
		let test = document.createElement('DIV');
		document.body.appendChild(test);
		test.innerHTML = text;
		test.style.visiblity = 'hidden';
		test.style.position = 'absolute';
		test.style.height = 'auto';
		test.style.width = 'auto';
		test.style.whiteSpace = 'nowrap';
		test.style.fontSize = textSize;

		this.height = test.clientHeight + 1;
		this.width = test.clientWidth + 1;

		test.outerHTML = '';
	}

	drawObj() {
		fill(this.color);
		textSize(this.textSize);
		text(this.text, this.x, this.y);
	}

	mouseOn(x, y) {
		if (x > this.x && x < this.x + this.width && y < this.y && y > this.y - this.height) {
			return true;
		}

		return false;
	}
}