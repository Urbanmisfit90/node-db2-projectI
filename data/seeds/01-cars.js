// STRETCH
const cars = [
  {
    vin: "WBA3A5C57CF256651",
    make: "BMW",
    model: "328i",
    mileage: 160000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "WAUAC48H55K008231",
    make: "infiniti",
    model: "Q45",
    mileage: 100000,
    title: "salvage",
  },
  {
    vin: "4JGBB8GB4BA662410",
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
