const inventory = require("./inventory.js")
const problem1 = require("./problem1.js")

const car = problem1(inventory)

let {car_year, car_make,car_model} = car
console.log(`Car 33 is a ${car_year} ${car_make} ${car_model}`)
