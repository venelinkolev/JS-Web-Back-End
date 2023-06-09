const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cubes: [
    {
      type: Types.ObjectId,
      ref: 'Cube',
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;
