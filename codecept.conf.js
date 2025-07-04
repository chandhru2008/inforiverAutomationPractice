const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://inforiverwebtest-premium.azurewebsites.net/?csvLocation=Sanity.csv&config=Sanity.json&URLLoad=true',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    AssertWrapper: {
      require: 'codeceptjs-assert'
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs"
    }
  },
  name: 'inforiverAutomationPractice'
}