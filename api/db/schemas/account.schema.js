const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxlength: 255
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  }
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = {
  Account
};
