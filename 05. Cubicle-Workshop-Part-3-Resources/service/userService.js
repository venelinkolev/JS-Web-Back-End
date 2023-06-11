const User = require('../models/User');
const { hash, valid, SECRET } = require('../util/secret');

async function createUser(userData) {
    const { username, password, repeatPassword } = userData;

  if (password != repeatPassword) {
      throw new Error ('Password do not match');
  }

  const hashPassword = await hash(password);
    
    await User.create({
        username, 
        password: hashPassword,
    });
}

async function findUser(userData) {
    const { username, password } = userData;
    const currentUser = await User.findOne({ username });
    
    if(!currentUser) {
        throw new Error('User or password do not found!');
    }
    
    //if isValid is true
    
    const isValid = await valid(password, currentUser.password);

    if(!isValid) {
        throw new Error('User or password do not found!');
    }

    // generate token
    return { id: currentUser._id, username };
}

module.exports = {
    createUser,
    findUser
};