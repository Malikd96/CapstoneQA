exports.config = {
    runner: 'local',
    port: 4723,

    specs: [
        './specs/*.test.js'  // Looks inside appium/specs/ for test files
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '16',  // Update this to match your emulator
        'appium:automationName': 'UiAutomator2',
        'appium:chromedriverAutodownload': false,
        'appium:chromedriverExecutable': 'C:\\Users\\User\\OneDrive\\Desktop\\Capstone\\drivers\\chromedriver-win64\\chromedriver.exe',


    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],
    appium: {
        command: 'appium'
    },

    framework: 'mocha',
    reporters: ['spec', 'json'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
