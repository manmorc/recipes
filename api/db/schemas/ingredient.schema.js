const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxlength: 255
  },
  image: {
    type: String,
  }
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = {
  Ingredient
};
