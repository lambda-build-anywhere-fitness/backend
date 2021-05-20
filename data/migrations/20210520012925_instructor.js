exports.up = function(knex) {
    return knex.schema.createTable('instructor', tbl => {
      tbl.increments();
  
      tbl
        .integer('user_id')
        .notNullable()
        .unique()
        .references('id')
        .inTable('user')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
      tbl
        .integer('class_id')
        .notNullable()
        .unique()
        .references('id')
        .inTable('classes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructor');
  }