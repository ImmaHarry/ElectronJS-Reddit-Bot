const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        height: 1920,
        width: 1080,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'site-assets/app-icon.ico'),
        frame: false,
        titleBarStyle: 'hiddeninset'
    })
    
    win.loadFile('Webpage Files/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('window-all-closed', () => app.quit());