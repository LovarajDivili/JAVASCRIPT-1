const inventory = require("../inventory.js")
const problem6 = require("../problem6.js")
const arrayWithRequiredCarMake = ["Audi","BMW"]
const resultOfProblem6 = problem6(inventory,arrayWithRequiredCarMake)

const cars_with_BMW_Audi = JSON.stringify(resultOfProblem6)

console.log(cars_with_BMW_Audi)
