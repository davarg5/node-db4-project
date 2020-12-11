
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    { step_id: 1, instructions: 'Stretch out dough', step_number: 1, recipe_id: 1 },
    { step_id: 2, instructions: 'Spread tomato sauce on dough', step_number: 2, recipe_id: 1 },
    { step_id: 3, instructions: 'Put cheese on dough', step_number: 3, recipe_id: 1 },
    { step_id: 4, instructions: 'Put pizza in oven', step_number: 4, recipe_id: 1 },
    { step_id: 5, instructions: 'Put tortilla on hot pan', step_number: 1, recipe_id: 2 },
    { step_id: 6, instructions: 'Put cheese on tortilla', step_number: 2, recipe_id: 2 },
    { step_id: 7, instructions: 'Flip tortilla over', step_number: 3, recipe_id: 2 },
    { step_id: 8, instructions: 'Put rice in hot pot', step_number: 1, recipe_id: 3 },
    { step_id: 9, instructions: 'Add shrimp to the rice', step_number: 2, recipe_id: 3 },
    { step_id: 10, instructions: 'Add soy sauce to rice', step_number: 3, recipe_id: 3 }
  ]);
};
