const inventory = require("../inventory.js")
const problem2 = require("../problem2.js")

const car = problem2(inventory)

let {car_make,car_model} = car
console.log(`Last car is a ${car_make} ${car_model}`)
