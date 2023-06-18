const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    minLength: [10, 'Email is too short!'],
    //unique: [true, 'Email is already exist!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  },
  // cubes: [
  //   {
  //     type: Types.ObjectId,
  //     ref: 'Cube',
  //   },
  // ],
});

const User = model('User', userSchema);

module.exports = User;
