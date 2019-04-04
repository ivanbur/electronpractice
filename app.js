const electron             = require('electron');
const {app, BrowserWindow} = electron;
const ipc                  = electron.ipcRenderer;
const path                 = require('path');

console.log('testing');

var mainWindows = [];

function createWindow() {
	mainWindows.push(new BrowserWindow({
		width: 500,
		height: 500,
		webPreferences: {
			nodeIntegration: true
		}
	}));

	let index = mainWindows.length - 1;

	mainWindows[index].loadFile('./index.html');

	mainWindows[index].on('close', function() {
		mainWindows.splice(index);
		console.log('window closed');
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
})

function testClick() {
	console.log('button clicked');
}