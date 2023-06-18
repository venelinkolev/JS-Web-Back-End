const User = require('../models/User');
const { hash, valid, SECRET } = require('../util/secret');

async function createUser(userData) {
  const { email, password, rePassword } = userData;

  if (password.length < 4) {
    throw new Error('Password should be at least 4 characters long!');
  }

  if (password != rePassword) {
    throw new Error('Password do not match');
  }

  const hashPassword = await hash(password);

  await User.create({
    email,
    password: hashPassword,
  });
}

async function findUser(userData) {
  const { email, password } = userData;
  console.log(email, password);
  const currentUser = await User.findOne({ email });

  if (!currentUser) {
    throw new Error('User or password do not found!');
  }

  //if isValid is true

  const isValid = await valid(password, currentUser.password);

  if (!isValid) {
    throw new Error('User or password do not found!');
  }

  // generate token
  return { id: currentUser._id, email };
}

module.exports = {
  createUser,
  findUser,
};
