const { app, BrowserWindow, screen } = require('electron');
const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const window = new BrowserWindow({
        width: width / 1.25,
        height: height / 1.25,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadFile('public/index.html');
};

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());