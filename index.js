var objects;

function setup() {
	var canvas = createCanvas(640, 640);
	canvas.parent('mycanvas');
	background(0, 255, 0);

	objects = [];
	mainMenu();
}

function draw() {
	for (let obj of objects) {
		obj.drawObj();
	}
}

window.addEventListener('click', function(e) {
	for (let obj of objects) {
		if (obj.mouseOn(e.x, e.y)) {
			obj.clicked();
		}
	}
})

function mainMenu() {
	playButton = new Button(40, 40, 100, 100, color(0, 0, 255), color(255, 0, 0), 'Play', 32, true);
	objects.push(playButton);

	titleText = new Text(100, 100, color(0, 0, 255), 'Random Game Name', 50, true);
	objects.push(titleText);
}