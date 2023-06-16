const { Schema, model, Types } = require('mongoose');

/*
•	name: string (required),
•	image: string (required),
•	price: number (required),
•	description: string (required),
•	genre: string (required),
•	platform: string (required; one of the following: "PC", "Nintendo", "PS4", "PS5", "XBOX"),
•	boughtBy: a collection (array) of users (references to the "User" model)
•	owner: object ID (a reference to the "User" model)

*/

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  genre: {
    type: String,
    required: true,
  },
  //platform: string (required; one of the following: "PC", "Nintendo", "PS4", "PS5", "XBOX")
  platform: {
    type: String,
    required: true,
    enum: {
      values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
      message: '{VALUE} is not valid',
    },
  },

  //   boughtBy: a collection (array) of users (references to the "User" model)
  boughtBy: [
    {
      type: Types.ObjectId,
      ref: 'User',
    },
  ],

  // 	owner: object ID (a reference to the "User" model)
  creatorId: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;
