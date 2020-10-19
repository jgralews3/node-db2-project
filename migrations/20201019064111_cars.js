
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("VIN")
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
        table.text("transType")
        table.text("transStatus")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
