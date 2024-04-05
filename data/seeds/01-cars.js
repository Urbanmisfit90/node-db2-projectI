// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "BMW",
    model: "328i",
    mileage: 160000,
    title: "clean",
    transmision: "automatic",
  },
  {
    vin: "2222222222222",
    make: "infiniti",
    model: "Q45",
    mileage: 100000,
    title: "salvage",
  },
  {
    vin: "3333333333333",
    make: "maserati",
    model: "MC20",
    mileage: 60000,
  },
];

exports.seed = async function (knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars);
  };

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate().then(() => {
//       return knex("cars").insert(cars);
//     });
// };
