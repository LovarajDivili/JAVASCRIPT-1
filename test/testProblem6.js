const inventory = require("../inventory.js")
const problem6 = require("../problem6.js")

const result6 = problem6(inventory)

const cars_with_BMW_Audi = JSON.stringify(result6)

console.log(cars_with_BMW_Audi)