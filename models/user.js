const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    max: 20
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('users', userSchema);