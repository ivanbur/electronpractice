var screens;
var currentScreen;

function setup() {
	var canvas = createCanvas(640, 640);
	canvas.parent('mycanvas');
	background(0, 255, 0);

	screens = [];
	setupMainMenu();
}

function draw() {
	for (let screen of screens) {
		screen.drawScreen();
	}
}

window.addEventListener('click', function(e) {
	for (let screen of screens) {
		if (screen.visible) {
			for (let obj of screen.list) {
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
		}
	}

	
})

function setupMainMenu() {
	screens.push(new Screen('mainMenu'));

	titleText = new Text('titleText', 100, 100, color(0, 0, 255), 'Random Game Name', 50, true);
	screens[0].addObj(titleText);

	playButton = new Button('playButton', 250, 270, 175, 75, color(0, 0, 255), color(255, 0, 0), 'Play', 32, true);
	screens[0].addObj(playButton);

	mainMenuButton = new Button('mainMenu', 237.5, 350, 200, 75, color(0, 0, 255), color(255, 0, 0), 'Main Menu', 32, true);
	screens[0].addObj(mainMenuButton);

	currentScreen = screen[0];
}

function playButtonClicked() {
	console.log('The play button was clicked');
}

function mainMenuButtonClicked() {
	console.log('The main menu button was clicked');
}

function binaryFindScreen(screenName) {
	let min = 0;
	let max = screens.length - 1;
	let spot;

	while (min != max) {
		spot = (min + max) / 2;

		if (screenName.localeCompare(screens[spot].name) == 0) {
			break;
		} else if (screenName.localeCompare(screens[spot].name) < 0) {
			max = spot;
		} else {
			min = spot;
		}
	}

	return screens[spot];
}

function addScreen(screen) {
	for (let i = 0; i < screens.length; i++) {
		if (screen.name.localeCompare(screens[i].name) < 0) {
			screens.splice(i, 0, screen);
		}
	}
}