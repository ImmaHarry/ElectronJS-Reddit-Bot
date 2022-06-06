const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        height: 1920,
        width: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload.js'),
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'site-assets/app-icon.ico')
    })
    
    win.loadFile('Webpage Files/landing-page.html')
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