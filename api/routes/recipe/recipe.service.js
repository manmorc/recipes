const RecipeModel = require('../../db/schemas/recipes.schema').Recipe;

async function create(recipeData){
  console.log('create');

  return RecipeModel.create(recipeData);
}

module.exports = {
  create
};
