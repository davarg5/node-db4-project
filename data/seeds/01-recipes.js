
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { recipe_id: 1, recipe_name: 'Pizza' },
    { recipe_id: 2, recipe_name: 'Cheese Quesadilla' },
    { recipe_id: 3, recipe_name: 'Shrimp Fried Rice'}
  ]);
};
