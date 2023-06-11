const bcrypt = require('bcrypt');

const SECRET = 'MySecretWord';

async function hash(password) {
  const salt = await bcrypt.genSalt(5);
  //console.log(password);
  return await bcrypt.hash(password, salt);
}

async function valid(password, hash) {
  return await bcrypt.compare(password, hash);
}

module.exports = {
  hash,
  valid,
  SECRET,
};