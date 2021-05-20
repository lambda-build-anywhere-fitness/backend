exports.up = function(knex) {
    return knex.schema.createTable('user_classes', tbl => {
      tbl.increments();
  
      tbl
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('user')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
      tbl
        .integer('class_id')
        .notNullable()
        .references('id')
        .inTable('class')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_classes');
  };