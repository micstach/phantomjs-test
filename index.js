var driver = require('node-phantom-simple');
 
driver.create({ path: require('phantomjs').path }, function (err, browser) {
  return browser.createPage(function (err, page) {
    page.viewportSize = { width: 1024, height: 768 };
    page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

    return page.open("http://basketmania.pl/product-pol-9989-Buty-koszykarskie-Galaxy.html", function (err,status) {
      page.render('output-image.png', function(err){
          console.log('done');
      });
    });
  });
});