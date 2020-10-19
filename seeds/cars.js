exports.seed = async function(knex) {
    await knex("cars").truncate()

    await knex("cars").insert([
        {make: "Toyota", model: "Prius", mileage: "45,000"},
        {make: "Toyota", model: "Camry", mileage: "90,000"}
    ])
}