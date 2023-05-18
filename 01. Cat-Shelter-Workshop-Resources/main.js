const { createBreed } = require('./controllers/createController');
const {
  homePage,
  favicon,
  style,
  addCat,
  addBreed,
} = require('./controllers/viewController');

function handleRequest(req, res) {
  let handler;

  console.log(`${req.method} and ${req.url}`);

  if (req.url == '/images/pawprint.ico') {
    handler = favicon;
  } else if (req.url == '/') {
    handler = homePage;
  } else if (req.url == '/styles/site.css') {
    handler = style;
  } else if (req.url == '/cats/add-cat') {
    handler = addCat;
  } else if (req.method == 'GET' && req.url == '/cats/add-breed') {
    handler = addBreed;
  } else if (req.method == 'POST' && req.url == '/cats/add-breed') {
    //console.log('createBreed');
    handler = createBreed;
  }

  if (typeof handler == 'function') {
    handler(req, res);
  } else {
    res.writeHead(404);
    res.write('404 Not Found');
    res.end();
  }
}

module.exports = handleRequest;
