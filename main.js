const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1024,
    height: 800,
    title: "Oldcord v1.5.0",
  })

  win.loadURL('https://discord.com/app')
}

app.whenReady().then(() => {
  createWindow()
})