var driver = require('node-phantom-simple');
 
driver.create({ path: require('phantomjs').path }, function (err, browser) {
  return browser.createPage(function (err, page) {
    return page.open("http://finance.yahoo.com", function (err, status) {
        console.log("Page status: ", status);
        page.evaluate(function() {
           document.body.bgColor = 'white';
        });
        page.set('clipRect', { top: 0, left: 0, width: 1024, height: 768 }, function () {
            page.set("viewportSize", {width: 1024, height: 768}, function(){
                page.render('output-image.png', function(){
                    console.log("done");
                    process.exit();
                });
            });
        });
    });
  });
});