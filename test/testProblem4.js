const inventory = require("../inventory.js")
const problem4 = require("../problem4.js")

const cars = problem4(inventory)

console.log(cars)
let cars_make_years= cars
module.exports = cars_make_years
