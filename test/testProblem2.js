const inventory = require("../inventory.js")
const problem2 = require("../problem2.js")

const lastCar = problem2(inventory)

const {car_make,car_model} = lastCar
console.log(`Last car is a ${car_make} ${car_model}`)
