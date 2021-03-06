
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').insert([
    { recipe_ingredient_id: 1, quantity: 2, recipe_id: 1, ingredient_id: 1},
    { recipe_ingredient_id: 2, quantity: 4, recipe_id: 1, ingredient_id: 2},
    { recipe_ingredient_id: 3, quantity: 1, recipe_id: 1, ingredient_id: 3},
    { recipe_ingredient_id: 4, quantity: 1, recipe_id: 2, ingredient_id: 2},
    { recipe_ingredient_id: 5, quantity: 2, recipe_id: 2, ingredient_id: 4},
    { recipe_ingredient_id: 6, quantity: 1, recipe_id: 3, ingredient_id: 5},
    { recipe_ingredient_id: 7, quantity: 24, recipe_id: 3, ingredient_id: 6},
    { recipe_ingredient_id: 8, quantity: 1, recipe_id: 3, ingredient_id: 7},
  ]);
};
