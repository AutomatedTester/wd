var wd = require("../lib/main")

var browser = wd.remoteWebDriver();
browser.init({browserName:"chrome"}, function() {
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
