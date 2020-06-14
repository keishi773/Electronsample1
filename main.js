'use strict';

//Electronのモジュール
const electron = require("electron");

// var tray = require("tray");
// var appIcon = new Tray(__dirname + '/images/icon.jpg');

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようグローバル宣言
let mainWindow;

//　全てのウィンドウが閉じたら終了
app.on('window-all-closed', function(){
    if(process.platform != 'darwin'){
        app.quit();
    }
});

// Electronの初期化完了後に実行
app.on('ready', function(){
    mainWindow = new BrowserWindow({
        'width': 300, 
        'height': 300,
        'transparent': false,
        'frame': false
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});