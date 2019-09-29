const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  mainType: {
    type: String,
    enum: ['Десерт', 'Выпечка', 'Кулинария', 'Напиток'],
  },
  // TODO add additionalType enums
  // additionalType: {
  //   type: String,
  //   enum: ['Coffee', 'Tea'],
  // },
  seasonality: {
    type: String,
    enum: ['Лето', 'Зима', 'Осень', 'Весна'],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  ingredients: [
    {
      name: {
        type: String,
        ref: 'Ingredient',
      },
      count: {
        type: Number,
      },
      unit: {
        type: String,
        enum: ['л', 'мл', 'кило', 'грамм', 'унция']
      }
    }
  ]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Recipe
};
