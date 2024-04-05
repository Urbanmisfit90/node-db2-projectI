  // DO YOUR MAGIC
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl) {
    tbl.increments(); // auto-incrementing id field

    tbl.string('vin', 17).notNullable().unique(); // Assuming VIN is a string of length 17 and should be unique

    tbl.string('make', 128).notNullable();

    tbl.string('model', 128).notNullable();

    tbl.numeric('mileage').unsigned().notNullable();

    tbl.string('title', 128)

    tbl.string('transmission', 128)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
