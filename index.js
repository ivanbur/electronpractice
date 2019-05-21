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
	makeOnlyCurrentVisible();
	drawBackground();
	for (let screen of screens) {
		screen.drawScreen();
	}
}

function drawBackground() {
	fill(0, 255, 0);
	rect(0, 0, width, height);
}

window.addEventListener('click', function(e) {
	for (let screen of screens) {
		if (screen.visible) {
			for (let obj of screen.list) {
				if (obj.mouseOn(e.x, e.y)) {
					if (obj.name === 'playButton') {
						playButtonClicked();
					} else if (obj.name === 'howToPlay') {
						howToPlayButtonClicked();
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

	howToPlayButton = new Button('howToPlay', 237.5, 350, 200, 75, color(0, 0, 255), color(255, 0, 0), 'How to Play', 32, true);
	screens[0].addObj(howToPlayButton);

	currentScreen = 0;
}

function playButtonClicked() {
	console.log('The play button was clicked');
}

function howToPlayButtonClicked() {
	console.log('The \"how to play\" button was clicked');
	let pos = findScreen('howToPlayScreen');

	if (pos === -1) {
		screens.push(new Screen('howToPlayScreen', false));
		pos = findScreen('howToPlayScreen');

		let instructions = 'Right: ' + 'D' +
						 '\nLeft: ' + 'A' +
						 '\nUp: ' + 'W' +
						 '\nDown: ' + 'S' +
						 '\nJump:' + 'Space' +
						 '\n' +
						 '\n\t\tYou are a nail who has escaped its fate' +
						 '\nof being pounded brutally into a piece' +
						 '\nof wood by a hammer.' +
						 '\n\t\tNow you must get to freedom, all' +
						 '\nthe while avoiding the hammer that' +
						 '\nis trying to knock you down.'
		instructionsText = new Text('instructionsText', 30, 100, color(0, 0, 0), instructions, 32, true);
		console.log('pos: ' + pos);
		screens[pos].addObj(instructionsText);
	}

	currentScreen = pos;
	makeOnlyCurrentVisible();
}

function makeOnlyCurrentVisible() {
	for (let i = 0; i < screens.length; i++) {
		if (i === currentScreen) {
			screens[i].visible = true;
		} else {
			screens[i].visible = false;
		}
	}
}

// function binaryFindScreen(screenName) {
// 	let min = 0;
// 	let max = screens.length - 1;
// 	let spot;

// 	while (min != max) {
// 		spot = (min + max) / 2;

// 		if (screenName.localeCompare(screens[spot].name) === 0) {
// 			break;
// 		} else if (screenName.localeCompare(screens[spot].name) < 0) {
// 			max = spot;
// 		} else {
// 			min = spot;
// 		}
// 	}

// 	return spot;
// }

function findScreen(screenName) {
	for (let i = 0; i < screens.length; i++) {
		if (screens[i].name === screenName) {
			return i;
		}
	}

	return -1;
}

function addScreen(screen) {
	for (let i = 0; i < screens.length; i++) {
		if (screen.name.localeCompare(screens[i].name) < 0) {
			screens.splice(i, 0, screen);
		}
	}
}