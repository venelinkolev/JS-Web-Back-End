const { Schema, Types, model, MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required!'],
    minLength: [5, 'Username is too short!'],
    match: /^[A-za-z0-9]+$/,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    minLength: [10, 'Email i too short!'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    // validate: {
    //   validator: function (value) {
    //     return /^[A-za-z0-9]+$/.test(value);
    //   },
    //   message: 'Invalid password characters!',
    // },
    minLength: [4, 'Password must by four characters long or more!'],
  },
  // cubes: [
  //   {
  //     type: Types.ObjectId,
  //     ref: 'Cube',
  //   },
  // ],
});

userSchema.virtual('rePassword').set(function (value) {
  if (value != this.password) {
    throw new Error('Password missmatch!');
  }
});

// userSchema.pre('save', async function () {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;
// });

const User = model('User', userSchema);

module.exports = User;
