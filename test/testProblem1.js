const inventory = require("../inventory.js")
const problem1 = require("../problem1.js")

const resultFromProblem1 = problem1(inventory)

const {car_year, car_make,car_model} = resultFromProblem1
console.log(`Car 33 is a ${car_year} ${car_make} ${car_model}`)
