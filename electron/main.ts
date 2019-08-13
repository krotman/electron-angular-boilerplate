import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { Router } from '@angular/router';

let win: BrowserWindow;
const PORT = 4200;
app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
interface MyCoolWindow extends Window {
    router: Router;
}
declare var window: MyCoolWindow;
function createWindow() {
    const menu = Menu.buildFromTemplate([
        {
            label: 'Pages',
            submenu: [
                {
                    label: 'Page 1',
                    click: () => {
                        win.loadURL(`http://localhost:${PORT}/page1`);
                    },
                },
                {
                    label: 'Page 2',
                    click: () => {
                        win.loadURL(`http://localhost:${PORT}/page2`);
                    },
                },
                {
                    label: 'Page 3',
                    click: () => {
                        win.webContents.executeJavaScript(
                            wrapFn(() => {
                                window.router.navigateByUrl('/page3');
                            }),
                        );
                    },
                },
            ],
        },
    ]);
    Menu.setApplicationMenu(menu);
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(`http://localhost:${PORT}`);
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

function wrapFn(fn: () => void): string {
    return `(${fn.toString()})()`;
}
