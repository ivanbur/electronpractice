class Object {
	var x = 0, y = 0, width = 100, height = 100, color = color(0, 0, 0), visible = true;

	constructor(x, y, width, height, color, visible = true) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.visible = visible;
	}

	function drawObj(){
		fill(color);
		noStroke();
	}
}