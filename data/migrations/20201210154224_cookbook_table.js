
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments('recipe_id');
        table.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id');
        table.string('ingredient_name', 128).notNullable();
    })
    .createTable('steps', table => {
        table.increments('step_id');
        table.string('instructions', 128).notNullable();
        table.integer('step_number').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
    })
    .createTable('recipe-ingredients', table => {
        table.increments('recipe_ingredient_id');
        table.integer('quantity').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe-ingredients');
};
