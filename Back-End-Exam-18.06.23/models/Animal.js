const { Schema, model, Types } = require('mongoose');

const animalSchema = new Schema({
  /*
  · The name is required and should be at least 2 characters.

· The kind is required and should be at least 3 characters.

· The photo image is required and should start with http:// or https://

· The years are required and should be a number between 1 and 100.

· The need is required and should be at least 3 and no longer than 20 characters.

· The description is required and should be at least 5 and no longer than 50 characters.

· The location is required and should be at least 5 and no longer than 15 characters.
*/
  //· The name is required and should be at least 2 characters.
  name: {
    type: String,
    required: [true, 'Name is required!'],
    minLength: 2,
  },
  //The kind is required and should be at least 3 characters.
  kind: {
    type: String,
    required: [true, 'Kind is required!'],
    minLength: 3,
  },
  //The photo image is required and should start with http:// or https://
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required!'],
    match: [/^https?:\/\//, 'Is not valid URL!'],
  },
  //The years are required and should be a number between 1 and 100.
  years: {
    type: Number,
    required: [true, 'Years is required!'],
    min: [1, 'The years should be a number between 1 and 100!'],
    max: [100, 'The years should be a number between 1 and 100!'],
  },
  //The need is required and should be at least 3 and no longer than 20 characters.
  need: {
    type: String,
    required: [true, 'Need is required!'],
    minLength: [
      3,
      'The need should be at least 3 and no longer than 20 characters',
    ],
    maxLength: [
      20,
      'The need should be at least 3 and no longer than 20 characters',
    ],
  },
  //The description is required and should be at least 5 and no longer than 50 characters.
  description: {
    type: String,
    required: [true, 'Description is required!'],
    minLength: [
      5,
      'The description should be at least 5 and no longer than 50 characters.',
    ],
    maxLength: [
      50,
      'The description should be at least 5 and no longer than 50 characters.',
    ],
  },
  //The location is required and should be at least 5 and no longer than 15 characters.
  location: {
    type: String,
    required: [true, 'Location is required!'],
    minLength: [
      5,
      'The location should be at least 5 and no longer than 15 characters.',
    ],
    maxLength: [
      15,
      'The location should be at least 5 and no longer than 15 characters.',
    ],
  },
  donation: [
    {
      type: Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;
