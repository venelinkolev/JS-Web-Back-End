const fs = require('fs').promises;

async function readFile(filePath) {
  return await fs.readFile(filePath, 'utf8');
}

async function writeFile(filePath, data) {
  return await fs.writeFile(filePath, data);
}

async function deleteFile(filePath) {
  return await fs.unlink(filePath);
}

module.exports = {
  readFile,
  writeFile,
  deleteFile,
};
