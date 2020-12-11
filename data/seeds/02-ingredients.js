
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { ingredient_id: 1, ingredient_name: 'Dough' },
    { ingredient_id: 2, ingredient_name: 'Cheese' },
    { ingredient_id: 3, ingredient_name: 'Tomato Sauce' },
    { ingredient_id: 4, ingredient_name: 'Tortillas' },
    { ingredient_id: 5, ingredient_name: 'Rice' },
    { ingredient_id: 6, ingredient_name: 'Shrimp' },
    { ingredient_id: 7, ingredient_name: 'Soy Sauce' }
  ]);
};
