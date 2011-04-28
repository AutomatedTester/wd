var wd = require("../lib/main")

var browser = wd.remoteWebDriver("ondemand.saucelabs.com", 80, "username", "accessKey");

browser.init({browserName:'iexplore', version:'9'}, function() {
  browser.get("http://www.jelly.io", function() {
    browser.exec("window.location.href", function(o) {
      console.log(o);
      browser.get("http://www.seleniumhq.org", function() {
        browser.close(function() {
          browser.quit()
        })
      })
    })
  })
})
