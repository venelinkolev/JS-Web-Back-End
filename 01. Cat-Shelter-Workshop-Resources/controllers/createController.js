const { readFile, writeFile } = require('../data/services');

function createCat(req, res) {
  const data = [];

  req.on('data', (chunk) => data.push(chunk));
  req.on('end', () => {
    console.log(data);

    res.writeHead(301, {
      Location: '/',
    });
    res.end();
  });
}

async function createBreed(req, res) {
  const dataFile = JSON.parse(await readFile('./data/breeds.json'));
  const data = [];

  console.log(dataFile);
  req.on('data', (chunk) => data.push(chunk));
  req.on('end', async () => {
    //console.log(data.join(''));

    dataFile.push(data.toString().split('=')[1]);

    //console.log(dataFile);
    await writeFile('./data/breeds.json', JSON.stringify(dataFile));

    res.writeHead(301, {
      Location: '/',
    });
    res.end();
  });
}

module.exports = {
  createCat,
  createBreed,
};
