function setup() {
	alert('width: ' + window.screen.width + ' height: ' + window.screen.height);
	createCanvas(500, 500);
}

function draw() {
	fill(100);
	rect(0, 0, window.width, window.height);
}