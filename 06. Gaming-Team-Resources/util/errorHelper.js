const { Error, MongooseError } = require('mongoose');

exports.extractErrorMessages = (error) => {
  if (error instanceof MongooseError) {
    return Object.values(error.errors).map((err, index) => (`${index + 1}. ${err.message}`));
  } else if (error) {
    return [error.message];
  }
};
