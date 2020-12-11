const db = require('../../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    //select * from recipes
    return db('recipes');
}

function getShoppingList(recipe_id) {
    // select
    //     i.ingredient_name,
    //     ri.quantity
    // from ingredients i
    // join "recipe-ingredients" ri
    // on i.ingredient_id = ri.ingredient_id
    // where ri.recipe_id = 1
    return db('ingredients as i')
        .join('recipe-ingredients as ri')
        .select('i.ingredient_name', 'ri.quantity')
        .where('ri.recipe_id', recipe_id);
}

function getInstructions(recipe_id) {
    // select
    //     step_number,
    //     instructions
    // from steps
    // where recipe_id = 1
    // order by step_number
    return db('steps')
        .select('step_number', 'instructions')
        .where('recipe_id', recipe_id)
        .orderBy('step_number');
}
