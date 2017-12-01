
/* (c) 2017 Kazuki KOHZUKI */

const {app, BrowserWindow} = require('electron');
const dialog = require('electron').dialog;
const path = require('path');

var win = null

app.on('ready', function() {
  win = new BrowserWindow({width: 800, height: 700})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', function () {
if (process.platform !== 'darwin') {
  app.quit()
}
})
