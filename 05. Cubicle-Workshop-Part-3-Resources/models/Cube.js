const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: Number,
        required: true,
    },
    accessories: [{
        type: Types.ObjectId,
        ref: 'Accessory',
    }],
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;