const fs = require('fs');

function homePage(req, res) {
  //res.write('Home Page');
  //res.end();

  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  fs.createReadStream('./views/index.html').pipe(res);
}

function favicon(req, res) {
  fs.createReadStream('./images/pawprint.ico').pipe(res);
}

function style(req, res) {
  fs.createReadStream('./styles/site.css').pipe(res);
}

function addCat(req, res) {
  fs.createReadStream('./views/addCat.html').pipe(res);
}

function addBreed(req, res) {
  fs.createReadStream('./views/addBreed.html').pipe(res);
}

function catShelter(req, res) {
  fs.createReadStream('./views/catShelter.html').pipe(res);
}

function editCat(req, res) {
  fs.createReadStream('./views/editCat.html').pipe(res);
}

module.exports = {
  homePage,
  favicon,
  style,
  addBreed,
  addCat,
  catShelter,
  editCat,
};
