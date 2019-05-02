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
			if (obj.name == 'playButton') {
				playButtonClicked();
			} else if (obj.name == 'mainMenu') {
				mainMenuButtonClicked();
			} else {
				obj.clicked();
			}
		}
	}
})

function mainMenu() {
	titleText = new Text('titleText', 100, 100, color(0, 0, 255), 'Random Game Name', 50, true);
	objects.push(titleText);

	playButton = new Button('playButton', 250, 270, 175, 75, color(0, 0, 255), color(255, 0, 0), 'Play', 32, true);
	objects.push(playButton);

	mainMenuButton = new Button('mainMenu', 237.5, 350, 200, 75, color(0, 0, 255), color(255, 0, 0), 'Main Menu', 32, true);
	objects.push(mainMenuButton);
}

function playButtonClicked() {
	console.log('The play button was clicked');
}

function mainMenuButtonClicked() {
	console.log('The main menu button was clicked');
}