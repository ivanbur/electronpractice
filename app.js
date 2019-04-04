const electron             = require('electron');
const {app, BrowserWindow} = electron;
const ipc                  = electron.ipcRenderer;
const path                 = require('path');

console.log('testing');

var mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 640,
		height: 640,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadFile('./index.html');

	mainWindow.on('close', function() {
		mainWindow = null;
		console.log('window closed');
	})

	// mainWindow.webContents.executeJavaScript(`
	// 	let canvas = document.getElementById('canvas');

	// 	alert('testing1');
	// 	ellipse(10, 10, 10, 10, 10);
	// 	alert('testing2');
	// `);
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

