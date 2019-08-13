"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win;
var PORT = 4200;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    var menu = electron_1.Menu.buildFromTemplate([
        {
            label: 'Pages',
            submenu: [
                {
                    label: 'Page 1',
                    click: function () {
                        win.loadURL("http://localhost:" + PORT + "/page1");
                    },
                },
                {
                    label: 'Page 2',
                    click: function () {
                        win.loadURL("http://localhost:" + PORT + "/page2");
                    },
                },
                {
                    label: 'Page 3',
                    click: function () {
                        win.webContents.executeJavaScript(wrapFn(function () {
                            window.router.navigateByUrl('/page3');
                        }));
                    },
                },
            ],
        },
    ]);
    electron_1.Menu.setApplicationMenu(menu);
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL("http://localhost:" + PORT);
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
function wrapFn(fn) {
    return "(" + fn.toString() + ")()";
}
//# sourceMappingURL=main.js.map