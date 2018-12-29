import electron, {
  app,
  BrowserWindow
} from 'electron'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080` :
  `file://${__dirname}/index.html`

function createWindow() {
  const screen = electron.screen
  const size = screen.getPrimaryDisplay().workAreaSize
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: size.width * 0.8,
    height: size.height * 0.9,
    title: 'ChqPortal',
    frame: false,
    useContentSize: true,
    webPreferences: {
      navigateOnDragDrop: false
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

let subDropWin = null;

function createSubDropWin() {
  const {
    width,
    height
  } = electron.screen.getPrimaryDisplay().workAreaSize

  const url = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080/subWin.html` :
    `file://${__dirname}/subWin.html`

  /**
   * Initial window options
   */
  subDropWin = new BrowserWindow({
    width: 200,
    height: 200,
    x: width - 200,
    y: height - 200,
    resizable: false,
    transparent: false,
    title: 'Pocket',
    useContentSize: true,
    alwaysOnTop: true,
    frame: false,
    webPreferences: {
      navigateOnDragDrop: false,
      devTools: false
    }
  })

  subDropWin.loadURL(url)

  subDropWin.on('closed', () => {
    subDropWin = null
  })
}

function init() {
  createWindow()
  // createSubDropWin()
}

app.on('ready', init)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */