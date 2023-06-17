const User = require('../models/User');
const { hash, valid, SECRET } = require('../util/secret');

async function createUser(userData) {
  const { username, email, password, rePassword } = userData;

  if (password.length < 4) {
    throw new Error('Password is too short!');
  }
  if (password != rePassword) {
    throw new Error('Password do not match');
  }

  const hashPassword = await hash(password);

  await User.create({
    username,
    email,
    password: hashPassword,
  });
}

async function findUser(userData) {
  const { email, password } = userData;
  const currentUser = await User.findOne({ email });

  if (!currentUser) {
    throw new Error('Email or password do not found!');
  }

  //if isValid is true

  const isValid = await valid(password, currentUser.password);

  if (!isValid) {
    throw new Error('Email or password do not found!');
  }

  // generate token
  return { id: currentUser._id, username: currentUser.username, email };
}

module.exports = {
  createUser,
  findUser,
};
